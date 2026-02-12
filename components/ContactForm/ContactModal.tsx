'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';
import { useTranslations } from 'next-intl';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const t = useTranslations('ContactForm');

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl bg-[#0f172a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-8 pb-4 flex items-center justify-between border-b border-white/5">
                            <div>
                                <h2 className="text-3xl font-bold text-white tracking-tight font-display">{t('title')}</h2>
                                <p className="text-white/60 mt-1 font-sans">{t('subtitle')}</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 text-white/40 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
                            <ContactForm />
                        </div>

                        {/* Footer shadow/fade */}
                        <div className="h-4 bg-gradient-to-t from-[#0f172a] to-transparent absolute bottom-0 left-0 right-0 pointer-events-none" />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
