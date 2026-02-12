'use client';

import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Rocket, ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/navigation';

export default function ComingSoonContent() {
    const t = useTranslations('ComingSoon');

    return (
        <>
            <Navigation />
            <main className="min-h-[70vh] flex items-center justify-center bg-black text-white px-6">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-xl w-full text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-white/10"
                    >
                        <Rocket className="w-10 h-10 text-indigo-400" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl font-bold font-display mb-6"
                    >
                        {t('title')}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-zinc-400 mb-12 leading-relaxed"
                    >
                        {t('description')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-all group"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            {t('backHome')}
                        </Link>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </>
    );
}
