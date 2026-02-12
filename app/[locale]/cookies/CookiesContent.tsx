// app/[locale]/cookies/CookiesContent.tsx
// ─────────────────────────────────────────────────────────────────────
// Client component that renders the full Cookie Policy.
// All strings come from useTranslations('CookiePolicy').
// Uses the shared LegalPageLayout + LegalSection components.
// ─────────────────────────────────────────────────────────────────────

'use client';

import { useTranslations } from 'next-intl';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import LegalSection from '@/components/legal/LegalSection';

export default function CookiesContent() {
    const t = useTranslations('CookiePolicy');

    return (
        <LegalPageLayout
            title={t('title')}
            lastUpdated={t('lastUpdated')}
            intro={t('intro')}
        >
            {/* ──────────────── 1. What Are Cookies ──────────────── */}
            <LegalSection number="1" title={t('s1.title')}>
                <p>{t('s1.p1')}</p>
            </LegalSection>

            {/* ──────────────── 2. Types of Cookies We Use ──────────────── */}
            <LegalSection number="2" title={t('s2.title')}>
                <div className="space-y-8">
                    {/* Essential */}
                    <div>
                        <h3 className="text-white font-semibold mb-2">{t('s2.essential.title')}</h3>
                        <p className="text-sm mb-3 text-zinc-500 italic">{t('s2.essential.subtitle')}</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                            <li>{t('s2.essential.b1')}</li>
                            <li>{t('s2.essential.b2')}</li>
                            <li>{t('s2.essential.b3')}</li>
                        </ul>
                    </div>

                    {/* Analytics */}
                    <div>
                        <h3 className="text-white font-semibold mb-2">{t('s2.analytics.title')}</h3>
                        <p className="text-sm mb-3 text-zinc-500 italic">{t('s2.analytics.subtitle')}</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                            <li>{t('s2.analytics.b1')}</li>
                            <li>{t('s2.analytics.b2')}</li>
                            <li>{t('s2.analytics.b3')}</li>
                        </ul>
                    </div>

                    {/* Marketing */}
                    <div>
                        <h3 className="text-white font-semibold mb-2">{t('s2.marketing.title')}</h3>
                        <p className="text-sm mb-3 text-zinc-500 italic">{t('s2.marketing.subtitle')}</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                            <li>{t('s2.marketing.b1')}</li>
                            <li>{t('s2.marketing.b2')}</li>
                            <li>{t('s2.marketing.b3')}</li>
                        </ul>
                    </div>

                    {/* Functional */}
                    <div>
                        <h3 className="text-white font-semibold mb-2">{t('s2.functional.title')}</h3>
                        <p className="text-sm mb-3 text-zinc-500 italic">{t('s2.functional.subtitle')}</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                            <li>{t('s2.functional.b1')}</li>
                            <li>{t('s2.functional.b2')}</li>
                            <li>{t('s2.functional.b3')}</li>
                        </ul>
                    </div>
                </div>
            </LegalSection>

            {/* ──────────────── 3. Managing Cookies ──────────────── */}
            <LegalSection number="3" title={t('s3.title')}>
                <p className="mb-4">{t('s3.p1')}</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>{t('s3.b1')}</li>
                    <li>{t('s3.b2')}</li>
                    <li>{t('s3.b3')}</li>
                </ul>
                <p className="mt-4">{t('s3.p2')}</p>
            </LegalSection>

            {/* ──────────────── 4. Third-Party Cookies ──────────────── */}
            <LegalSection number="4" title={t('s4.title')}>
                <p>{t('s4.p1')}</p>
            </LegalSection>

            {/* ──────────────── 5. Cookie Retention ──────────────── */}
            <LegalSection number="5" title={t('s5.title')}>
                <p>{t('s5.p1')}</p>
            </LegalSection>

            {/* ──────────────── 6. Updates to This Policy ──────────────── */}
            <LegalSection number="6" title={t('s6.title')}>
                <p>{t('s6.p1')}</p>
            </LegalSection>

            {/* ──────────────── 7. Contact ──────────────── */}
            <LegalSection number="7" title={t('s7.title')}>
                <p>
                    {t('s7.p1')}{' '}
                    <a
                        href="mailto:privacy@ddwstudio.com"
                        className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors"
                    >
                        privacy@ddwstudio.com
                    </a>
                </p>
            </LegalSection>
        </LegalPageLayout>
    );
}
