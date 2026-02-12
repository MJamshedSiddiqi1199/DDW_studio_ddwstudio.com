// app/[locale]/terms/page.tsx
// ─────────────────────────────────────────────────────────────────────
// Terms of Service page — ddwstudio.com/terms
// Uses the shared LegalPageLayout + LegalSection components.
// All text comes from the "TermsOfService" namespace in the locale JSON.
//
// Route structure:
//   EN → /terms
//   IT → /it/terms
// ─────────────────────────────────────────────────────────────────────

import { use } from 'react';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import TermsContent from './TermsContent';

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
    const t = await getTranslations({ locale, namespace: 'TermsOfService' });

    return {
        title: t('metaTitle'),
        description: t('metaDescription'),
        robots: { index: false, follow: true }, // noindex, follow as specified
        alternates: {
            canonical: 'https://ddwstudio.com/terms',
            languages: {
                en: 'https://ddwstudio.com/terms',
                it: 'https://ddwstudio.com/it/terms',
            },
        },
    };
}

// ── Page component ──
export default function TermsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = use(params);
    setRequestLocale(locale);

    return <TermsContent />;
}
