// app/[locale]/products/lyra/LyraContent.tsx
// ─────────────────────────────────────────────────────────────────────
// Client component for Lyra Product Page
// ─────────────────────────────────────────────────────────────────────

'use client';

import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useModal } from '@/components/ContactForm/ModalContext';
import {
    Mic,
    Zap,
    CheckCircle2,
    BarChart3,
    Globe2,
    PhoneCall,
    Database,
    GitMerge,
    Calendar,
    ChevronRight,
    ArrowRight,
    Users,
    Headphones,
    Stethoscope,
    Building2,
    Briefcase
} from 'lucide-react';
import IntegrationsSection from '@/components/IntegrationsSection';

export default function LyraContent() {
    const t = useTranslations('Lyra');
    const { openContactModal } = useModal();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <>
            <Navigation />

            <main className="min-h-screen bg-black text-white pt-24">
                {/* ── Section 1: Hero ── */}
                <section className="relative py-20 lg:py-32 overflow-hidden">
                    {/* Animated Background Orbs */}
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="badge mb-6 inline-flex items-center gap-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                                    </span>
                                    {t('hero.badge')}
                                </div>
                                <h1 className="text-6xl lg:text-8xl font-bold font-display mb-4 tracking-tight">
                                    {t('hero.title')}
                                </h1>
                                <h2 className="text-2xl lg:text-3xl text-violet-400 font-semibold mb-8">
                                    {t('hero.tagline')}
                                </h2>
                                <p className="text-lg lg:text-xl text-zinc-400 leading-relaxed mb-10 max-w-xl">
                                    {t('hero.description')}
                                </p>

                                <div className="flex flex-wrap gap-4 mb-12">
                                    <button
                                        onClick={openContactModal}
                                        className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-all flex items-center group shadow-xl shadow-white/5"
                                    >
                                        {t('hero.demo')}
                                        <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button className="px-8 py-4 bg-zinc-900 text-white font-bold rounded-2xl border border-white/10 hover:bg-zinc-800 transition-all">
                                        {t('hero.learnMore')}
                                    </button>
                                </div>

                                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-violet-500/10 border border-violet-500/20">
                                    <Zap className="w-5 h-5 text-violet-400" />
                                    <span className="text-sm font-semibold text-violet-200 uppercase tracking-wider">
                                        {t('hero.stat')}
                                    </span>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="relative"
                            >
                                <div className="relative z-10 glass-card p-2 aspect-square flex items-center justify-center overflow-hidden">
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                        <Image
                                            src="/images/meet-lyra-11.jpg"
                                            alt="Meet Lyra"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-violet-500 to-purple-500 rounded-3xl opacity-20 blur-2xl"></div>
                                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ── Section 2: Automates ── */}
                <section className="py-24 bg-zinc-950/50 relative border-y border-white/5">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6">{t('automates.h2')}</h2>
                            <div className="w-20 h-1 bg-violet-500 mx-auto rounded-full"></div>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {[
                                { key: 'inbound', icon: PhoneCall, color: 'text-blue-400' },
                                { key: 'outbound', icon: Zap, color: 'text-violet-400' },
                                { key: 'crm', icon: Database, color: 'text-emerald-400' },
                                { key: 'routing', icon: GitMerge, color: 'text-amber-400' },
                                { key: 'scheduling', icon: Calendar, color: 'text-rose-400' },
                                { key: 'multiLang', icon: Globe2, color: 'text-indigo-400' },
                            ].map((item) => (
                                <motion.div
                                    key={item.key}
                                    variants={itemVariants}
                                    className="glass-card p-8 group hover:border-violet-500/30 transition-all duration-300"
                                >
                                    <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <item.icon className={`w-6 h-6 ${item.color}`} />
                                    </div>
                                    <p className="text-zinc-300 text-lg font-medium leading-relaxed">
                                        {t(`automates.items.${item.key}`)}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ── Section 3: Results ── */}
                <section className="py-24 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold font-display">{t('results.h2')}</h2>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="text-center p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                                    <div className="text-3xl lg:text-4xl font-bold text-violet-400 font-display mb-2">{t(`results.p${i}`).split(' ')[0]}</div>
                                    <div className="text-sm text-zinc-500 font-medium uppercase tracking-widest leading-snug">
                                        {t(`results.p${i}`).split(' ').slice(1).join(' ')}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Section 4: Use Cases ── */}
                <section className="py-24 bg-zinc-950/50">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-bold font-display mb-12">{t('useCases.h2')}</h2>
                                <ul className="space-y-6">
                                    {[
                                        { key: 'sales', icon: Users },
                                        { key: 'support', icon: Headphones },
                                        { key: 'healthcare', icon: Stethoscope },
                                        { key: 'realestate', icon: Building2 },
                                        { key: 'financial', icon: Briefcase }
                                    ].map((item) => (
                                        <li key={item.key} className="flex items-start gap-4 group">
                                            <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                                                <item.icon className="w-4 h-4 text-violet-400" />
                                            </div>
                                            <p className="text-lg text-zinc-300 group-hover:text-white transition-colors">
                                                {t(`useCases.${item.key}`)}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="aspect-square rounded-3xl bg-zinc-900 border border-white/5 overflow-hidden relative group">
                                        <div className="absolute inset-0 bg-violet-600/5 group-hover:bg-violet-600/10 transition-colors"></div>
                                        <div className="p-8 h-full flex flex-col justify-between relative z-10">
                                            <Users className="w-10 h-10 text-violet-400 group-hover:scale-110 transition-transform" />
                                            <span className="text-sm font-bold text-white uppercase tracking-widest">Sales</span>
                                        </div>
                                    </div>
                                    <div className="aspect-[4/5] rounded-3xl bg-violet-600 flex flex-col items-center justify-center p-8 text-center group">
                                        <Mic className="w-12 h-12 text-white mb-4 group-hover:animate-pulse" />
                                        <div className="text-2xl text-white font-bold font-display italic tracking-tighter">LYRA</div>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="aspect-video rounded-3xl bg-zinc-900 border border-white/5 flex flex-col items-center justify-center p-6 group">
                                        <GitMerge className="w-8 h-8 text-zinc-600 mb-2 group-hover:text-violet-500 transition-colors" />
                                        <div className="text-xs italic text-zinc-500 font-display uppercase tracking-[0.2em]">ROUTING</div>
                                    </div>
                                    <div className="aspect-square rounded-3xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-violet-500/20 p-8 flex flex-col justify-between group">
                                        <div className="flex gap-1 items-end h-12">
                                            {[40, 70, 50, 90, 60].map((h, i) => (
                                                <div key={i} className="flex-1 bg-violet-500/40 rounded-t-sm" style={{ height: `${h}%` }}></div>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-bold text-white uppercase tracking-widest">Growth</span>
                                            <BarChart3 className="w-6 h-6 text-violet-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Section 5: Integrations ── */}
                <IntegrationsSection
                    title="Integrates With Your Stack"
                    items={['Salesforce', 'HubSpot', 'Microsoft Dynamics', 'Zoho CRM', 'Custom APIs']}
                    accentColor="violet"
                />

                {/* ── Section 6: CTA ── */}
                <section className="py-32">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="relative glass-card p-12 lg:p-24 text-center overflow-hidden group min-h-[400px] flex flex-col justify-center">
                            <Image
                                src="/images/ready-to-transform-your-operation-05.jpg"
                                alt="Transform"
                                fill
                                className="object-cover opacity-10 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-indigo-600/10"></div>

                            <div className="relative z-10">
                                <h2 className="text-5xl lg:text-7xl font-bold font-display mb-8">{t('cta.h2')}</h2>
                                <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">{t('cta.p')}</p>

                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <button
                                        onClick={openContactModal}
                                        className="px-12 py-5 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-all shadow-2xl shadow-white/10 flex items-center justify-center group"
                                    >
                                        {t('cta.demo')}
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button
                                        onClick={openContactModal}
                                        className="px-12 py-5 bg-transparent border border-white/20 text-white font-bold rounded-2xl hover:bg-white/5 transition-all"
                                    >
                                        {t('cta.sales')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
