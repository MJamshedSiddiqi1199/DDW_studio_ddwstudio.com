// components/Hero3D.tsx — Locale-aware Hero section with 3D effects
// This component uses useTranslations('Hero') to pull the correct hero text
// based on the current locale (English or Italian).
//
// HOW TRANSLATIONS WORK HERE:
// 1. useTranslations('Hero') reads the "Hero" object from messages/en.json or messages/it.json
// 2. t('h1Line1') returns "AI Automation Platform" (en) or "Piattaforma di Automazione AI" (it)
// 3. t('badge1') returns "Enterprise AI Platform" (en) or "Piattaforma AI Enterprise" (it)
// 4. t('industries.healthcare') returns "Healthcare" (en) or "Sanità" (it)
//
// NOTE: All product names (Lyra, HR-OS, Fleet-OS, Proposal Gen) stay in English per SEO guide.

'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
// useTranslations — the main hook for getting translated strings
import { useTranslations } from 'next-intl';
import { HeartPulse, Landmark, Factory, Truck, Cpu } from 'lucide-react';
import { useModal } from './ContactForm/ModalContext';

export default function Hero3D() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  // useTranslations('Hero') — reads from the "Hero" key in the current locale's JSON file
  // t('key') returns the translated string for that key
  const t = useTranslations('Hero');
  const { openContactModal } = useModal();

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);



  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - 3D Shapes (no translation needed for visual elements) */}
      <div className="absolute inset-0">
        <Image
          src="https://mgx-backend-cdn.metadl.com/generate/images/945228/2026-02-05/2f2c3d0d-8b35-4ea0-a3ac-8c3687ad5bba.png"
          alt="3D Abstract Shapes"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
      </div>

      {/* Background Elements — visual effects, no translation needed */}
      <div className="hero-gradient"></div>
      <div className="grid-pattern"></div>

      {/* AI Sphere Visual - Floating (visual only, no text) */}
      <div
        className="absolute top-1/4 right-[10%] w-[300px] h-[300px] opacity-60 hidden lg:block"
        style={{
          transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -40}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <Image
          src="https://mgx-backend-cdn.metadl.com/generate/images/945228/2026-02-05/ead3e0f6-e805-4a2f-aff0-8bdfa94aac83.png"
          alt="AI Sphere"
          fill
          className="object-contain animate-float-slow"
        />
      </div>

      {/* 3D Floating Shapes — visual decorations, no translation needed */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Gradient Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] gradient-orb bg-indigo-500/20"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] gradient-orb bg-purple-500/20"
          style={{
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '-2s'
          }}
        ></div>

        {/* 3D Floating Geometric Shapes */}
        <div
          className="absolute top-20 right-[20%] w-20 h-20 shape-3d"
          style={{
            transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -40}px) rotateX(${mousePosition.y * 20}deg) rotateY(${mousePosition.x * 20}deg)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-indigo-500/30 to-purple-500/10 border border-white/10 backdrop-blur-sm"></div>
        </div>

        <div
          className="absolute bottom-32 left-[15%] w-16 h-16 shape-3d"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px) rotateX(${mousePosition.y * -25}deg) rotateY(${mousePosition.x * -25}deg)`,
            transition: 'transform 0.2s ease-out',
            animationDelay: '-3s'
          }}
        >
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-pink-500/30 to-purple-500/10 border border-white/10 backdrop-blur-sm"></div>
        </div>

        <div
          className="absolute top-1/3 left-[10%] w-12 h-12 shape-3d"
          style={{
            transform: `translate(${mousePosition.x * 60}px, ${mousePosition.y * 60}px) rotateX(${mousePosition.y * 30}deg) rotateY(${mousePosition.x * 30}deg)`,
            transition: 'transform 0.2s ease-out',
            animationDelay: '-5s'
          }}
        >
          <div className="w-full h-full rounded-lg bg-gradient-to-br from-cyan-500/30 to-blue-500/10 border border-white/10 backdrop-blur-sm"></div>
        </div>

        {/* Orbiting Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="ring-3d w-[400px] h-[400px] opacity-20"></div>
          <div className="ring-3d w-[500px] h-[500px] opacity-15" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
          <div className="ring-3d w-[600px] h-[600px] opacity-10" style={{ animationDuration: '30s' }}></div>
        </div>

        {/* Small Floating Dots */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-indigo-400/40 animate-float-slow"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * -1.5}s`,
              animationDuration: `${6 + i}s`
            }}
          ></div>
        ))}
      </div>

      {/* ===== CONTENT — All text below uses translations ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-48 lg:pb-32">
        <div className="text-center max-w-5xl mx-auto">

          {/* Enterprise Badges — translated via t('badge1') and t('badge2') */}
          <div
            className={`inline-flex items-center gap-4 mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {/* Badge 1: t('badge1') → "Enterprise AI Platform" (en) or "Piattaforma AI Enterprise" (it) */}
            <div className="badge">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              {t('badge1')}
            </div>

            {/* Badge 2: t('badge2') → "SOC 2 Certified" (en) or "Certificato SOC 2" (it) */}
            <div className="enterprise-badge">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {/* SOC 2 certification label — translated */}
              {t('badge2')}
            </div>
          </div>

          {/* ===== MAIN HEADLINE (H1) ===== */}
          {/* This is the most important text for SEO. */}
          {/* EN: "AI Automation Platform" + "for Modern Enterprises" */}
          {/* IT: "Piattaforma di Automazione AI" + "per le Aziende Moderne" */}
          <h1
            className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {/* t('h1Line1') → "AI Automation Platform" (en) or "Piattaforma di Automazione AI" (it) */}
            <span className="block">{t('h1Line1')}</span>
            {/* t('h1Line2') → "for Modern Enterprises" (en) or "per le Aziende Moderne" (it) */}
            <span className="block text-gradient-vibrant mt-2">{t('h1Line2')}</span>
          </h1>

          {/* ===== SUBHEADLINE ===== */}
          {/* Describes the platform capabilities. Translated for SEO keywords. */}
          <p
            className={`text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {/* t('subheadline') → main description text */}
            {t('subheadline')}
            {/* t('subheadlineHighlight') → "Reduce response times by 95%..." — highlighted in white */}
            <span className="text-white font-medium">{t('subheadlineHighlight')}</span>
            {/* t('subheadlineTrust') → "Trusted by 500+ teams worldwide." */}
            {t('subheadlineTrust')}
          </p>

          {/* ===== CTA BUTTONS ===== */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-5 mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            {/* Primary CTA: t('cta1') → "Schedule Enterprise Demo" or "Prenota una Demo Enterprise" */}
            <button
              onClick={openContactModal}
              className="btn-primary text-base px-10 py-5 group"
            >
              <span className="flex items-center gap-2">
                {t('cta1')}
                <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>

            {/* Secondary CTA: t('cta2') → "Explore Products" or "Esplora i Prodotti" */}
            <a href="#products" className="btn-secondary text-base px-10 py-5 group">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                {t('cta2')}
              </span>
            </a>
          </div>

          {/* ===== TRUST INDICATORS / TICKER ===== */}
          <div
            className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <p className="text-sm text-zinc-400 mb-10 uppercase tracking-[0.2em] font-semibold">{t('ticker')}</p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
              {[
                { key: 'healthcare', icon: HeartPulse },
                { key: 'finance', icon: Landmark },
                { key: 'manufacturing', icon: Factory },
                { key: 'logistics', icon: Truck },
                { key: 'technology', icon: Cpu },
              ].map(({ key, icon: Icon }) => (
                <div
                  key={key}
                  className="flex items-center gap-4 group cursor-default transition-all duration-300"
                >
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/10 transition-all duration-500 shadow-xl group-hover:shadow-white/5">
                      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                    </div>
                    {/* Subtle glow effect on hover */}
                    <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  </div>
                  <span className="text-sm font-semibold tracking-wide text-white/60 group-hover:text-white transition-colors duration-300">
                    {t(`industries.${key}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade — visual only */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent"></div>

      {/* Scroll Indicator — translated */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <div className="flex flex-col items-center gap-2 text-zinc-500">
          {/* t('scrollToExplore') → "Scroll to explore" or "Scorri per esplorare" */}
          <span className="text-xs uppercase tracking-widest font-medium">{t('scrollToExplore')}</span>
          <div className="w-6 h-10 rounded-full border-2 border-zinc-700 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}