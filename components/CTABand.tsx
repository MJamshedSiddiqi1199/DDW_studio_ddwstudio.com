// components/CTABand.tsx — Section 9: Final CTA (Internationalized)
// Uses useTranslations('CTA') to pull translated CTA heading, subtitle, buttons, and microcopy.
//
// HOW IT WORKS:
// 1. t('h2Line1') → "Ready to Transform" (en) or "Pronto a Trasformare" (it)
// 2. t('cta1') → "Schedule a Demo" (en) or "Prenota una Demo" (it)
// 3. t('microcopy') → trust line with bullet points, fully translated
//    "Consulenza gratuita" is a very high-converting phrase in Italian B2B

'use client';

import { useEffect, useRef, useState } from 'react';
// useTranslations — hook to get translated strings from the CTA namespace
import { useTranslations } from 'next-intl';
import { useModal } from './ContactForm/ModalContext';

export default function CTABand() {
  const [isVisible, setIsVisible] = useState(false);
  const { openContactModal } = useModal();
  const sectionRef = useRef<HTMLElement>(null);

  // useTranslations('CTA') — reads from "CTA" key in en.json or it.json
  const t = useTranslations('CTA');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`relative overflow-hidden rounded-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
        >
          {/* Background — visual, no translation */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700"></div>

          {/* Pattern Overlay — visual only */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          {/* Glow Effects — visual only */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative px-8 py-20 lg:px-16 lg:py-28 text-center">
            {/* t('h2Line1') → "Ready to Transform" (en) or "Pronto a Trasformare" (it) */}
            {/* t('h2Line2') → "Your Operations?" (en) or "le Tue Operazioni?" (it) */}
            <h2
              className={`drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              {t('h2Line1')}<br />{t('h2Line2')}
            </h2>
            {/* t('subtitle') → CTA subtitle encouraging action */}
            <p
              className={`drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] text-xl text-white/80 max-w-2xl mx-auto mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              {t('subtitle')}
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-5 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              {/* Primary CTA: opens the form */}
              <button
                onClick={openContactModal}
                className="inline-flex items-center px-10 py-5 text-base font-semibold text-indigo-600 bg-white rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-indigo-900/30 hover:shadow-xl hover:shadow-indigo-900/40 hover:-translate-y-1 group"
              >
                {t('cta1')}
                <svg className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              {/* Secondary CTA: also opens the form */}
              <button
                onClick={openContactModal}
                className="drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] inline-flex items-center px-10 py-5 text-base font-semibold text-white bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
              >
                {t('cta2')}
              </button>
            </div>

            {/* Trust Line / Microcopy */}
            <p
              className={`drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] mt-10 text-lg text-white transition-all duration-700 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            >
              {t('microcopy')}
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}