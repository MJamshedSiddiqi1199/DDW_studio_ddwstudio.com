// app/[locale]/products/hr-os/page.tsx
// ─────────────────────────────────────────────────────────────────────
// HR-OS product page
// URL: ddwstudio.com/products/hr-os
// ─────────────────────────────────────────────────────────────────────

import { use } from 'react';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import HROSContent from './HROSContent';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'HROS' });

    return {
        title: t('metaTitle'),
        description: t('metaDescription'),
        alternates: {
            canonical: `https://ddwstudio.com/products/hr-os`,
            languages: {
                en: 'https://ddwstudio.com/products/hr-os',
                it: 'https://ddwstudio.com/it/products/hr-os',
            },
        },
    };
}

export default function HROSPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = use(params);
    setRequestLocale(locale);

    return <HROSContent />;
}
