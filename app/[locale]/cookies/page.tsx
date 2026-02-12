// app/[locale]/cookies/page.tsx
// ─────────────────────────────────────────────────────────────────────
// Cookie Policy page — ddwstudio.com/cookies
// Uses the shared LegalPageLayout + LegalSection components.
// All text comes from the "CookiePolicy" namespace in the locale JSON.
//
// Route structure:
//   EN → /cookies
//   IT → /it/cookies
// ─────────────────────────────────────────────────────────────────────

import { use } from 'react';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import CookiesContent from './CookiesContent';

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
    const t = await getTranslations({ locale, namespace: 'CookiePolicy' });

    return {
        title: t('metaTitle'),
        description: t('metaDescription'),
        robots: { index: false, follow: true }, // noindex, follow as specified
        alternates: {
            canonical: 'https://ddwstudio.com/cookies',
            languages: {
                en: 'https://ddwstudio.com/cookies',
                it: 'https://ddwstudio.com/it/cookies',
            },
        },
    };
}

// ── Page component ──
export default function CookiesPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = use(params);
    setRequestLocale(locale);

    return <CookiesContent />;
}
