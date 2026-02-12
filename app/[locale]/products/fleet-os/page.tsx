// app/[locale]/products/fleet-os/page.tsx
// ─────────────────────────────────────────────────────────────────────
// Fleet-OS product page
// URL: ddwstudio.com/products/fleet-os
// ─────────────────────────────────────────────────────────────────────

import { use } from 'react';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import FleetOSContent from './FleetOSContent';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'FleetOS' });

    return {
        title: t('metaTitle'),
        description: t('metaDescription'),
        alternates: {
            canonical: `https://ddwstudio.com/products/fleet-os`,
            languages: {
                en: 'https://ddwstudio.com/products/fleet-os',
                it: 'https://ddwstudio.com/it/products/fleet-os',
            },
        },
    };
}

export default function FleetOSPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = use(params);
    setRequestLocale(locale);

    return <FleetOSContent />;
}
