// app/[locale]/privacy/PrivacyContent.tsx
// ─────────────────────────────────────────────────────────────────────
// Client component that renders the full Privacy Policy.
// All strings come from useTranslations('PrivacyPolicy').
// Uses the shared LegalPageLayout + LegalSection components.
// ─────────────────────────────────────────────────────────────────────

'use client';

import { useTranslations } from 'next-intl';
import LegalPageLayout from '@/components/legal/LegalPageLayout';
import LegalSection from '@/components/legal/LegalSection';

export default function PrivacyContent() {
    const t = useTranslations('PrivacyPolicy');

    return (
        <LegalPageLayout
            title={t('title')}
            lastUpdated={t('lastUpdated')}
            intro={t('intro')}
        >
            {/* ──────────────── 1. Information We Collect ──────────────── */}
            <LegalSection number="1" title={t('s1.title')}>
                <p>{t('s1.p1')}</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>{t('s1.b1')}</li>
                    <li>{t('s1.b2')}</li>
                    <li>{t('s1.b3')}</li>
                    <li>{t('s1.b4')}</li>
                </ul>
                <p>{t('s1.p2')}</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>{t('s1.b5')}</li>
                    <li>{t('s1.b6')}</li>
                    <li>{t('s1.b7')}</li>
                    <li>{t('s1.b8')}</li>
                </ul>
            </LegalSection>

            {/* ──────────────── 2. How We Use Your Information ──────────────── */}
            <LegalSection number="2" title={t('s2.title')}>
                <p>{t('s2.p1')}</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>{t('s2.b1')}</li>
                    <li>{t('s2.b2')}</li>
                    <li>{t('s2.b3')}</li>
                    <li>{t('s2.b4')}</li>
                    <li>{t('s2.b5')}</li>
                    <li>{t('s2.b6')}</li>
                    <li>{t('s2.b7')}</li>
                </ul>
            </LegalSection>

            {/* ──────────────── 3. Information Sharing ──────────────── */}
            <LegalSection number="3" title={t('s3.title')}>
                <p>{t('s3.p1')}</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>{t('s3.b1')}</li>
                    <li>{t('s3.b2')}</li>
                    <li>{t('s3.b3')}</li>
                    <li>{t('s3.b4')}</li>
                </ul>
            </LegalSection>

            {/* ──────────────── 4. Data Security ──────────────── */}
            <LegalSection number="4" title={t('s4.title')}>
                <p>{t('s4.p1')}</p>
            </LegalSection>

            {/* ──────────────── 5. Cookies ──────────────── */}
            <LegalSection number="5" title={t('s5.title')}>
                <p>{t('s5.p1')}</p>
            </LegalSection>

            {/* ──────────────── 6. Your Rights ──────────────── */}
            <LegalSection number="6" title={t('s6.title')}>
                <p>{t('s6.p1')}</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                    <li>{t('s6.b1')}</li>
                    <li>{t('s6.b2')}</li>
                    <li>{t('s6.b3')}</li>
                    <li>{t('s6.b4')}</li>
                    <li>{t('s6.b5')}</li>
                    <li>{t('s6.b6')}</li>
                </ul>
                <p>
                    {t('s6.p2')}{' '}
                    <a
                        href="mailto:privacy@ddwstudio.com"
                        className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors"
                    >
                        privacy@ddwstudio.com
                    </a>
                </p>
            </LegalSection>

            {/* ──────────────── 7. GDPR ──────────────── */}
            <LegalSection number="7" title={t('s7.title')}>
                <p>{t('s7.p1')}</p>
            </LegalSection>

            {/* ──────────────── 8. Data Retention ──────────────── */}
            <LegalSection number="8" title={t('s8.title')}>
                <p>{t('s8.p1')}</p>
            </LegalSection>

            {/* ──────────────── 9. Third-Party Links ──────────────── */}
            <LegalSection number="9" title={t('s9.title')}>
                <p>{t('s9.p1')}</p>
            </LegalSection>

            {/* ──────────────── 10. Children's Privacy ──────────────── */}
            <LegalSection number="10" title={t('s10.title')}>
                <p>{t('s10.p1')}</p>
            </LegalSection>

            {/* ──────────────── 11. Changes to This Policy ──────────────── */}
            <LegalSection number="11" title={t('s11.title')}>
                <p>{t('s11.p1')}</p>
            </LegalSection>

            {/* ──────────────── 12. Contact Us ──────────────── */}
            <LegalSection number="12" title={t('s12.title')}>
                <p>{t('s12.p1')}</p>
                <ul className="list-none space-y-3 ml-2">
                    <li className="flex items-start gap-3">
                        <span className="text-indigo-400 mt-0.5">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>
                        <span>
                            {t('s12.emailLabel')}{' '}
                            <a
                                href="mailto:privacy@ddwstudio.com"
                                className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors"
                            >
                                privacy@ddwstudio.com
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
                        <span>{t('s12.address')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-indigo-400 mt-0.5">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </span>
                        <span>
                            {t('s12.websiteLabel')}{' '}
                            <a
                                href="https://ddwstudio.com/contact"
                                className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors"
                            >
                                ddwstudio.com/contact
                            </a>
                        </span>
                    </li>
                </ul>
            </LegalSection>
        </LegalPageLayout>
    );
}
