// components/legal/LegalPageLayout.tsx
// ─────────────────────────────────────────────────────────────────────
// Shared layout shell for ALL legal / policy pages.
// Wrap your page content with this component to get:
//   • Same Navigation + Footer as the homepage
//   • Consistent dark background, spacing, and typography
//   • "Last updated" line at the top
//
// USAGE (in a page like app/[locale]/privacy/page.tsx):
//   <LegalPageLayout title={t('title')} lastUpdated={t('lastUpdated')}>
//     ... page sections ...
//   </LegalPageLayout>
// ─────────────────────────────────────────────────────────────────────

'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface LegalPageLayoutProps {
    /** The big heading at the top of the page (e.g. "Privacy Policy") */
    title: string;
    /** Date string shown below the title (e.g. "Last updated: February 9, 2026") */
    lastUpdated: string;
    /** Optional intro paragraph shown below the date */
    intro?: string;
    children: React.ReactNode;
}

export default function LegalPageLayout({
    title,
    lastUpdated,
    intro,
    children,
}: LegalPageLayoutProps) {
    return (
        <>
            {/* ── Navigation (exact copy from homepage) ── */}
            <Navigation />

            <main className="min-h-screen relative pt-32 pb-24">
                {/* Noise texture overlay — same as homepage */}
                <div className="noise"></div>

                {/* Subtle top glow — keeps the premium feel even on a text‑heavy page */}
                <div
                    className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full opacity-20"
                    style={{
                        background:
                            'radial-gradient(ellipse at center, rgba(99,102,241,0.35), transparent 70%)',
                    }}
                />

                {/* ── Content container ── */}
                <article className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
                    {/* Page header */}
                    <header className="mb-16">
                        <h1 className="text-4xl sm:text-5xl font-bold text-white font-display mb-4">
                            {title}
                        </h1>
                        <p className="text-sm text-zinc-500">{lastUpdated}</p>
                        {intro && (
                            <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed">
                                {intro}
                            </p>
                        )}
                    </header>

                    {/* The actual page sections rendered here */}
                    <div className="legal-content space-y-12">{children}</div>
                </article>
            </main>

            {/* ── Footer (exact copy from homepage) ── */}
            <Footer />
        </>
    );
}
