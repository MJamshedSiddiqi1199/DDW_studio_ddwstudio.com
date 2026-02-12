'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import { useModal } from './ContactForm/ModalContext';

export default function Navigation() {

  const { openContactModal } = useModal();


  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  // useTranslations('Navigation') — reads the "Navigation" object from the current locale's JSON
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on click outside or escape
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setIsLangOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  const navLinkKeys = ['home', 'products', 'about'] as const;
  const navPaths: Record<string, string> = {
    home: '/',
    products: '/#products',
    about: '/about'
  };

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || mobileMenuOpen
        ? 'bg-black/80 backdrop-blur-xl border-b border-white/5'
        : 'bg-black/20 backdrop-blur-sm'
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div className="relative w-11 h-11">
              <Image
                src="https://mgx-backend-cdn.metadl.com/generate/images/945228/2026-02-05/ae679f7f-3454-4e69-8fe6-315c16aebc94.png"
                alt="DDW Studio Logo"
                fill
                className="object-contain transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-tight font-display">
                {t('brand')}
              </span>
              <span className="text-[10px] text-indigo-400 font-semibold uppercase tracking-[0.2em]">
                {t('brandSub')}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinkKeys.map((key) => {
              const path = navPaths[key];
              const isExternal = path.startsWith('/');

              return isExternal ? (
                <Link
                  key={key}
                  href={path as any}
                  className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-all duration-300 hover:bg-white/5 rounded-full"
                >
                  {t(`links.${key}`)}
                </Link>
              ) : (
                <a
                  key={key}
                  href={path}
                  className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-all duration-300 hover:bg-white/5 rounded-full"
                >
                  {t(`links.${key}`)}
                </a>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 
                           hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm font-medium text-white"
              >
                <Globe className="w-4 h-4 text-indigo-400" />
                <span>{locale.toUpperCase()}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-40 overflow-hidden rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl backdrop-blur-2xl"
                  >
                    <div className="p-1">
                      {languages.map((lang) => (
                        <Link
                          key={lang.code}
                          href={pathname}
                          locale={lang.code as any}
                          onClick={() => setIsLangOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all duration-200 rounded-xl
                                     ${locale === lang.code ? 'bg-indigo-500/20 text-indigo-400' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
                        >
                          <span className="text-base leading-none">{lang.flag}</span>
                          <span>{lang.label}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="https://calendly.com/digi-dreamworks/onboarding-call"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-base font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-1 flex items-center group"
            >
              <span>{t('cta.talkToUs')}</span>
              <svg className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <button
              onClick={openContactModal}
              className="px-6 py-2.5 text-base font-semibold text-zinc-900 bg-white rounded-xl hover:bg-indigo-50 transition-all duration-300 shadow-lg shadow-white/5 hover:shadow-indigo-500/20 hover:-translate-y-1 flex items-center group"
            >
              <span>{t('cta.getDemo')}</span>
              <svg className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden relative z-50 p-2 text-white hover:bg-white/10 rounded-xl transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="lg:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
            >
              <div className="px-6 py-8 space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
                <div className="space-y-1">
                  {navLinkKeys.map((key) => {
                    const path = navPaths[key];
                    const isExternal = path.startsWith('/');

                    return isExternal ? (
                      <Link
                        key={key}
                        href={path as any}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-6 py-4 text-xl font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-2xl transition-all duration-300"
                      >
                        {t(`links.${key}`)}
                      </Link>
                    ) : (
                      <a
                        key={key}
                        href={path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-6 py-4 text-xl font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-2xl transition-all duration-300"
                      >
                        {t(`links.${key}`)}
                      </a>
                    );
                  })}
                </div>

                <div className="pt-6 border-t border-white/10 space-y-6">
                  {/* Mobile Lang Selector */}
                  <div className="flex items-center gap-4 px-6 overflow-x-auto no-scrollbar">
                    {languages.map((lang) => (
                      <Link
                        key={lang.code}
                        href={pathname}
                        locale={lang.code as any}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300
                                   ${locale === lang.code
                            ? 'bg-indigo-500/20 border-indigo-500 text-indigo-400'
                            : 'bg-white/5 border-white/10 text-white/60'}`}
                      >
                        <span>{lang.flag}</span>
                        <span className="text-sm font-semibold uppercase">{lang.code}</span>
                      </Link>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 px-6">
                    <a
                      href="https://calendly.com/digi-dreamworks/onboarding-call"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-6 py-4 text-xl font-bold text-center w-full justify-center bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition-all flex items-center gap-2"
                    >
                      <span>{t('cta.talkToUs')}</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        openContactModal();
                      }}
                      className="px-6 py-4 text-xl font-bold text-center w-full justify-center bg-white text-zinc-900 rounded-2xl hover:bg-indigo-50 transition-all flex items-center gap-2"
                    >
                      <span>{t('cta.getDemo')}</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </nav>
  );
}