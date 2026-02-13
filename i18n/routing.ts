// i18n/routing.ts — Central routing configuration for next-intl
// This file defines which locales our app supports and which one is the default.
// 'en' = English (default), 'it' = Italian
// The localePrefix 'as-needed' means English URLs won't have /en/ prefix,
// but Italian URLs will have /it/ prefix (e.g. ddwstudio.com/it/)

import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // All locales that are supported by the application
    locales: ['en', 'it'],

    // The default locale — English. 
    defaultLocale: 'en',

    // 'as-needed' means the default locale (en) won't show in the URL,
    // but non-default locales (it) will show as /it/
    localePrefix: 'as-needed',

    // Domain-based routing: 
    // ddwstudio.com -> defaults to English
    // ddwstudio.it -> defaults to Italian
    domains: [
        {
            domain: 'ddwstudio.com',
            defaultLocale: 'en',
            // Optional: restrict locales available on this domain
            locales: ['en']
        },
        {
            domain: 'ddwstudio.it',
            defaultLocale: 'it',
            // Optional: restrict locales available on this domain
            locales: ['it']
        }
    ]
});
