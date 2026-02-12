// app/[locale]/not-found.tsx — Locale-aware 404 page
// This page is shown when a user navigates to a non-existent route
// within a valid locale (e.g., ddwstudio.com/it/nonexistent)

import { Link } from '@/i18n/navigation';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="text-center px-6">
                <h1 className="text-8xl font-bold font-display text-gradient-vibrant mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
                <p className="text-zinc-400 mb-8 max-w-md mx-auto">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                {/* Using the locale-aware Link from i18n/navigation.ts */}
                {/* This will automatically add /it/ prefix for Italian users */}
                <Link
                    href="/"
                    className="btn-primary inline-flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
