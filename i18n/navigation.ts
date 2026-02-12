// i18n/navigation.ts — Locale-aware navigation utilities for next-intl
// This file creates wrappers around Next.js navigation APIs (Link, redirect, etc.)
// that automatically handle the locale prefix in URLs.
// Instead of using Next.js's default <Link>, use this <Link> in your components
// so that links automatically include the correct locale prefix (/it/ for Italian).

import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// These are locale-aware versions of Next.js navigation APIs:
// - Link: use instead of next/link — auto-adds locale prefix
// - redirect: use instead of next/navigation redirect — locale-aware redirects
// - usePathname: returns pathname without locale prefix
// - useRouter: locale-aware router for programmatic navigation
// - getPathname: get locale-aware pathname on the server
export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);
