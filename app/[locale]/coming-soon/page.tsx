// app/[locale]/coming-soon/page.tsx
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import ComingSoonContent from './ComingSoonContent';

export default async function ComingSoonPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <ComingSoonContent />;
}
