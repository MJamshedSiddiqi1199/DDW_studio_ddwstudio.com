// middleware.ts — next-intl Middleware for locale detection and routing
// This middleware intercepts every request and:
// 1. Detects the user's preferred locale (from URL, cookie, or browser Accept-Language header)
// 2. Redirects to the correct locale URL if needed (e.g., /it/ for Italian users)
// 3. Sets the x-next-intl-locale header so server components can read the locale
//
// The 'matcher' config below ensures this middleware ONLY runs on page routes,
// NOT on API routes, static files, or Next.js internal routes.

import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Create the middleware using our routing configuration (locales: en, it)
export default createMiddleware(routing);

export const config = {
    // Match all pathnames EXCEPT:
    // - /api/* — API routes should not be locale-prefixed
    // - /trpc/* — tRPC routes (if used)
    // - /_next/* — Next.js internal routes (static files, HMR, etc.)
    // - /_vercel/* — Vercel internal routes
    // - Files with dots in the name (e.g., favicon.ico, robots.txt, images)
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
