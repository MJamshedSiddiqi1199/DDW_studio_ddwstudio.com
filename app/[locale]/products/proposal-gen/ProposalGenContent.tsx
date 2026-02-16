// app/[locale]/products/proposal-gen/ProposalGenContent.tsx
// ─────────────────────────────────────────────────────────────────────
// Client component for AI Proposal Generator Product Page
// ─────────────────────────────────────────────────────────────────────

'use client';

import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useModal } from '@/components/ContactForm/ModalContext';
import {
    FileText,
    Database,
    Mic,
    Palette,
    UserCheck,
    PenTool,
    TrendingUp,
    ChevronRight,
    ArrowRight,
    Zap,
    CheckCircle2,
    BarChart3,
    ShieldCheck,
    Star,
    Users
} from 'lucide-react';
import IntegrationsSection from '@/components/IntegrationsSection';

export default function ProposalGenContent() {
    const t = useTranslations('ProposalGen');
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

            <main className="min-h-screen bg-black text-white pt-24 overflow-x-hidden">
                {/* ── Section 1: Hero ── */}
                <section className="relative py-20 lg:py-32 overflow-hidden">
                    {/* Animated Background Orbs */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse"></div>
                        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="badge mb-6 inline-flex items-center gap-2 border-indigo-500/20 text-indigo-400">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                    </span>
                                    {t('hero.badge')}
                                </div>
                                <h1 className="text-6xl lg:text-7xl font-bold font-display mb-4 tracking-tight bg-gradient-to-r from-white via-white to-amber-200/50 bg-clip-text text-transparent">
                                    {t('hero.title')}
                                </h1>
                                <h2 className="text-2xl lg:text-3xl text-amber-400 font-semibold mb-8">
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

                                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                                    <TrendingUp className="w-5 h-5 text-amber-400" />
                                    <span className="text-sm font-semibold text-amber-200 uppercase tracking-wider">
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
                                {/* Simulated Proposal Interface */}
                                <div className="relative z-10 glass-card p-2 aspect-[4/3] flex items-center justify-center overflow-hidden border-indigo-500/20 shadow-2xl shadow-indigo-500/5 bg-zinc-900/40">
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                        <Image
                                            src="/images/ai-proposal-generator-06.jpg"
                                            alt="AI Proposal Generator"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-10 -right-10 p-5 bg-amber-500/10 border border-amber-500/20 rounded-3xl backdrop-blur-xl z-20"
                                >
                                    <TrendingUp className="w-8 h-8 text-amber-500 mb-2" />
                                    <div className="text-2xl font-bold font-display text-white">+40%</div>
                                    <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Win Rate</div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ── Section 2: Automates ── */}
                <section className="py-24 bg-zinc-950 relative border-y border-white/5">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-20">
                            <span className="text-indigo-500 font-bold uppercase tracking-widest text-sm mb-4 block">Streamlined Sales</span>
                            <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6">{t('automates.h2')}</h2>
                            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-amber-500 mx-auto rounded-full"></div>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {[
                                { key: 'instant', icon: Zap, color: 'text-amber-400' },
                                { key: 'crm', icon: Database, color: 'text-blue-400' },
                                { key: 'voice', icon: Mic, color: 'text-violet-400' },
                                { key: 'templates', icon: Palette, color: 'text-rose-400' },
                                { key: 'personalization', icon: UserCheck, color: 'text-indigo-400' },
                                { key: 'esignature', icon: ShieldCheck, color: 'text-emerald-400' },
                            ].map((item) => (
                                <motion.div
                                    key={item.key}
                                    variants={itemVariants}
                                    className="glass-card p-10 group hover:border-indigo-500/30 transition-all duration-300 h-full flex flex-col"
                                >
                                    <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-indigo-500/10 transition-all duration-500`}>
                                        <item.icon className={`w-7 h-7 ${item.color}`} />
                                    </div>
                                    <p className="text-zinc-300 text-lg font-medium leading-relaxed group-hover:text-white transition-colors">
                                        {t(`automates.items.${item.key}`)}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ── Section 3: Results ── */}
                <section className="py-24 relative overflow-hidden">
                    {/* Subtle Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold font-display tracking-tight text-white mb-4">
                                {t('results.h2')}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[1, 2, 3, 4].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center p-10 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-indigo-500/20 transition-all group flex flex-col justify-center min-h-[180px]"
                                >
                                    <div className="text-4xl lg:text-5xl font-bold text-amber-500 font-display mb-3 group-hover:scale-110 transition-transform">
                                        {t(`results.p${i}`).split(' ')[0]}
                                    </div>
                                    <div className="text-sm text-zinc-500 font-bold uppercase tracking-[0.15em] leading-relaxed group-hover:text-zinc-300 transition-colors">
                                        {t(`results.p${i}`).split(' ').slice(1).join(' ')}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Section 4: Use Cases ── */}
                <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-white/5">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-4xl lg:text-5xl font-bold font-display mb-12">{t('useCases.h2')}</h2>
                                <div className="space-y-6">
                                    {['b2b', 'consulting', 'marketing', 'it', 'realestate'].map((key) => (
                                        <motion.div
                                            key={key}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/5"
                                        >
                                            <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                                                <CheckCircle2 className="w-5 h-5 text-indigo-400 group-hover:text-white" />
                                            </div>
                                            <p className="text-lg text-zinc-400 group-hover:text-white transition-colors">
                                                {t(`useCases.${key}`)}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="glass-card p-10 border-amber-500/20 relative z-10 bg-zinc-900/40">
                                    <BarChart3 className="w-16 h-16 text-amber-500 mb-8" />
                                    <h3 className="text-3xl font-bold font-display mb-6">Sales Performance Lift</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                                                <span>Proposal Speed</span>
                                                <span className="text-amber-500">3x Faster</span>
                                            </div>
                                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: '100%' }}
                                                    viewport={{ once: true }}
                                                    className="h-full bg-amber-500"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                                                <span>Proposal Volume</span>
                                                <span className="text-indigo-400">+60%</span>
                                            </div>
                                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: '85%' }}
                                                    viewport={{ once: true }}
                                                    className="h-full bg-indigo-500"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                                        <Users className="w-10 h-10 text-zinc-400" />
                                        <div>
                                            <div className="text-sm font-bold text-white">Loved by Sales Ops</div>
                                            <div className="text-xs text-zinc-500 leading-relaxed italic">&quot;It&apos;s like having a full-time proposals assistant for every rep.&quot;</div>
                                        </div>
                                    </div>
                                </div>
                                {/* Background Decorative Graphic */}
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-[60px] pointer-events-none"></div>
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-[60px] pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Section 5: Integrations ── */}
                <IntegrationsSection
                    title="Integrates With Your CRM"
                    items={['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho', 'Monday.com', 'Custom APIs']}
                    accentColor="indigo"
                />

                {/* ── Section 6: CTA ── */}
                <section className="py-32 relative">
                    <div className="max-w-4xl mx-auto px-6 relative z-10">
                        <div className="relative glass-card bg-zinc-900/50 p-16 lg:p-24 text-center overflow-hidden border-indigo-500/20 group min-h-[400px] flex flex-col justify-center">
                            <Image
                                src="/images/ready-to-transform-your-operation-05.jpg"
                                alt="Transform"
                                fill
                                className="object-cover opacity-10 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-transparent to-amber-600/5"></div>

                            <div className="relative z-10">
                                <h2 className="text-4xl lg:text-6xl font-bold font-display mb-8 tracking-tight">{t('cta.h2')}</h2>
                                <p className="text-xl text-zinc-400 mb-14 max-w-2xl mx-auto leading-relaxed">{t('cta.p')}</p>

                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <button
                                        onClick={openContactModal}
                                        className="px-12 py-6 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-all shadow-2xl shadow-white/10 flex items-center justify-center group text-lg"
                                    >
                                        {t('cta.demo')}
                                        <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button
                                        onClick={openContactModal}
                                        className="px-12 py-6 bg-transparent border border-white/20 text-white font-bold rounded-2xl hover:bg-white/5 transition-all text-lg"
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
