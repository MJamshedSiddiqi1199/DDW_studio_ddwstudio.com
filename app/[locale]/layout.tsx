// app/[locale]/layout.tsx — Locale-aware root layout
// This layout wraps ALL pages for a given locale.
// The [locale] in the folder name is a dynamic route segment — Next.js
// will pass the locale ('en' or 'it') as a param to this component.
//
// Key responsibilities:
// 1. Validate the locale from the URL (redirect to 404 if invalid)
// 2. Set the locale for static rendering via setRequestLocale()
// 3. Wrap children in NextIntlClientProvider so client components can use translations
// 4. Set the correct lang attribute on <html> for SEO & accessibility
// 5. Add hreflang tags for SEO (tells Google about EN and IT versions)
// 6. Generate locale-specific metadata (title, description, keywords)

import type { Metadata } from 'next';
// import { Inter } from 'next/font/google'; // Disabled due to network restriction (getaddrinfo ENOTFOUND)
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../globals.css'; // CSS stays in the parent app/ directory
import { ModalProvider } from '@/components/ContactForm/ModalContext';
import ResponsiveZoom from '@/components/ResponsiveZoom';

// Load the Inter font for the entire app
// const inter = Inter({ subsets: ['latin'] });
const inter = { className: 'font-sans' }; // Fallback to system font to bypass Google Fonts fetch failure

// generateStaticParams tells Next.js to pre-render pages for EACH locale
// at build time. This creates /en/ and /it/ versions of every page.
export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

// generateMetadata creates locale-specific <head> tags for SEO.
// For Italian, it uses the Italian title, description, and keywords from it.json.
// For English, it uses the English version from en.json.
export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    // Await the params to get the locale
    const { locale } = await params;

    // Load translations for the Metadata namespace
    const t = await getTranslations({ locale, namespace: 'Metadata' });

    return {
        // Resolve absolute URLs for social images, favicons, etc.
        metadataBase: new URL(locale === 'it' ? 'https://ddwstudio.it' : 'https://ddwstudio.com'),

        // The title tag — critical for SEO
        // EN: "DDW Studio - AI Automation Platform..."
        // IT: "DDW Studio | Piattaforma AI Enterprise per Aziende Italiane"
        title: t('title'),

        // The meta description — shown in Google search results
        description: t('description'),

        // SEO keywords
        keywords: t('keywords'),

        // hreflang alternate links — tells Google about both language versions
        // Updated to use the correct domain for each locale
        alternates: {
            languages: {
                en: 'https://ddwstudio.com/',
                it: 'https://ddwstudio.it/',
            },
        },

        // OpenGraph tags for social sharing
        openGraph: {
            title: t('title'),
            description: t('description'),
            type: 'website',
            siteName: 'DDW Studio',
            locale: locale === 'it' ? 'it_IT' : 'en_US',
            images: [
                {
                    url: '/logo.jpeg',
                    width: 1200,
                    height: 630,
                    alt: 'DDW Studio - AI Automation Platform',
                },
            ],
        },

        // Twitter card metadata
        twitter: {
            card: 'summary_large_image',
            title: t('title'),
            description: t('description'),
            images: ['/logo.jpeg'],
        },

        // Favicon and App Icons
        icons: {
            icon: '/logo.jpeg',
            shortcut: '/logo.jpeg',
            apple: '/logo.jpeg',
        },

        robots: {
            index: true,
            follow: true,
        },
    };
}

// Props type for the layout — locale comes from the [locale] URL segment
type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
    // Await the params to extract the locale from the URL
    const { locale } = await params;

    // Validate that the locale is one we support (en or it)
    // If someone visits /fr/ or /de/, show 404
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    // Enable static rendering — this tells next-intl to use the locale
    // from params instead of reading headers (which would force dynamic rendering)
    setRequestLocale(locale);

    return (
        // Set the lang attribute on <html> — essential for SEO and screen readers
        // EN pages get lang="en", IT pages get lang="it"
        <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
            <head>
                {/* Favicon / App Icons */}
                <link rel="icon" href="/logo.jpeg" />
                <link rel="apple-touch-icon" href="/logo.jpeg" />
                <link rel="shortcut icon" href="/logo.jpeg" />

                {/* SEO keywords meta tag */}
                <meta name="keywords" content={locale === 'it'
                    ? 'piattaforma AI enterprise, automazione aziendale AI, intelligenza artificiale per aziende, assistente vocale AI Italia, software automazione HR, gestione flotte AI, DDW Studio Roma'
                    : 'AI automation platform, enterprise AI software, AI voice assistant for business, HR automation software, fleet management software, automated proposal generator'
                } />

                {/* hreflang tags — tell search engines about language variants */}
                {/* This helps Google show the Italian version to Italian users */}
                <link rel="alternate" hrefLang="en" href="https://ddwstudio.com/" />
                <link rel="alternate" hrefLang="it" href="https://ddwstudio.it/" />
                <link rel="alternate" hrefLang="x-default" href="https://ddwstudio.com/" />

                {/* Organization schema markup for Italian SEO (local business in Roma) */}
                {locale === 'it' && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                '@context': 'https://schema.org',
                                '@type': 'Organization',
                                name: 'DDW Studio',
                                url: 'https://ddwstudio.it/',
                                address: {
                                    '@type': 'PostalAddress',
                                    addressLocality: 'Roma',
                                    addressCountry: 'IT',
                                },
                                description:
                                    'DDW Studio è la divisione AI enterprise di Digital Dream Works LLC. Offriamo soluzioni di intelligenza artificiale per automazione aziendale.',
                            }),
                        }}
                    />
                )}

                {/* CRITICAL: Blocking script to set zoom BEFORE page render */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                function setInitialZoom() {
                                    if (window.innerWidth > 768) {
                                        var baseTarget = 0.9;
                                        var pixelRatio = window.devicePixelRatio || 1;
                                        var cssZoom = (baseTarget / pixelRatio) * 100;
                                        document.documentElement.style.zoom = cssZoom + "%";
                                    }
                                }
                                setInitialZoom();
                            })();
                        `,
                    }}
                />
            </head>
            <body className={inter.className}>
                {/* NextIntlClientProvider passes translation messages to ALL client components */}
                {/* Without this wrapper, useTranslations() won't work in client components */}
                <NextIntlClientProvider>
                    <ModalProvider>
                        <ResponsiveZoom />
                        {children}
                    </ModalProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
