'use client';

import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
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
    Search,
    Cloud,
    Network,
    LayoutDashboard,
    HeadphonesIcon,
    Code2,
    Briefcase
} from 'lucide-react';

// --- Animation Variants ---
const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
};

const fadeUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', bounce: 0.2, duration: 0.8 }
    }
};

const slideInLeft = {
    hidden: { x: -80, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: 'spring', bounce: 0.2, duration: 1 }
    }
};

const slideInRight = {
    hidden: { x: 80, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: 'spring', bounce: 0.2, duration: 1 }
    }
};

function StatItem({ valueStr, label, delay }: { valueStr: string; label: string; delay: number }) {
    const [isVisible, setIsVisible] = useState(false);
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    const match = valueStr.match(/(\d+[\.]?\d*)(%|s|M\+)?/);
    const numericPart = match ? match[1] : null;
    const suffix = match ? match[2] || '' : '';
    const numericValue = numericPart ? parseFloat(numericPart) : 0;
    const isCounting = numericPart !== null && !valueStr.includes('/');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [delay]);

    useEffect(() => {
        if (!isVisible || !isCounting) return;
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
    }, [isVisible, numericValue, isCounting]);

    return (
        <div ref={ref} className={`stat-card transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="text-4xl lg:text-5xl font-black text-emerald-400 font-display mb-3 tracking-tighter">
                {isCounting ? (
                    <>{Number.isInteger(numericValue) ? Math.floor(count) : count.toFixed(1)}{suffix}</>
                ) : valueStr}
            </div>
            <div className="text-xs lg:text-sm text-zinc-400 font-bold uppercase tracking-[0.2em] leading-snug">
                {label}
            </div>
        </div>
    );
}

export default function FleetOSContent() {
    const t = useTranslations('FleetOS');
    const { openContactModal } = useModal();

    return (
        <>
            <Navigation />

            <main className="min-h-screen bg-black text-white pt-24 selection:bg-emerald-500/30">
                {/* ── Section 1: Hero ── */}
                <section className="relative py-24 lg:py-36 overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-2xl">
                                <motion.div variants={fadeUp} className="badge mb-8 inline-flex items-center gap-2 border-emerald-500/20 text-emerald-400">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    {t('hero.badge')}
                                </motion.div>

                                <motion.h1 variants={slideInLeft} className="text-5xl md:text-7xl lg:text-8xl font-black font-display mb-6 tracking-tighter text-gradient leading-[1.1] from-emerald-400 to-teal-500 bg-gradient-to-r bg-clip-text text-transparent">
                                    {t('hero.title')}
                                </motion.h1>

                                <motion.h2 variants={slideInLeft} className="text-2xl lg:text-3xl text-emerald-400 font-semibold mb-6 tracking-tight">
                                    {t('hero.tagline')}
                                </motion.h2>

                                <motion.p variants={fadeUp} className="text-lg lg:text-xl text-zinc-400 leading-relaxed mb-10 text-balance">
                                    {t('hero.description')}
                                </motion.p>

                                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-12">
                                    <button onClick={openContactModal} className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-all flex items-center justify-center group shadow-xl shadow-white/5">
                                        <span>{t('hero.demo')}</span>
                                        <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button className="px-8 py-4 bg-zinc-900 text-white font-bold rounded-2xl border border-white/10 hover:bg-zinc-800 transition-all">
                                        {t('hero.learnMore')}
                                    </button>
                                </motion.div>

                                <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                                    <Zap className="w-5 h-5 text-emerald-400 animate-pulse" />
                                    <span className="text-sm font-semibold text-emerald-200 uppercase tracking-widest">
                                        {t('hero.stat')}
                                    </span>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.7, rotateY: 15 }}
                                animate={{ opacity: 1, scale: 1.15, rotateY: 0 }}
                                transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
                                className="relative perspective-container hidden lg:block z-20"
                            >
                                <div className="relative z-10 glass-card p-2 aspect-[4/3] overflow-hidden border-emerald-500/20 shadow-2xl shadow-emerald-500/5 hover:scale-[1.02] transition-transform duration-700">
                                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                        <Image src="/images/hero-fleet-os.png" alt="Fleet-OS" fill className="object-cover scale-105 hover:scale-100 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ── Section 2: Automates ── */}
                <section className="py-24 bg-zinc-950/50 relative border-y border-white/5">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={slideInRight}
                            className="text-center mb-20"
                        >
                            <span className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 block">Engineered for Logistics</span>
                            <h2 className="text-4xl lg:text-5xl font-bold font-display mb-6 tracking-tight text-white">{t('automates.h2')}</h2>
                            <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
                        </motion.div>

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
                <section className="py-32 relative overflow-hidden bg-zinc-950">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideInLeft}
                            className="text-center mb-20"
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold font-display tracking-tight text-white">{t('results.h2')}</h2>
                        </motion.div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {[1, 2, 3, 4].map((i) => {
                                const fullString = t(`results.p${i}`);
                                const firstSpaceIdx = fullString.indexOf(' ');
                                const valueStr = fullString.substring(0, firstSpaceIdx);
                                const labelStr = fullString.substring(firstSpaceIdx + 1);
                                return (
                                    <StatItem key={i} valueStr={valueStr} label={labelStr} delay={i * 100} />
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ── Section 4: Use Cases ── */}
                <section className="py-32 relative overflow-hidden bg-zinc-950/50">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                                <motion.h2 variants={slideInRight} className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-12 tracking-tight">
                                    {t('useCases.h2')}
                                </motion.h2>
                                <ul className="space-y-8">
                                    {['trucking', 'lastMile', 'field', 'medical', 'distCenter'].map((key) => (
                                        <motion.li variants={fadeUp} key={key} className="flex items-start gap-6 group cursor-pointer">
                                            <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-400 group-hover:text-white transition-colors" />
                                            </div>
                                            <div>
                                                <p className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-relaxed">
                                                    {t(`useCases.${key}`)}
                                                </p>
                                            </div>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50, rotateY: 10 }}
                                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, type: "spring", bounce: 0.2 }}
                                className="relative perspective-container group"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-600/20 to-teal-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                                <div className="relative glass-card p-3 rounded-[2.5rem] bg-zinc-900/50 backdrop-blur-3xl border border-white/10 shadow-2xl overflow-hidden transform-gpu transition-transform duration-700 group-hover:scale-[1.02] group-hover:rotate-1 hidden lg:block">
                                    <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[650px] rounded-[1.8rem] overflow-hidden">
                                        <Image src="/images/built-for-fleet-os09.jpg" alt="Fleet Efficiency" fill className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                                        <div className="absolute top-8 left-8 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
                                            <Truck className="w-8 h-8 text-emerald-400 animate-pulse" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ── Section 5: Integrations Marquee ── */}
                <section className="py-44 relative border-y border-white/5 bg-black overflow-hidden flex flex-col items-center justify-center">
                    <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[300px] bg-emerald-600/10 blur-[120px] rounded-[100%] pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full mb-20 text-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft}>
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-[0.3em] mb-6">
                                <Globe className="w-3.5 h-3.5" />
                                Ecosystem
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-white mb-4">
                                Strategic <span className="text-gradient from-emerald-400 to-teal-500">Integrations</span>
                            </h2>
                            <p className="text-zinc-500 text-lg max-w-2xl mx-auto font-medium">
                                Fleet-OS connects instantly with your logistics stack, from Google Maps to Samsara, ensuring data fluidity across your entire operation.
                            </p>
                        </motion.div>
                    </div>

                    <div className="w-full relative flex overflow-hidden py-4" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
                        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, ease: "linear", duration: 45 }} className="flex whitespace-nowrap gap-10 pr-10 w-max items-center">
                            {[
                                { name: 'Google Maps', icon: Map, glow: 'bg-emerald-500/20', hoverBorder: 'group-hover/badge:border-emerald-500/50', hoverBg: 'group-hover/badge:bg-emerald-500/10' },
                                { name: 'Samsara', icon: Activity, glow: 'bg-teal-500/20', hoverBorder: 'group-hover/badge:border-teal-500/50', hoverBg: 'group-hover/badge:bg-teal-500/10' },
                                { name: 'Geotab', icon: NavIcon, glow: 'bg-blue-500/20', hoverBorder: 'group-hover/badge:border-blue-500/50', hoverBg: 'group-hover/badge:bg-blue-500/10' },
                                { name: 'QuickBooks', icon: Briefcase, glow: 'bg-amber-500/20', hoverBorder: 'group-hover/badge:border-amber-500/50', hoverBg: 'group-hover/badge:bg-amber-500/10' },
                                { name: 'Custom ERP', icon: LayoutDashboard, glow: 'bg-emerald-500/20', hoverBorder: 'group-hover/badge:border-emerald-500/50', hoverBg: 'group-hover/badge:bg-emerald-500/10' },
                                { name: 'Custom APIs', icon: Code2, glow: 'bg-teal-500/20', hoverBorder: 'group-hover/badge:border-teal-500/50', hoverBg: 'group-hover/badge:bg-teal-500/10' },
                                // Repeat for loop
                                { name: 'Google Maps', icon: Map, glow: 'bg-emerald-500/20', hoverBorder: 'group-hover/badge:border-emerald-500/50', hoverBg: 'group-hover/badge:bg-emerald-500/10' },
                                { name: 'Samsara', icon: Activity, glow: 'bg-teal-500/20', hoverBorder: 'group-hover/badge:border-teal-500/50', hoverBg: 'group-hover/badge:bg-teal-500/10' },
                                { name: 'Geotab', icon: NavIcon, glow: 'bg-blue-500/20', hoverBorder: 'group-hover/badge:border-blue-500/50', hoverBg: 'group-hover/badge:bg-blue-500/10' },
                                { name: 'QuickBooks', icon: Briefcase, glow: 'bg-amber-500/20', hoverBorder: 'group-hover/badge:border-amber-500/50', hoverBg: 'group-hover/badge:bg-amber-500/10' },
                                { name: 'Custom ERP', icon: LayoutDashboard, glow: 'bg-emerald-500/20', hoverBorder: 'group-hover/badge:border-emerald-500/50', hoverBg: 'group-hover/badge:bg-emerald-500/10' },
                                { name: 'Custom APIs', icon: Code2, glow: 'bg-teal-500/20', hoverBorder: 'group-hover/badge:border-teal-500/50', hoverBg: 'group-hover/badge:bg-teal-500/10' },
                            ].map((item, index) => (
                                <motion.div key={index} whileHover={{ y: -12, scale: 1.15, transition: { type: "spring", stiffness: 400, damping: 12 } }} className={`flex items-center gap-6 px-12 py-8 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition-all duration-500 cursor-pointer group/badge relative overflow-hidden ${item.hoverBg} ${item.hoverBorder}`}>
                                    <div className={`absolute inset-0 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500 ${item.glow} blur-3xl -z-10`} />
                                    <div className="relative">
                                        <div className={`absolute inset-0 blur-xl rounded-full opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500 ${item.glow}`} />
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/badge:bg-white/10 group-hover/badge:border-white/20 transition-all relative z-10 overflow-hidden shadow-inner">
                                            <item.icon className="w-8 h-8 text-zinc-400 group-hover/badge:text-white transition-colors duration-300" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col relative z-10">
                                        <span className="text-2xl font-black text-zinc-300 tracking-tighter group-hover/badge:text-white transition-colors duration-300">{item.name}</span>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                            <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 group-hover/badge:text-zinc-200 transition-colors font-black">Verified System</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ── Section 6: CTA ── */}
                <section className="py-32">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative glass-card p-12 lg:p-24 text-center overflow-hidden group min-h-[500px] flex flex-col justify-center border border-emerald-500/20"
                        >
                            <Image src="/images/ready-to-transform-your-operation-05.jpg" alt="Transform" fill className="object-cover opacity-20 group-hover:scale-105 group-hover:opacity-30 transition-all duration-1000 hidden sm:block" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                            <div className="relative z-10 max-w-3xl mx-auto">
                                <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight} className="text-5xl lg:text-7xl font-black font-display mb-8 tracking-tighter text-white">
                                    {t('cta.h2')}
                                </motion.h2>
                                <p className="text-xl lg:text-2xl text-zinc-300 mb-12 font-medium text-balance">{t('cta.p')}</p>
                                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                    <button onClick={openContactModal} className="btn-primary flex items-center justify-center">
                                        <span>{t('cta.demo')}</span>
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <button onClick={openContactModal} className="btn-secondary bg-black/50 backdrop-blur-md">
                                        {t('cta.sales')}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

