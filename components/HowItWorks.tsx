// components/HowItWorks.tsx — Section 5: How It Works (Internationalized)
// Uses useTranslations('HowItWorks') to pull translated step titles, descriptions, and labels.
//
// HOW IT WORKS:
// 1. t('badge') → "How It Works" (en) or "Come Funziona" (it)
// 2. t('step1.title') → "Discovery Call" (en) or "Chiamata di Discovery" (it)
// 3. t('efficiencyLabel') → "Efficiency Gain" (en) or "Aumento dell'Efficienza" (it)
// 4. Icons are visual-only and don't need translation

'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
// useTranslations — hook to get translated strings from the HowItWorks namespace
import { useTranslations } from 'next-intl';

// Step icons — purely visual, no translation needed
const stepIcons = [
  // Step 01: Discovery/Search icon
  <svg key="search" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>,
  // Step 02: Integration/Settings icon
  <svg key="settings" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  // Step 03: Launch/Lightning icon
  <svg key="lightning" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
];

// Step keys for translation lookup — maps to step1, step2, step3 in the JSON
const stepKeys = ['step1', 'step2', 'step3'] as const;

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // useTranslations('HowItWorks') — reads from "HowItWorks" key in en.json or it.json
  const t = useTranslations('HowItWorks');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="solutions" className="relative py-32 overflow-hidden">
      {/* Background — visual, no translation */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual (image, no translation needed) */}
          <div
            className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="https://mgx-backend-cdn.metadl.com/generate/images/945228/2026-02-05/868f4c49-c958-4015-95da-ae80ff928742.png"
                alt="Dashboard Hologram"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            </div>

            {/* Floating Stats Badge */}
            <div className="absolute -bottom-6 -right-6 glass-card p-6 animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  {/* t('efficiencyValue') → "+47%" — same in both languages */}
                  <div className="text-2xl font-bold text-white font-display">{t('efficiencyValue')}</div>
                  {/* t('efficiencyLabel') → "Efficiency Gain" (en) or "Aumento dell'Efficienza" (it) */}
                  <div className="text-xs text-zinc-500">{t('efficiencyLabel')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            {/* Header */}
            <div
              className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              {/* t('badge') → "How It Works" (en) or "Come Funziona" (it) */}
              <div className="badge mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
                {t('badge')}
              </div>
              {/* t('h2') → "From Consultation to" (en) or "Dalla Consulenza ai" (it) */}
              {/* t('h2Highlight') → "Results" (en) or "Risultati" (it) */}
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
                {t('h2')} <span className="text-gradient">{t('h2Highlight')}</span>
              </h2>
              {/* t('subtitle') → section description with ROI language */}
              <p className="text-lg text-zinc-400 leading-relaxed">
                {t('subtitle')}
              </p>
            </div>

            {/* Steps — translated via stepKeys */}
            <div className="space-y-6">
              {stepKeys.map((stepKey, index) => (
                <div
                  key={stepKey}
                  className={`glass-card p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  style={{ transitionDelay: `${index * 200 + 300}ms` }}
                >
                  <div className="flex items-start gap-5">
                    <div className="flex items-center gap-4">
                      {/* t('step1.number') → "01" — step number (same in both) */}
                      <span className="text-4xl font-bold font-display text-indigo-500/30">
                        {t(`${stepKey}.number`)}
                      </span>
                      <div className="feature-icon">
                        {/* Icon is visual — doesn't need translation */}
                        {stepIcons[index]}
                      </div>
                    </div>
                    <div>
                      {/* t('step1.title') → "Discovery Call" (en) or "Chiamata di Discovery" (it) */}
                      <h3 className="text-xl font-bold text-white mb-2 font-display">
                        {t(`${stepKey}.title`)}
                      </h3>
                      {/* t('step1.description') → step description text */}
                      <p className="text-zinc-400 leading-relaxed">
                        {t(`${stepKey}.description`)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}