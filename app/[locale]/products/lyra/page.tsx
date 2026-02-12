// app/[locale]/products/lyra/page.tsx
// ─────────────────────────────────────────────────────────────────────
// Lyra AI Voice Assistant product page
// URL: ddwstudio.com/products/lyra
// ─────────────────────────────────────────────────────────────────────

import { use } from 'react';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import LyraContent from './LyraContent';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Lyra' });

    return {
        title: t('metaTitle'),
        description: t('metaDescription'),
        alternates: {
            canonical: `https://ddwstudio.com/products/lyra`,
            languages: {
                en: 'https://ddwstudio.com/products/lyra',
                it: 'https://ddwstudio.com/it/products/lyra',
            },
        },
    };
}

export default function LyraPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = use(params);
    setRequestLocale(locale);

    return <LyraContent />;
}
