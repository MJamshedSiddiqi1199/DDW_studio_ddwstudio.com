// app/[locale]/products/proposal-gen/page.tsx
// ─────────────────────────────────────────────────────────────────────
// AI Proposal Generator product page
// URL: ddwstudio.com/products/proposal-gen
// ─────────────────────────────────────────────────────────────────────

import { use } from 'react';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import ProposalGenContent from './ProposalGenContent';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'ProposalGen' });

    return {
        title: t('metaTitle'),
        description: t('metaDescription'),
        alternates: {
            canonical: `https://ddwstudio.com/products/proposal-gen`,
            languages: {
                en: 'https://ddwstudio.com/products/proposal-gen',
                it: 'https://ddwstudio.com/it/products/proposal-gen',
            },
        },
    };
}

export default function ProposalGenPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = use(params);
    setRequestLocale(locale);

    return <ProposalGenContent />;
}
