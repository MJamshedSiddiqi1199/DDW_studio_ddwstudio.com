// app/[locale]/products/fleet-os/FleetOSContent.tsx
// ─────────────────────────────────────────────────────────────────────
// Client component for Fleet-OS Product Page
// ─────────────────────────────────────────────────────────────────────

'use client';

import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
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
                                <div className="relative z-10 glass-card p-6 aspect-video flex flex-col gap-4 overflow-hidden border-emerald-500/20 shadow-2xl shadow-emerald-500/5">
                                    {/* Top Bar */}
                                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                            <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                                            <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                                        </div>
                                        <div className="flex gap-4">
                                            <Search className="w-4 h-4 text-zinc-500" />
                                            <Bell className="w-4 h-4 text-zinc-500" />
                                        </div>
                                    </div>

                                    {/* Main Content Area */}
                                    <div className="flex-1 grid grid-cols-12 gap-4">
                                        {/* Sidebar List */}
                                        <div className="col-span-4 space-y-2">
                                            {[1, 2, 3, 4].map((i) => (
                                                <div key={i} className={`p-2 rounded-lg border border-white/5 ${i === 1 ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-white/5'}`}>
                                                    <div className="flex items-center gap-2">
                                                        <Truck className={`w-3 h-3 ${i === 1 ? 'text-emerald-400' : 'text-zinc-500'}`} />
                                                        <span className="text-[10px] font-bold text-zinc-300">TRUCK #0{i}82</span>
                                                    </div>
                                                    <div className="h-1 w-full bg-white/5 rounded-full mt-2 overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: i === 1 ? '85%' : '40%' }}
                                                            className={`h-full ${i === 1 ? 'bg-emerald-500' : 'bg-zinc-600'}`}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Map Area */}
                                        <div className="col-span-8 bg-zinc-900/50 rounded-xl relative overflow-hidden border border-white/5">
                                            <div className="absolute inset-0 opacity-20">
                                                {/* SVG Map Lines */}
                                                <svg className="w-full h-full" viewBox="0 0 100 100">
                                                    <path d="M10 20 L40 20 L40 50 L80 50 L80 80" fill="none" stroke="white" strokeWidth="0.5" />
                                                    <path d="M20 10 L20 40 L60 40 L60 80" fill="none" stroke="white" strokeWidth="0.5" />
                                                    <path d="M0 60 L30 60 L30 90 L70 90" fill="none" stroke="white" strokeWidth="0.5" />
                                                </svg>
                                            </div>

                                            {/* Moving Truck Dots */}
                                            <motion.div
                                                animate={{ x: [0, 40, 40, 60], y: [0, 0, 30, 30] }}
                                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                                className="absolute top-[20%] left-[10%] w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                                            />

                                            <div className="absolute bottom-4 right-4 p-2 bg-black/80 rounded-lg border border-white/10 text-[10px] font-mono text-emerald-400">
                                                COORD: 41.8902° N, 12.4922° E
                                            </div>

                                            {/* AI Voice Pulse Overlay */}
                                            <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-emerald-500/30 rounded-full">
                                                <Mic className="w-3 h-3 text-emerald-400" />
                                                <div className="flex gap-0.5 items-end h-2">
                                                    {[1, 2, 3, 2, 1].map((h, i) => (
                                                        <motion.div
                                                            key={i}
                                                            animate={{ height: ['40%', '100%', '40%'] }}
                                                            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                                                            className="w-0.5 bg-emerald-400 rounded-full"
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
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
                                    <div className="p-8 rounded-3xl bg-zinc-800/50 border border-white/10 flex flex-col justify-between aspect-square">
                                        <BarChart3 className="w-12 h-12 text-amber-400" />
                                        <div className="h-10 flex items-end gap-1">
                                            {[4, 7, 5, 9, 6, 8].map((h, i) => (
                                                <div key={i} className="flex-1 bg-white/10 rounded-t-sm" style={{ height: `${h * 10}%` }}></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Section 5: Integrations ── */}
                <section className="py-24 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center pt-10 border-t border-white/5">
                        <h2 className="text-2xl font-bold font-display mb-12 text-zinc-500 uppercase tracking-[0.3em]">{t('integrations.h2')}</h2>
                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 text-2xl lg:text-4xl font-bold text-white/20 tracking-tighter">
                            {t('integrations.list').split(' | ').map((item, i) => (
                                <motion.span
                                    key={i}
                                    whileHover={{ scale: 1.1, color: 'rgba(16,185,129,0.8)' }}
                                    className="cursor-default transition-all duration-300"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Section 6: CTA ── */}
                <section className="py-32 relative">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                        <div className="relative glass-card bg-zinc-900 p-16 lg:p-32 text-center overflow-hidden border-emerald-500/20">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-transparent to-teal-600/10"></div>

                            {/* Visual Accent */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/5 blur-[100px] pointer-events-none"></div>

                            <h2 className="text-5xl lg:text-8xl font-bold font-display mb-8 relative z-10 tracking-tight">{t('cta.h2')}</h2>
                            <p className="text-xl lg:text-2xl text-zinc-400 mb-14 max-w-3xl mx-auto relative z-10 leading-relaxed">{t('cta.p')}</p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
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
                </section>
            </main>

            <Footer />
        </>
    );
}
