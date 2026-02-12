// app/[locale]/about/page.tsx
// ─────────────────────────────────────────────────────────────────────
// About Us page — ddwstudio.com/about
//
// Route structure:
//   EN → /about
//   IT → /it/about
// ─────────────────────────────────────────────────────────────────────

import { use } from 'react';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import AboutContent from './AboutContent';

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
    const t = await getTranslations({ locale, namespace: 'About' });

    return {
        title: t('metaTitle'),
        description: t('metaDescription'),
        alternates: {
            canonical: 'https://ddwstudio.com/about',
            languages: {
                en: 'https://ddwstudio.com/about',
                it: 'https://ddwstudio.com/it/about',
            },
        },
    };
}

// ── Page component ──
export default function AboutPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = use(params);
    setRequestLocale(locale);

    return <AboutContent />;
}
