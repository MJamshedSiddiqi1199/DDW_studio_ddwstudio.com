'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface IntegrationsSectionProps {
    title: string;
    items: string[];
    accentColor?: string; // e.g., 'text-emerald-400', 'bg-emerald-500'
}

export default function IntegrationsSection({ title, items, accentColor = 'emerald' }: IntegrationsSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Map accent color names to specific Tailwind classes for borders/text/glows
    const getColorClasses = (color: string) => {
        const colors: Record<string, { text: string; border: string; glow: string; bg: string }> = {
            emerald: {
                text: 'text-emerald-400',
                border: 'group-hover:border-emerald-500/50',
                glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]',
                bg: 'group-hover:bg-emerald-500/10'
            },
            blue: {
                text: 'text-blue-400',
                border: 'group-hover:border-blue-500/50',
                glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]',
                bg: 'group-hover:bg-blue-500/10'
            },
            violet: {
                text: 'text-violet-400',
                border: 'group-hover:border-violet-500/50',
                glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)]',
                bg: 'group-hover:bg-violet-500/10'
            },
            indigo: {
                text: 'text-indigo-400',
                border: 'group-hover:border-indigo-500/50',
                glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]',
                bg: 'group-hover:bg-indigo-500/10'
            },
            amber: {
                text: 'text-amber-400',
                border: 'group-hover:border-amber-500/50',
                glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.3)]',
                bg: 'group-hover:bg-amber-500/10'
            }
        };
        return colors[color] || colors.emerald;
    };

    const styles = getColorClasses(accentColor);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0, scale: 0.9 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <section className="py-24 relative overflow-hidden bg-black" ref={ref}>
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px] opacity-20 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className={`absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 pointer-events-none ${styles.text.replace('text-', 'bg-')}`}></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6 tracking-tight text-white">
                        {title}
                    </h2>
                    <div className="w-24 h-1.5 mx-auto rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={isInView ? { x: '0%' } : { x: '-100%' }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className={`h-full w-full ${styles.text.replace('text-', 'bg-')}`}
                        ></motion.div>
                    </div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className={`
                                group relative p-6 rounded-2xl bg-zinc-900/50 border border-white/5 
                                backdrop-blur-sm cursor-default transition-all duration-300
                                ${styles.border} ${styles.glow} ${styles.bg}
                            `}
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-bold text-white group-hover:text-white transition-colors">
                                    {item}
                                </span>
                                <div className={`p-2 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 ${styles.text}`}>
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Decorative corner accent */}
                            <div className={`absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-20 transition-opacity duration-300`}>
                                <svg viewBox="0 0 100 100" className={`fill-current ${styles.text}`}>
                                    <path d="M0 0 L100 0 L100 100 Z" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
