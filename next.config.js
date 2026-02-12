// next.config.js — Next.js configuration with next-intl plugin
// The createNextIntlPlugin wraps the Next.js config to enable i18n features.
// It automatically sets up the i18n request handler from i18n/request.ts

const createNextIntlPlugin = require('next-intl/plugin');

// Initialize the next-intl plugin — it reads from i18n/request.ts by default
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mgx-backend-cdn.metadl.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.metadl.com',
        pathname: '/**',
      },
    ],
  },
};

// Wrap the config with the next-intl plugin to enable internationalization
module.exports = withNextIntl(nextConfig);