'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
    const t = useTranslations('ContactForm');
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        setIsSubmitting(true);
        setStatus('idle');

        // These IDs come from your EmailJS account dashboard
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

        if (!serviceId || !templateId || !publicKey) {
            setIsSubmitting(false);
            setStatus('error');
            setErrorMessage(t('errorConfig'));
            return;
        }

        // Capture the time for the email template
        const now = new Date();
        const formattedTime = now.toLocaleString();

        // Create a hidden input for the 'time' variable expected by your template
        const timeInput = document.createElement('input');
        timeInput.type = 'hidden';
        timeInput.name = 'time';
        timeInput.value = formattedTime;
        form.current.appendChild(timeInput);

        // Create a hidden input for 'name' which combines first and last name for your template
        const firstName = (form.current.elements.namedItem('firstName') as HTMLInputElement).value;
        const lastName = (form.current.elements.namedItem('lastName') as HTMLInputElement).value;
        const nameInput = document.createElement('input');
        nameInput.type = 'hidden';
        nameInput.name = 'name';
        nameInput.value = `${firstName} ${lastName}`;
        form.current.appendChild(nameInput);

        emailjs
            .sendForm(serviceId, templateId, form.current, publicKey)
            .then(
                () => {
                    setStatus('success');
                    setIsSubmitting(false);
                    form.current?.reset();
                    // Clean up hidden inputs
                    form.current?.removeChild(timeInput);
                    form.current?.removeChild(nameInput);
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    setStatus('error');
                    setIsSubmitting(false);
                    setErrorMessage(t('errorGeneral'));
                    // Clean up hidden inputs
                    form.current?.removeChild(timeInput);
                    form.current?.removeChild(nameInput);
                }
            );
    };

    if (status === 'success') {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center text-white">
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold mb-2 font-display">{t('successTitle')}</h3>
                <p className="opacity-70 font-sans">{t('successSubtitle')}</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors border border-white/10 font-medium"
                >
                    {t('sendAnother')}
                </button>
            </div>
        );
    }

    return (
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white/80 mb-2 font-display">
                        {t('firstName')} *
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        required
                        placeholder={t('firstNamePlaceholder')}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-sans"
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-white/80 mb-2 font-display">
                        {t('lastName')} *
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        required
                        placeholder={t('lastNamePlaceholder')}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-sans"
                    />
                </div>
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2 font-display">
                        {t('email')} *
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder={t('emailPlaceholder')}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-sans"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2 font-display">
                        {t('phone')} *
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        placeholder={t('phonePlaceholder')}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-sans"
                    />
                </div>
            </div>

            {/* Company Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2 font-display">
                        {t('company')} *
                    </label>
                    <input
                        type="text"
                        name="company"
                        id="company"
                        required
                        placeholder={t('companyPlaceholder')}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-sans"
                    />
                </div>
                <div>
                    <label htmlFor="companySize" className="block text-sm font-medium text-white/80 mb-2 font-display">
                        {t('companySize')} *
                    </label>
                    <select
                        name="companySize"
                        id="companySize"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-sans appearance-none"
                    >
                        <option value="" className="bg-[#0f172a]">{t('companySizePlaceholder')}</option>
                        <option value="1-50" className="bg-[#0f172a]">{t('companySizes.s1_50')}</option>
                        <option value="51-200" className="bg-[#0f172a]">{t('companySizes.s51_200')}</option>
                        <option value="201-1000" className="bg-[#0f172a]">{t('companySizes.s201_1000')}</option>
                        <option value="1001-5000" className="bg-[#0f172a]">{t('companySizes.s1001_5000')}</option>
                        <option value="5000+" className="bg-[#0f172a]">{t('companySizes.s5000')}</option>
                    </select>
                </div>
            </div>

            {/* Product Interest */}
            <div>
                <label htmlFor="productInterest" className="block text-sm font-medium text-white/80 mb-2 font-display">
                    {t('productInterest')} *
                </label>
                <select
                    name="productInterest"
                    id="productInterest"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-sans appearance-none"
                >
                    <option value="" className="bg-[#0f172a]">{t('productInterestPlaceholder')}</option>
                    <option value="Lyra" className="bg-[#0f172a]">{t('products.lyra')}</option>
                    <option value="HR-OS" className="bg-[#0f172a]">{t('products.hros')}</option>
                    <option value="Fleet-OS" className="bg-[#0f172a]">{t('products.fleet')}</option>
                    <option value="Proposal Gen" className="bg-[#0f172a]">{t('products.proposal')}</option>
                    <option value="Multiple" className="bg-[#0f172a]">{t('products.multiple')}</option>
                    <option value="Not Sure" className="bg-[#0f172a]">{t('products.unsure')}</option>
                </select>
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2 font-display">
                    {t('message')}
                </label>
                <textarea
                    name="message"
                    id="message"
                    rows={3}
                    placeholder={t('messagePlaceholder')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none font-sans"
                ></textarea>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3">
                <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-500 transition-all"
                />
                <label htmlFor="consent" className="text-xs text-white/60 leading-relaxed font-sans cursor-pointer">
                    {t('consent')}
                </label>
            </div>

            {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-4 rounded-lg border border-red-400/20">
                    <AlertCircle className="w-4 h-4" />
                    <p>{errorMessage}</p>
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-600/50 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20 font-display text-lg"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        {t('sending')}
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5" />
                        {t('submit')}
                    </>
                )}
            </button>

            <p className="text-center text-[10px] text-white/30 font-sans uppercase tracking-wider">
                {t('privacy')}
            </p>
        </form>
    );
}
