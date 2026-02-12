// app/[locale]/products/hr-os/HROSContent.tsx
// ─────────────────────────────────────────────────────────────────────
// Client component for HR-OS Product Page
// ─────────────────────────────────────────────────────────────────────

'use client';

import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useModal } from '@/components/ContactForm/ModalContext';
import {
    Users,
    UserPlus,
    HelpCircle,
    Clock,
    FileText,
    ShieldCheck,
    CheckCircle2,
    ChevronRight,
    ArrowRight,
    Zap,
    FileJson
} from 'lucide-react';

export default function HROSContent() {
    const t = useTranslations('HROS');
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
                    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
                    <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="badge mb-6 inline-flex items-center gap-2 border-blue-500/20 text-blue-400">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                    {t('hero.badge')}
                                </div>
                                <h1 className="text-6xl lg:text-8xl font-bold font-display mb-4 tracking-tight">
                                    {t('hero.title')}
                                </h1>
                                <h2 className="text-2xl lg:text-3xl text-blue-400 font-semibold mb-8">
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

                                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                                    <Zap className="w-5 h-5 text-blue-400" />
                                    <span className="text-sm font-semibold text-blue-200 uppercase tracking-wider">
                                        {t('hero.stat')}
                                    </span>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="relative"
                            >
                                <div className="relative z-10 glass-card p-8 aspect-video flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent"></div>

                                    {/* Abstract Dashboard Visual */}
                                    <div className="w-full space-y-4 relative z-10">
                                        <div className="h-4 w-1/2 bg-blue-500/20 rounded-full animate-pulse"></div>
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="h-20 bg-white/5 rounded-2xl border border-white/10"></div>
                                            <div className="h-20 bg-blue-500/10 rounded-2xl border border-blue-500/20"></div>
                                            <div className="h-20 bg-white/5 rounded-2xl border border-white/10"></div>
                                        </div>
                                        <div className="h-32 bg-white/[0.02] rounded-2xl border border-white/5 p-4">
                                            <div className="space-y-3">
                                                <div className="h-2 w-full bg-white/10 rounded-full"></div>
                                                <div className="h-2 w-4/5 bg-white/10 rounded-full"></div>
                                                <div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Avatar Circles */}
                                    <div className="absolute top-10 right-10 flex -space-x-3">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center">
                                                <Users className="w-5 h-5 text-blue-400" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ── Section 2: Automates ── */}
                <section className="py-24 bg-zinc-950/50 relative border-y border-white/5">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6">{t('automates.h2')}</h2>
                            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {[
                                { key: 'support', icon: HelpCircle, color: 'text-blue-400' },
                                { key: 'onboarding', icon: UserPlus, color: 'text-indigo-400' },
                                { key: 'policy', icon: FileText, color: 'text-emerald-400' },
                                { key: 'leave', icon: Clock, color: 'text-amber-400' },
                                { key: 'document', icon: FileJson, color: 'text-rose-400' },
                                { key: 'compliance', icon: ShieldCheck, color: 'text-blue-500' },
                            ].map((item) => (
                                <motion.div
                                    key={item.key}
                                    variants={itemVariants}
                                    className="glass-card p-8 group hover:border-blue-500/30 transition-all duration-300"
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
                                    <div className="text-3xl lg:text-4xl font-bold text-blue-400 font-display mb-2">{t(`results.p${i}`).split(' ')[0]}</div>
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
                                    {['midsize', 'enterprise', 'multiLocation', 'healthcare', 'logistics'].map((key) => (
                                        <li key={key} className="flex items-start gap-4 group">
                                            <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                                                <CheckCircle2 className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" />
                                            </div>
                                            <p className="text-lg text-zinc-300 group-hover:text-white transition-colors">
                                                {t(`useCases.${key}`)}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 flex flex-col justify-between">
                                    <Users className="w-10 h-10 text-blue-400 mb-8" />
                                    <div>
                                        <div className="text-3xl font-bold mb-2">500+</div>
                                        <div className="text-xs text-zinc-500 uppercase tracking-widest">Employees Managed</div>
                                    </div>
                                </div>
                                <div className="p-8 rounded-3xl bg-blue-600 flex flex-col justify-between text-white">
                                    <ShieldCheck className="w-10 h-10 mb-8" />
                                    <div>
                                        <div className="text-2xl font-bold mb-2">HIPAA</div>
                                        <div className="text-xs text-blue-200 uppercase tracking-widest">Compliant</div>
                                    </div>
                                </div>
                                <div className="col-span-2 p-8 rounded-3xl bg-zinc-800 border border-white/10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                            <Clock className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <div className="font-bold">24/7 Support</div>
                                            <div className="text-sm text-zinc-500">Always accessible</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Section 5: Integrations ── */}
                <section className="py-24 relative">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold font-display mb-10 text-zinc-300 uppercase tracking-widest">{t('integrations.h2')}</h2>
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xl lg:text-3xl font-bold text-white/30 tracking-tighter">
                            {t('integrations.list').split(' | ').map((item, i) => (
                                <span key={i} className="hover:text-blue-400 transition-colors cursor-default">{item}</span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Section 6: CTA ── */}
                <section className="py-32">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="relative glass-card p-12 lg:p-24 text-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-indigo-600/10"></div>

                            <h2 className="text-5xl lg:text-7xl font-bold font-display mb-8 relative z-10">{t('cta.h2')}</h2>
                            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto relative z-10">{t('cta.p')}</p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
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
                </section>
            </main>

            <Footer />
        </>
    );
}
