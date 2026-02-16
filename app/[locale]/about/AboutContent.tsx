// app/[locale]/about/AboutContent.tsx
// ─────────────────────────────────────────────────────────────────────
// Client component that renders the full About page.
// All strings come from useTranslations('About').
// ─────────────────────────────────────────────────────────────────────

'use client';

import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useModal } from '@/components/ContactForm/ModalContext';
import {
    Rocket,
    Target,
    Shield,
    Trophy,
    Cpu,
    ChevronRight,
    Globe,
    Mic,
    Users,
    Truck,
    FileText,
    Zap
} from 'lucide-react';

export default function AboutContent() {
    const t = useTranslations('About');
    const { openContactModal } = useModal();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <>
            <Navigation />

            <main className="min-h-screen bg-black overflow-hidden pt-32 pb-24">
                {/* Visual Background Elements */}
                <div className="noise opacity-20"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full opacity-20 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15), transparent 70%)' }}></div>

                {/* ── Section 1: Hero ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="badge mb-6 mx-auto inline-flex">
                            <span className="relative flex h-2 w-2 mr-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            {t('hero.title')}
                        </div>
                        <h1 className="text-5xl sm:text-7xl font-bold text-white font-display mb-8 tracking-tight">
                            {t('hero.title')}
                        </h1>
                        <p className="text-xl sm:text-2xl text-zinc-400 leading-relaxed max-w-3xl mx-auto">
                            {t('hero.subtitle')}
                        </p>
                    </motion.div>
                </section>

                {/* ── Section 2: Our Story ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-40">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                        >
                            <div className="badge mb-6">{t('story.badge')}</div>
                            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display mb-8">
                                {t('story.h2')}
                            </h2>
                            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
                                <p>{t('story.p1')}</p>
                                <p>{t('story.p2')}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-card p-2"
                        >
                            <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                <Image
                                    src="/images/ai-evoluation-of-ddw-04.jpg"
                                    alt="DDW Studio Corporate"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ── Section 3: Two Divisions ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-40">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-display text-center mb-16">
                        {t('divisions.h2')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Studio Division */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-10 border-indigo-500/20 group hover:border-indigo-500/40 transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Cpu className="w-8 h-8 text-indigo-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 font-display">
                                {t('divisions.studio.title')}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed">
                                {t('divisions.studio.description')}
                            </p>
                        </motion.div>

                        {/* Agency Division */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-10 opacity-70 group hover:opacity-100 transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-zinc-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Users className="w-8 h-8 text-zinc-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 font-display">
                                {t('divisions.agency.title')}
                            </h3>
                            <a href="#" className="text-sm text-indigo-400 font-medium mb-4 block hover:underline">
                                {t('divisions.agency.link')}
                            </a>
                            <p className="text-zinc-500 leading-relaxed">
                                {t('divisions.agency.description')}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* ── Section 4: Product Suite ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-40">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-white font-display mb-6">
                            {t('products.h2')}
                        </h2>
                        <p className="text-zinc-400 text-lg">{t('products.p')}</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { key: 'lyra', icon: Mic, color: 'text-violet-400', bg: 'bg-violet-500/10' },
                            { key: 'hros', icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/10' },
                            { key: 'fleet', icon: Truck, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                            { key: 'proposal', icon: FileText, color: 'text-amber-400', bg: 'bg-amber-500/10' },
                        ].map((prod, i) => (
                            <motion.div
                                key={prod.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className={`w-12 h-12 ${prod.bg} rounded-xl flex items-center justify-center mb-6`}>
                                    <prod.icon className={`w-6 h-6 ${prod.color}`} />
                                </div>
                                <p className="text-white font-medium leading-snug group-hover:text-indigo-400 transition-colors">
                                    {t(`products.${prod.key}`)}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ── Section 5: Values ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 mb-40">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl sm:text-5xl font-bold text-white font-display">
                            {t('values.h2')}
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { key: 'v1', icon: Target },
                            { key: 'v2', icon: Shield },
                            { key: 'v3', icon: Trophy },
                            { key: 'v4', icon: Zap },
                        ].map((val, i) => (
                            <motion.div
                                key={val.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <val.icon className="w-8 h-8 text-indigo-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 font-display">
                                    {t(`values.${val.key}.title`)}
                                </h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    {t(`values.${val.key}.description`)}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ── Section 6: Stats ── */}
                <section className="relative z-10 border-y border-white/5 bg-white/[0.02] py-20 mb-40">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="text-center">
                                    <p className="text-2xl sm:text-3xl font-bold text-white font-display">
                                        {t(`stats.p${i}`)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Section 7: CTA ── */}
                <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="glass-card p-12 sm:p-20 text-center relative overflow-hidden group min-h-[400px] flex flex-col justify-center">
                        <Image
                            src="/images/ready-to-transform-your-operation-05.jpg"
                            alt="Transform"
                            fill
                            className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-700"></div>
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl sm:text-5xl font-bold text-white font-display mb-6">
                                {t('cta.h2')}
                            </h2>
                            <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
                                {t('cta.p')}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <button
                                    onClick={openContactModal}
                                    className="px-10 py-4 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-all duration-300 flex items-center group shadow-xl shadow-white/5"
                                >
                                    <span>{t('cta.demo')}</span>
                                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>

                                <button
                                    onClick={openContactModal}
                                    className="px-10 py-4 bg-transparent border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all duration-300"
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
