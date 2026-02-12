// app/[locale]/page.tsx — Locale-aware homepage
// This is the main page component for each locale.
// It imports all section components and renders them in order.
//
// The [locale] folder makes this page available at:
// - ddwstudio.com/ (English — default, no prefix needed)
// - ddwstudio.com/it/ (Italian)
//
// setRequestLocale() is called to enable static rendering for this page.

import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Hero3D from '@/components/Hero3D';
import Stats from '@/components/Stats';
import Products3D from '@/components/Products3D';
import HowItWorks from '@/components/HowItWorks';
import CompanyInfo from '@/components/CompanyInfo';
import Testimonials from '@/components/Testimonials';
import Security from '@/components/Security';
import CTABand from '@/components/CTABand';
import Footer from '@/components/Footer';

// Page receives params with the locale from the URL segment [locale]
export default function Home({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    // use() unwraps the Promise to get the locale value
    const { locale } = use(params);

    // Enable static rendering — must be called before any next-intl hooks
    setRequestLocale(locale);

    return (
        <main className="min-h-screen relative">
            {/* Noise Texture Overlay — visual effect, no translation needed */}
            <div className="noise"></div>

            {/* Navigation bar — uses useTranslations('Navigation') internally */}
            <Navigation />

            {/* Hero section — uses useTranslations('Hero') internally */}
            <Hero3D />

            {/* Remaining sections — will be internationalized in future batches */}
            <Stats />
            <Products3D />
            <HowItWorks />
            <CompanyInfo />
            <Testimonials />
            <Security />
            <CTABand />
            <Footer />
        </main>
    );
}
