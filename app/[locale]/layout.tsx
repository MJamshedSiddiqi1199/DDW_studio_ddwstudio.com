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
import Script from 'next/script';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../globals.css'; // CSS stays in the parent app/ directory
import { ModalProvider } from '@/components/ContactForm/ModalContext';
// import ResponsiveZoom from '@/components/ResponsiveZoom';

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
    // const t = await getTranslations({ locale, namespace: 'Metadata' });

    // The user provided specific values for ddwstudio.com SEO
    const enMetadata = {
        title: "DDW Studio — AI SaaS Products",
        description: "DDW Studio builds proprietary AI SaaS products for businesses globally. Products include LYRA AI Receptionist and FleetOS fleet management platform.",
        ogImage: "https://ddwstudio.com/og-image.png",
    };

    if (locale === 'en') {
        return {
            metadataBase: new URL('https://ddwstudio.com'),
            title: enMetadata.title,
            description: enMetadata.description,
            openGraph: {
                title: enMetadata.title,
                description: enMetadata.description,
                type: 'website',
                url: 'https://ddwstudio.com/',
                siteName: 'DDW Studio',
                locale: 'en_US',
                images: [
                    {
                        url: '/og-image.png',
                        width: 1200,
                        height: 630,
                        alt: enMetadata.title,
                    },
                ],
            },
            twitter: {
                card: 'summary_large_image',
                title: enMetadata.title,
                description: enMetadata.description,
                images: ['/og-image.png'],
            },
            icons: {
                icon: '/logo.jpeg',
                shortcut: '/logo.jpeg',
                apple: '/logo.jpeg',
            },
            robots: {
                index: true,
                follow: true,
            },
            alternates: {
                languages: {
                    en: 'https://ddwstudio.com/',
                    it: 'https://ddwstudio.it/',
                },
            },
        };
    }

    // Italian fallback (keeping existing logic for .it)
    const t = await getTranslations({ locale, namespace: 'Metadata' });
    return {
        metadataBase: new URL('https://ddwstudio.it'),
        title: t('title'),
        description: t('description'),
        keywords: t('keywords'),
        alternates: {
            languages: {
                en: 'https://ddwstudio.com/',
                it: 'https://ddwstudio.it/',
            },
        },
        openGraph: {
            title: t('title'),
            description: t('description'),
            type: 'website',
            siteName: 'DDW Studio',
            locale: 'it_IT',
            images: [
                {
                    url: '/logo.jpeg',
                    width: 1200,
                    height: 630,
                    alt: 'DDW Studio - AI Automation Platform',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: t('title'),
            description: t('description'),
            images: ['/logo.jpeg'],
        },
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
                {/* Google Tag Manager - Script as high in <head> as possible */}
                <Script id="google-tag-manager" strategy="afterInteractive">
                    {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NJ3PNBVZ');`}
                </Script>
                {/* End Google Tag Manager */}

                {/* Google Tag (gtag.js) for ddwstudio.com */}
                {locale === 'en' && (
                    <>
                        <Script
                            src="https://www.googletagmanager.com/gtag/js?id=G-M8R7CDWFPR"
                            strategy="afterInteractive"
                        />
                        <Script id="google-tag-en" strategy="afterInteractive">
                            {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-M8R7CDWFPR');
                            `}
                        </Script>
                    </>
                )}

                {/* Google Tag (gtag.js) for ddwstudio.it */}
                {locale === 'it' && (
                    <>
                        <Script
                            src="https://www.googletagmanager.com/gtag/js?id=G-79065L6XRS"
                            strategy="afterInteractive"
                        />
                        <Script id="google-tag-it" strategy="afterInteractive">
                            {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-79065L6XRS');
                            `}
                        </Script>
                    </>
                )}

                {/* Favicon / App Icons */}
                <link rel="icon" href="/logo.jpeg" />
                <link rel="apple-touch-icon" href="/logo.jpeg" />
                <link rel="shortcut icon" href="/logo.jpeg" />

                {/* JSON-LD Schema Markup */}
                {locale === 'en' && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "SoftwareApplication",
                                "name": "DDW Studio",
                                "url": "https://ddwstudio.com",
                                "logo": "https://ddwstudio.com/logo.png",
                                "description": "DDW Studio builds proprietary AI SaaS products for businesses globally. Products include LYRA AI Receptionist and FleetOS fleet management platform.",
                                "applicationCategory": "BusinessApplication",
                                "operatingSystem": "Web",
                                "offers": { "@type": "Offer", "url": "https://ddwstudio.com" },
                                "publisher": {
                                    "@type": "Organization",
                                    "name": "Digital Dream Works LLC",
                                    "url": "https://ddwstudio.com",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "7901 4TH ST N 23948",
                                        "addressLocality": "St. Petersburg",
                                        "addressRegion": "FL",
                                        "postalCode": "33702",
                                        "addressCountry": "US"
                                    },
                                    "email": "Brands@ddwstudio.com",
                                    "sameAs": [
                                        "https://www.linkedin.com/company/digital-dream-works",
                                        "https://www.instagram.com/digi.dreamworks/"
                                    ]
                                }
                            })
                        }}
                    />
                )}

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

                {/* Standard Viewport — industrial standard for responsiveness */}
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

            </head>
            <body className={inter.className}>
                {/* Google Tag Manager (noscript) - Immediately after opening body */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-NJ3PNBVZ"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                {/* End Google Tag Manager (noscript) */}
                {/* NextIntlClientProvider passes translation messages to ALL client components */}
                {/* Without this wrapper, useTranslations() won't work in client components */}
                <NextIntlClientProvider>
                    <ModalProvider>
                        {children}
                    </ModalProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
