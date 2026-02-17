// components/CompanyInfo.tsx — Section 6: About DDW Studio (Internationalized)
// Uses useTranslations('CompanyInfo') to pull translated about text, card descriptions, and stats.
//
// HOW IT WORKS:
// 1. t('badge') → "About DDW Studio" (en) or "Chi è DDW Studio?" (it)
// 2. t('location') → "Florida, USA" (en) or "Florida, USA — Roma, Italia" (it)
//    ⚠️ IMPORTANT: Italian version adds "Roma, Italia" for local SEO trust signal
// 3. t('ddwCard.description') → Card text changes to say "Fleet-OS" instead of "Dispatch" in IT
// 4. Brand names stay in English: DDW Studio, Digital Dream Works LLC

'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
// useTranslations — hook to get translated strings from the CompanyInfo namespace
import { useTranslations } from 'next-intl';

export default function CompanyInfo() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    // useTranslations('CompanyInfo') — reads from "CompanyInfo" key in en.json or it.json
    const t = useTranslations('CompanyInfo');

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
        <section ref={sectionRef} id="about" className="relative py-32 overflow-hidden">
            {/* Background — visual, no translation */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent"></div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div
                        className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                            }`}
                    >
                        {/* t('badge') → "About DDW Studio" (en) or "Chi è DDW Studio?" (it) */}
                        <div className="badge mb-6">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                            </svg>
                            {t('badge')}
                        </div>

                        {/* Section heading — uses h2Pre, h2Highlight, h2Post for flexible localization */}
                        {/* EN: "The" + "AI Evolution" + "of Digital Dream Works" */}
                        {/* IT: "L'" + "Evoluzione AI" + "di Digital Dream Works" */}
                        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
                            {t('h2Pre')} <span className="text-gradient-vibrant">{t('h2Highlight')}</span> {t('h2Post')}
                        </h2>

                        {/* About paragraph — uses t.rich() to render <company> tag as a styled span */}
                        <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                            {t.rich('aboutPara', {
                                company: (chunks) => <span className="text-white font-medium">{chunks}</span>
                            })}
                        </p>

                        {/* Company Structure Cards */}
                        <div className="space-y-6">
                            {/* DDW Studio Card */}
                            <div className="glass-card p-6">
                                <div className="flex items-start gap-4">
                                    <div className="relative w-14 h-14 flex-shrink-0">
                                        <Image
                                            src="https://mgx-backend-cdn.metadl.com/generate/images/945228/2026-02-05/ae679f7f-3454-4e69-8fe6-315c16aebc94.png"
                                            alt="DDW Studio Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div>
                                        {/* t('ddwCard.title') → "DDW Studio" — brand name stays English */}
                                        <h3 className="text-lg font-bold text-white mb-1">{t('ddwCard.title')}</h3>
                                        {/* t('ddwCard.subtitle') → "Enterprise AI Products Division" (en) or "Divisione Prodotti AI Enterprise" (it) */}
                                        <p className="text-sm text-zinc-500 mb-2">{t('ddwCard.subtitle')}</p>
                                        {/* t('ddwCard.description') → card description (IT version uses Fleet-OS instead of Dispatch) */}
                                        <p className="text-sm text-zinc-400">
                                            {t('ddwCard.description')}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Agency Card */}
                            <div className="glass-card p-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                                        <span className="text-zinc-400 font-bold text-xl font-display">A</span>
                                    </div>
                                    <div>
                                        {/* t('agencyCard.title') → "Digital Dream Works Agency" — stays English */}
                                        <h3 className="text-lg font-bold text-white mb-1">{t('agencyCard.title')}</h3>
                                        {/* t('agencyCard.subtitle') → "Professional Services Division" (en) or "Divisione Servizi Professionali" (it) */}
                                        <p className="text-sm text-zinc-500 mb-2">{t('agencyCard.subtitle')}</p>
                                        {/* t('agencyCard.description') → retainer services description */}
                                        <p className="text-sm text-zinc-400">
                                            {t('agencyCard.description')}
                                        </p>
                                        {/* t('agencyCard.url') → domain stays the same */}
                                        <a
                                            href="https://DigitalDreamWorksAgency.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-indigo-400 mt-2 block hover:underline hover:text-indigo-300 transition-colors"
                                        >
                                            {t('agencyCard.url')}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div
                        className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                            }`}
                    >
                        <div className="relative">
                            {/* Corporate Building Image */}
                            <div className="relative h-[400px] rounded-3xl overflow-hidden mb-8">
                                <Image
                                    src="https://mgx-backend-cdn.metadl.com/generate/images/945228/2026-02-05/7392b71d-c110-4c97-a82e-274451129e5b.png"
                                    alt="DDW Corporate"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="flex items-center gap-2 text-emerald-400 mb-2">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        {/* t('location') → "Florida, USA" (en) or "Florida, USA — Roma, Italia" (it) */}
                                        {/* ⚠️ Italian version adds Roma for local SEO */}
                                        <span className="text-sm font-medium">{t('location')}</span>
                                    </div>
                                    {/* t('companyName') → "Digital Dream Works LLC" — stays English */}
                                    <h3 className="text-2xl font-bold text-white font-display">{t('companyName')}</h3>
                                </div>
                            </div>

                            {/* Info Card — stats grid */}
                            <div className="glass-card p-8">
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <div className="text-3xl font-bold text-gradient-vibrant font-display mb-1">4</div>
                                        {/* t('stats.saasProducts') → "SaaS Products" (en) or "Prodotti SaaS" (it) */}
                                        <div className="text-sm text-zinc-500">{t('stats.saasProducts')}</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-gradient-vibrant font-display mb-1">24/7</div>
                                        {/* t('stats.aiOps') → "AI Operations" (en) or "Operazioni AI 24/7" (it) */}
                                        <div className="text-sm text-zinc-500">{t('stats.aiOps')}</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-gradient-vibrant font-display mb-1">Secure</div>
                                        {/* t('stats.certified') → "Certified" (en) or "Certificato" (it) */}
                                        <div className="text-sm text-zinc-500">{t('stats.certified')}</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold text-gradient-vibrant font-display mb-1">99.9%</div>
                                        {/* t('stats.uptimeSla') → "Uptime SLA" — same in both languages */}
                                        <div className="text-sm text-zinc-500">{t('stats.uptimeSla')}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements — visual only */}
                            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/30 to-purple-500/10 border border-white/10 animate-float"></div>
                            <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/30 to-purple-500/10 border border-white/10 animate-float" style={{ animationDelay: '-2s' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}