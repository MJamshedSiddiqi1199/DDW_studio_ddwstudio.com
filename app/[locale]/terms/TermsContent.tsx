// app/[locale]/terms/TermsContent.tsx
// ─────────────────────────────────────────────────────────────────────
// Client component that renders the full Terms of Service.
// All strings come from useTranslations('TermsOfService').
// Uses the shared LegalPageLayout + LegalSection components.
// ─────────────────────────────────────────────────────────────────────

'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import LegalSection from '@/components/legal/LegalSection';

export default function TermsContent() {
    const t = useTranslations('TermsOfService');

    return (
        <LegalPageLayout
            title={t('title')}
            lastUpdated={t('lastUpdated')}
            intro={t('intro')}
        >
            {/* ──────────────── 1. Acceptance of Terms ──────────────── */}
            <LegalSection number="1" title={t('s1.title')}>
                <p>{t('s1.p1')}</p>
            </LegalSection>

            {/* ──────────────── 2. Description of Service ──────────────── */}
            <LegalSection number="2" title={t('s2.title')}>
                <p>{t('s2.p1')}</p>
            </LegalSection>

            {/* ──────────────── 3. Account Registration ──────────────── */}
            <LegalSection number="3" title={t('s3.title')}>
                <p>{t('s3.p1')}</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>{t('s3.b1')}</li>
                    <li>{t('s3.b2')}</li>
                    <li>{t('s3.b3')}</li>
                    <li>{t('s3.b4')}</li>
                </ul>
            </LegalSection>

            {/* ──────────────── 4. Acceptable Use ──────────────── */}
            <LegalSection number="4" title={t('s4.title')}>
                <p>{t('s4.p1')}</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>{t('s4.b1')}</li>
                    <li>{t('s4.b2')}</li>
                    <li>{t('s4.b3')}</li>
                    <li>{t('s4.b4')}</li>
                    <li>{t('s4.b5')}</li>
                    <li>{t('s4.b6')}</li>
                </ul>
            </LegalSection>

            {/* ──────────────── 5. Payment Terms ──────────────── */}
            <LegalSection number="5" title={t('s5.title')}>
                <p>{t('s5.p1')}</p>
            </LegalSection>

            {/* ──────────────── 6. Intellectual Property ──────────────── */}
            <LegalSection number="6" title={t('s6.title')}>
                <p>{t('s6.p1')}</p>
            </LegalSection>

            {/* ──────────────── 7. Data and Privacy ──────────────── */}
            <LegalSection number="7" title={t('s7.title')}>
                <p>
                    {t('s7.p1')}{' '}
                    <Link
                        href="/privacy"
                        className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors"
                    >
                        ddwstudio.com/privacy
                    </Link>
                    . {t('s7.p2')}
                </p>
            </LegalSection>

            {/* ──────────────── 8. Limitation of Liability ──────────────── */}
            <LegalSection number="8" title={t('s8.title')}>
                <p>{t('s8.p1')}</p>
            </LegalSection>

            {/* ──────────────── 9. Disclaimer of Warranties ──────────────── */}
            <LegalSection number="9" title={t('s9.title')}>
                <p>{t('s9.p1')}</p>
            </LegalSection>

            {/* ──────────────── 10. Termination ──────────────── */}
            <LegalSection number="10" title={t('s10.title')}>
                <p>{t('s10.p1')}</p>
            </LegalSection>

            {/* ──────────────── 11. Governing Law ──────────────── */}
            <LegalSection number="11" title={t('s11.title')}>
                <p>{t('s11.p1')}</p>
            </LegalSection>

            {/* ──────────────── 12. Changes to Terms ──────────────── */}
            <LegalSection number="12" title={t('s12.title')}>
                <p>{t('s12.p1')}</p>
            </LegalSection>

            {/* ──────────────── 13. Contact ──────────────── */}
            <LegalSection number="13" title={t('s13.title')}>
                <p>{t('s13.p1')}</p>
                <ul className="list-none space-y-3 ml-2">
                    <li className="flex items-start gap-3">
                        <span className="text-indigo-400 mt-0.5">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>
                        <span>
                            {t('s13.emailLabel')}{' '}
                            <a
                                href="mailto:legal@ddwstudio.com"
                                className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors"
                            >
                                legal@ddwstudio.com
                            </a>
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-indigo-400 mt-0.5">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </span>
                        <span>{t('s13.address')}</span>
                    </li>
                </ul>
            </LegalSection>
        </LegalPageLayout>
    );
}
