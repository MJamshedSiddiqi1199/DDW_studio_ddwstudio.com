// app/[locale]/products/fleet-os/FleetOSContent.tsx
// ─────────────────────────────────────────────────────────────────────
// Client component for Fleet-OS Product Page
// ─────────────────────────────────────────────────────────────────────

'use client';

import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useModal } from '@/components/ContactForm/ModalContext';
import {
    Truck,
    Navigation as NavIcon,
    Map,
    Clock,
    Fuel,
    Activity,
    CheckCircle2,
    ChevronRight,
    ArrowRight,
    Zap,
    Mic,
    BarChart3,
    Globe,
    Bell,
    Search
} from 'lucide-react';
import IntegrationsSection from '@/components/IntegrationsSection';

export default function FleetOSContent() {
    const t = useTranslations('FleetOS');
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
                    {/* Grid Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                    {/* Animated Glows */}
                    <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
                    <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '3s' }}></div>

                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="badge mb-6 inline-flex items-center gap-2 border-emerald-500/20 text-emerald-400">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    {t('hero.badge')}
                                </div>
                                <h1 className="text-6xl lg:text-8xl font-bold font-display mb-4 tracking-tight">
                                    {t('hero.title')}
                                </h1>
                                <h2 className="text-2xl lg:text-3xl text-emerald-400 font-semibold mb-8">
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

                                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                                    <Zap className="w-5 h-5 text-emerald-400" />
                                    <span className="text-sm font-semibold text-emerald-200 uppercase tracking-wider">
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
                                {/* Simulated Fleet Dashboard UI */}
                                <div className="relative z-10 glass-card p-2 aspect-video overflow-hidden border-emerald-500/20 shadow-2xl shadow-emerald-500/5">
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                        <Image
                                            src="/images/fleet-os-08.jpg"
                                            alt="Fleet-OS Dashboard"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    </div>
                                </div>

                                {/* Decorative Bottom Graphic */}
                                <div className="absolute -bottom-10 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px]"></div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ── Section 2: Automates ── */}
                <section className="py-24 bg-zinc-950/50 relative border-y border-white/5">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-20">
                            <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 block">Engineered for Logistics</span>
                            <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6">{t('automates.h2')}</h2>
                            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
                        </div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {[
                                { key: 'voice', icon: Mic, color: 'text-emerald-400' },
                                { key: 'route', icon: NavIcon, color: 'text-teal-400' },
                                { key: 'coordination', icon: Activity, color: 'text-blue-400' },
                                { key: 'tracking', icon: Map, color: 'text-indigo-400' },
                                { key: 'scheduling', icon: Clock, color: 'text-amber-400' },
                                { key: 'delivery', icon: CheckCircle2, color: 'text-emerald-500' },
                            ].map((item) => (
                                <motion.div
                                    key={item.key}
                                    variants={itemVariants}
                                    className="glass-card p-10 group hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] rounded-bl-full transition-all group-hover:bg-emerald-500/5"></div>

                                    <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-emerald-500/10 transition-all duration-500`}>
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
                <section className="py-24 relative">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl lg:text-5xl font-bold font-display">{t('results.h2')}</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[1, 2, 3, 4].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center p-8 lg:p-10 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-emerald-500/20 transition-all group flex flex-col justify-center min-h-[180px]"
                                >
                                    <div className="text-4xl lg:text-5xl font-bold text-emerald-400 font-display mb-3 group-hover:scale-110 transition-transform">
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
                <section className="py-24 bg-zinc-950/50 overflow-hidden relative">
                    {/* Decorative Map Lines */}
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0 0 L100 100 M20 0 L100 80 M40 0 L100 60 M60 0 L100 40 M80 0 L100 20" stroke="emerald" strokeWidth="0.1" fill="none" />
                        </svg>
                    </div>

                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="text-4xl lg:text-5xl font-bold font-display mb-12">{t('useCases.h2')}</h2>
                                <ul className="space-y-8">
                                    {['trucking', 'lastMile', 'field', 'medical', 'distCenter'].map((key) => (
                                        <li key={key} className="flex items-start gap-6 group">
                                            <div className="mt-1.5 flex-shrink-0 w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500 transition-all duration-300">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-400 group-hover:text-white" />
                                            </div>
                                            <p className="text-xl text-zinc-300 group-hover:text-white transition-colors leading-relaxed">
                                                {t(`useCases.${key}`)}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid grid-cols-2 gap-6 relative">
                                <div className="space-y-6">
                                    <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 flex flex-col justify-between aspect-square group hover:bg-zinc-800 transition-all">
                                        <Truck className="w-12 h-12 text-emerald-400 group-hover:scale-110 transition-transform" />
                                        <div>
                                            <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">Fleet Load</div>
                                            <div className="text-3xl font-bold text-white">98.4%</div>
                                        </div>
                                    </div>
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="p-8 rounded-3xl bg-emerald-600 flex flex-col justify-between aspect-[4/5] text-white shadow-2xl shadow-emerald-600/20"
                                    >
                                        <Fuel className="w-12 h-12 text-emerald-200" />
                                        <div>
                                            <div className="text-sm font-bold text-emerald-200 uppercase tracking-widest mb-1">Efficiency</div>
                                            <div className="text-4xl font-bold">+18%</div>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="space-y-6 pt-12">
                                    <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 flex flex-col justify-between aspect-[4/5] group hover:bg-zinc-800 transition-all">
                                        <Globe className="w-12 h-12 text-blue-400" />
                                        <div>
                                            <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">Coverage</div>
                                            <div className="text-3xl font-bold text-white">Global</div>
                                        </div>
                                    </div>
                                    <div className="p-2 rounded-3xl bg-zinc-800/50 border border-white/10 flex flex-col justify-between aspect-square overflow-hidden relative group">
                                        <Image
                                            src="/images/built-for-fleet-os09.jpg"
                                            alt="Built for Fleet-OS"
                                            fill
                                            className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                        <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                                            <BarChart3 className="w-12 h-12 text-amber-400 mb-4" />
                                            <div className="h-10 flex items-end gap-1">
                                                {[4, 7, 5, 9, 6, 8].map((h, i) => (
                                                    <div key={i} className="flex-1 bg-white/40 rounded-t-sm" style={{ height: `${h * 10}%` }}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Section 5: Integrations ── */}
                <IntegrationsSection
                    title="Integrates With Your Systems"
                    items={['Google Maps', 'Samsara', 'Geotab', 'QuickBooks', 'Custom ERP', 'Custom APIs']}
                    accentColor="emerald"
                />

                {/* ── Section 6: CTA ── */}
                <section className="py-32 relative">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                        <div className="relative glass-card bg-zinc-900/50 p-16 lg:p-32 text-center overflow-hidden border-emerald-500/20 group min-h-[500px] flex flex-col justify-center">
                            <Image
                                src="/images/ready-to-transform-your-operation-05.jpg"
                                alt="Transform"
                                fill
                                className="object-cover opacity-10 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-transparent to-teal-600/20"></div>

                            {/* Visual Accent */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/5 blur-[100px] pointer-events-none"></div>

                            <div className="relative z-10">
                                <h2 className="text-5xl lg:text-7xl font-bold font-display mb-8 tracking-tight">{t('cta.h2')}</h2>
                                <p className="text-xl lg:text-2xl text-zinc-400 mb-14 max-w-3xl mx-auto leading-relaxed">{t('cta.p')}</p>

                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <button
                                        onClick={openContactModal}
                                        className="px-14 py-6 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-all shadow-2xl shadow-white/10 flex items-center justify-center group text-lg"
                                    >
                                        {t('cta.demo')}
                                        <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button
                                        onClick={openContactModal}
                                        className="px-14 py-6 bg-transparent border border-white/20 text-white font-bold rounded-2xl hover:bg-white/5 transition-all text-lg"
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
