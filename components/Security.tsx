// components/Security.tsx — Section 8: Enterprise Security (Internationalized)
// Uses useTranslations('Security') to pull translated security feature titles and descriptions.
//
// HOW IT WORKS:
// 1. t('badge') → "Enterprise Security" (en) or "Sicurezza Enterprise" (it)
// 2. t('feature2.title') → "GDPR Compliant" (en) or "Conforme al GDPR" (it)
//    ⚠️ GDPR compliance is the #1 trust signal for Italian businesses
// 3. Certification badges (GDPR, HIPAA, ISO 27001, CCPA) stay in English
// 4. t('h2') + t('h2Highlight') → "Bank-Grade Security" (en) or "Sicurezza di Livello Bancario" (it)

'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
// useTranslations — hook to get translated strings from the Security namespace
import { useTranslations } from 'next-intl';

// Security feature icons — visual only, no translation needed
const featureIcons = [
    // Security shield icon
    <svg key="security-shield" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>,
    // GDPR globe icon
    <svg key="gdpr" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    // Encryption lock icon
    <svg key="encryption" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>,
    // Uptime server icon
    <svg key="uptime" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>,
];

// Feature keys for translation lookup
const featureKeys = ['feature1', 'feature2', 'feature3', 'feature4'] as const;

export default function Security() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    // useTranslations('Security') — reads from "Security" key in en.json or it.json
    const t = useTranslations('Security');

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

    // Certification badges — these stay in English as international standards
    // We read from translations to allow flexibility, but values are same in both
    const certifications = ['AES-256', 'GDPR', 'HIPAA', 'ISO 27001', 'CCPA'];

    return (
        <section ref={sectionRef} id="security" className="w-full relative py-32 overflow-hidden">
            {/* Background — visual, no translation */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent"></div>

            <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div
                        className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                            }`}
                    >
                        {/* t('badge') → "Enterprise Security" (en) or "Sicurezza Enterprise" (it) */}
                        <div className="badge mb-6">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {t('badge')}
                        </div>
                        {/* t('h2') → "Bank-Grade" (en) or "Sicurezza di Livello" (it) */}
                        {/* t('h2Highlight') → "Security" (en) or "Bancario" (it) */}
                        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
                            {t('h2')} <span className="text-gradient">{t('h2Highlight')}</span>
                        </h2>
                        {/* t('subtitle') → security description mentioning GDPR compliance */}
                        <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
                            {t('subtitle')}
                        </p>

                        {/* Security Features Grid */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {featureKeys.map((featureKey, index) => (
                                <div
                                    key={featureKey}
                                    className={`flex gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                        }`}
                                    style={{ transitionDelay: `${index * 100 + 200}ms` }}
                                >
                                    <div className="feature-icon flex-shrink-0">
                                        {/* Icon is visual — no translation needed */}
                                        {featureIcons[index]}
                                    </div>
                                    <div>
                                        {/* t('feature1.title') → "Secure Infrastructure" (same in both) or "Conforme al GDPR" */}
                                        <h3 className="text-xl font-bold text-white mb-2">{t(`${featureKey}.title`)}</h3>
                                        {/* t('feature1.description') → translated description */}
                                        <p className="text-base text-zinc-400">{t(`${featureKey}.description`)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div
                        className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                            }`}
                    >
                        <div className="glass-card p-10 lg:p-14 overflow-hidden relative">
                            {/* Background Image for Security Card */}
                            <div className="absolute inset-0 opacity-15">
                                <Image
                                    src="/images/banking-security.png"
                                    alt="Banking Security"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-indigo-950/40"></div>
                            </div>

                            {/* Shield Visual — no translation needed */}
                            <div className="relative mx-auto w-48 h-48 mb-10">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl opacity-20 blur-3xl animate-pulse-glow"></div>
                                <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-600/10 border border-indigo-500/20 flex items-center justify-center backdrop-blur-sm">
                                    <svg className="w-24 h-24 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Certification badges — international standards, stay in English */}
                            <div className="flex flex-wrap justify-center gap-3">
                                {certifications.map((cert, index) => (
                                    <span
                                        key={cert}
                                        className={`px-4 py-2 text-sm font-medium text-zinc-400 bg-white/5 rounded-full border border-white/10 transition-all duration-500 hover:border-indigo-500/30 hover:bg-indigo-500/5 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                                            }`}
                                        style={{ transitionDelay: `${index * 100 + 600}ms` }}
                                    >
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}