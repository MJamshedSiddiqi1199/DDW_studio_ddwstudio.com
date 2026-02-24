// components/Stats.tsx — Section 3: Numbers That Speak (Internationalized)
// Uses useTranslations('Stats') to pull translated stat labels and section headers.
//
// HOW IT WORKS:
// 1. t('badge') → "Proven Results" (en) or "Risultati Dimostrati" (it)
// 2. t('stat1.label') → "Revenue Generated for Clients" (en) or "Fatturato Generato per i Clienti" (it)
// 3. t('stat1.prefix') → "$" (en) or "€" (it) ← IMPORTANT: currency changes per locale!
// 4. The numeric values stay the same — only labels and symbols change.

'use client';

import { useEffect, useRef, useState } from 'react';
// useTranslations — hook to get translated strings from the Stats namespace
import { useTranslations } from 'next-intl';

interface StatItemProps {
    value: string;
    label: string;
    suffix?: string;
    prefix?: string;
    delay: number;
}

function StatItem({ value, label, suffix = '', prefix = '', delay }: StatItemProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const numericValue = parseFloat(value.replace(/[^\d.]/g, ''));

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    useEffect(() => {
        if (!isVisible) return;

        const duration = 2000;
        const steps = 60;
        const increment = numericValue / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
                setCount(numericValue);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current * 10) / 10);
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [isVisible, numericValue]);

    return (
        <div
            ref={ref}
            className={`stat-card transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
        >
            <div className="text-5xl md:text-6xl font-bold font-display text-gradient-purple mb-3">
                {/* prefix comes from translations — "$" for English, "€" for Italian */}
                {prefix}
                {Number.isInteger(numericValue) ? Math.floor(count) : count.toFixed(1)}
                {/* suffix comes from translations — "M+", "s", "%" etc. */}
                {suffix}
            </div>
            {/* label is the translated description text */}
            <div className="text-base text-zinc-400 font-medium">{label}</div>
        </div>
    );
}

export default function Stats() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    // useTranslations('Stats') — reads from the "Stats" key in en.json or it.json
    const t = useTranslations('Stats');

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

    // Stats array now uses translated values from messages JSON
    // t('stat1.prefix') → "$" (en) or "€" (it) — CRITICAL: currency symbol changes per locale
    // t('stat1.label') → translated label text
    const stats = [
        { value: t('stat1.value'), label: t('stat1.label'), prefix: t('stat1.prefix'), suffix: t('stat1.suffix'), delay: 0 },
        { value: t('stat2.value'), label: t('stat2.label'), prefix: t('stat2.prefix'), suffix: t('stat2.suffix'), delay: 100 },
        { value: t('stat3.value'), label: t('stat3.label'), prefix: t('stat3.prefix'), suffix: t('stat3.suffix'), delay: 200 },
        { value: t('stat4.value'), label: t('stat4.label'), prefix: t('stat4.prefix'), suffix: t('stat4.suffix'), delay: 300 },
    ];

    return (
        <section ref={sectionRef} className="w-full relative py-32 overflow-hidden">
            {/* Background — visual only, no translation needed */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent"></div>

            <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div
                    className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    {/* t('badge') → "Proven Results" (en) or "Risultati Dimostrati" (it) */}
                    <div className="badge mb-6">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                        </svg>
                        {t('badge')}
                    </div>
                    {/* t('h2') → "Numbers That" (en) or "I Numeri Parlano" (it) */}
                    {/* t('h2Highlight') → "Speak" (en) or "Chiaro" (it) */}
                    <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
                        {t('h2')} <span className="text-gradient">{t('h2Highlight')}</span>
                    </h2>
                    {/* t('subtitle') → section description */}
                    <p className="text-lg text-zinc-400 leading-relaxed">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Stats Grid — each StatItem receives translated props */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <StatItem
                            key={stat.label}
                            value={stat.value}
                            label={stat.label}
                            prefix={stat.prefix}
                            suffix={stat.suffix}
                            delay={stat.delay}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}