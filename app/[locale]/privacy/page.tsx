// app/[locale]/privacy/page.tsx
// ─────────────────────────────────────────────────────────────────────
// Privacy Policy page — ddwstudio.com/privacy
// Uses the shared LegalPageLayout + LegalSection components.
// All text comes from the "PrivacyPolicy" namespace in the locale JSON.
//
// Route structure:
//   EN → /privacy
//   IT → /it/privacy
// ─────────────────────────────────────────────────────────────────────

import { use } from 'react';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import PrivacyContent from './PrivacyContent';

// ── Static params for build-time rendering ──
export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

// ── Page-specific metadata for SEO ──
export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'PrivacyPolicy' });

    return {
        title: t('metaTitle'),
        description: t('metaDescription'),
        robots: { index: false, follow: true }, // noindex, follow as specified
        alternates: {
            canonical: 'https://ddwstudio.com/privacy',
            languages: {
                en: 'https://ddwstudio.com/privacy',
                it: 'https://ddwstudio.com/it/privacy',
            },
        },
    };
}

// ── Page component ──
export default function PrivacyPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = use(params);
    setRequestLocale(locale);

    return <PrivacyContent />;
}
