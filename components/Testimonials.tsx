// components/Testimonials.tsx — Section 7: Client Testimonials (Internationalized)
// Uses useTranslations('Testimonials') to pull translated quotes, roles, and section headers.
//
// HOW IT WORKS:
// 1. t('badge') → "Client Success" (en) or "Successo dei Clienti" (it)
// 2. t('testimonial1.quote') → full translated testimonial quote
// 3. Author names stay the same in both languages (they're real people)
// 4. Company names stay in English (they're brand names)
// 5. Role titles are translated: "VP of Operations" → "VP Operations"

'use client';

import { useEffect, useRef, useState } from 'react';
// useTranslations — hook to get translated strings from the Testimonials namespace
import { useTranslations } from 'next-intl';

// Testimonial visual config — gradient colors and avatar initials
// These don't change per locale
const testimonialVisuals = [
  { key: 'testimonial1', image: 'JD', gradient: 'from-violet-500 to-purple-600' },
  { key: 'testimonial2', image: 'SM', gradient: 'from-blue-500 to-cyan-500' },
  { key: 'testimonial3', image: 'MC', gradient: 'from-emerald-500 to-teal-500' },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // useTranslations('Testimonials') — reads from "Testimonials" key in en.json or it.json
  const t = useTranslations('Testimonials');

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
    <section ref={sectionRef} className="relative py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {/* t('badge') → "Client Success" (en) or "Successo dei Clienti" (it) */}
          <div className="badge mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
            {t('badge')}
          </div>
          {/* t('h2') → "What Leaders" (en) or "Cosa Dicono i" (it) */}
          {/* t('h2Highlight') → "Say" (en) or "Leader" (it) */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            {t('h2')} <span className="text-gradient">{t('h2Highlight')}</span>
          </h2>
          {/* t('subtitle') → section subtitle */}
          <p className="text-lg text-zinc-400 leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonialVisuals.map((testimonial, index) => (
            <div
              key={testimonial.key}
              className={`testimonial-card transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon — visual only */}
              <svg className="w-10 h-10 text-indigo-500/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote — t('testimonial1.quote') → translated testimonial text */}
              <p className="text-lg text-white leading-relaxed mb-8">
                &ldquo;{t(`${testimonial.key}.quote`)}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                {/* Avatar with initials — same in both locales */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold font-display`}>
                  {testimonial.image}
                </div>
                <div>
                  {/* t('testimonial1.author') → author name (same in both) */}
                  <div className="font-semibold text-white">{t(`${testimonial.key}.author`)}</div>
                  {/* t('testimonial1.role') + t('testimonial1.company') → role and company */}
                  <div className="text-sm text-zinc-500">
                    {t(`${testimonial.key}.role`)}, {t(`${testimonial.key}.company`)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}