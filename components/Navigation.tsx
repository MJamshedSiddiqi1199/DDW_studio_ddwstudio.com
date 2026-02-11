'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11">
              <Image
                src="https://mgx-backend-cdn.metadl.com/generate/images/945228/2026-02-05/ae679f7f-3454-4e69-8fe6-315c16aebc94.png"
                alt="DDW Studio Logo"
                fill
                className="object-contain transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-tight font-display">
                DDW Studio
              </span>
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Enterprise AI</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {['Products', 'Solutions', 'Enterprise', 'Pricing', 'About'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="relative px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300 rounded-lg group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item}
                <span className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/70 to-indigo-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="#contact" 
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-300"
            >
              Talk to Sales
            </a>
            <a 
              href="#demo" 
              className="btn-primary text-sm px-6 py-3"
            >
              <span>Get Demo</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2">
            {['Products', 'Solutions', 'Enterprise', 'Pricing', 'About'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="block px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                {item}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a href="#contact" className="btn-secondary text-sm text-center">Talk to Sales</a>
              <a href="#demo" className="btn-primary text-sm text-center"><span>Get Demo</span></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}