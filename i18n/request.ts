// i18n/request.ts — Server-side request configuration for next-intl
// This file tells next-intl how to load the correct translation messages
// for each incoming request based on the locale from the URL.
// It runs on the server and provides the locale + messages to all components.

import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

// This function is called for every request to determine which locale and
// messages to use. It reads the locale from the URL (via the middleware)
// and loads the corresponding JSON translation file from /messages/
export default getRequestConfig(async ({ requestLocale }) => {
    // requestLocale typically comes from the [locale] segment in the URL
    const requested = await requestLocale;

    // Validate that the requested locale is one we support (en or it)
    // If not, fall back to the default locale (en)
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    return {
        locale,
        // Dynamically import the correct translation JSON file
        // e.g., for 'en' it loads /messages/en.json, for 'it' it loads /messages/it.json
        messages: (await import(`../messages/${locale}.json`)).default
    };
});
