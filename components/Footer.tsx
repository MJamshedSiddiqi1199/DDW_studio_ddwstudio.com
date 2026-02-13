// components/Footer.tsx — Section 10: Footer (Internationalized)
// Uses useTranslations('Footer') to pull translated footer links, tagline, and copyright.
//
// HOW IT WORKS:
// 1. t('tagline') → "Enterprise AI solutions..." (en) or "Soluzioni AI enterprise..." (it)
// 2. t('columns.products') → "Products" (en) or "Prodotti" (it) — column headers translated
// 3. t('productLinks.0') → "Lyra" — product names stay in English
// 4. t('solutionLinks.0') → "Customer Support" (en) or "Supporto Clienti" (it) — solutions translated
// 5. t('companyLinks.1') → "Careers" (en) or "Lavora con Noi" (it) — standard Italian phrase
// 6. t('location') → "Florida, USA" (en) or "Florida, USA — Roma, Italia" (it)
//    ⚠️ Italian adds Roma for local SEO
// 7. t('copyright') contains {year} placeholder — we replace it with current year

'use client';

import Image from 'next/image';
// useTranslations — hook to get translated strings from the Footer namespace
import { useTranslations } from 'next-intl';
// Link from i18n/navigation — locale-aware link (auto-adds /it/ prefix)
import { Link } from '@/i18n/navigation';

// Social links — icons and hrefs don't change per locale
const socialLinks = [
  {
    name: 'Twitter',
    href: '#twitter',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#linkedin',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: '#github',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

// Footer column keys — maps to the translation structure
// Each column has a header (columns.X) and links array (XLinks)
const columnConfig = [
  {
    columnKey: 'products',
    linksKey: 'productLinks',
    paths: ['/products/lyra', '/products/hr-os', '/products/fleet-os', '/products/proposal-gen']
  },
  {
    columnKey: 'company',
    linksKey: 'companyLinks',
    paths: ['/', '/about', '/#contact']
  },
  {
    columnKey: 'legal',
    linksKey: 'legalLinks',
    paths: ['/privacy', '/terms', '/#security', '/cookies']
  },
] as const;

export default function Footer() {
  // useTranslations('Footer') — reads from "Footer" key in en.json or it.json
  const t = useTranslations('Footer');

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            {/* Locale-aware Link — clicking logo goes to correct locale homepage */}
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-11 h-11">
                <Image
                  src="/logo.jpeg"
                  alt="DDW Studio Logo"
                  fill
                  className="object-contain transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                {/* t('brand') → "DDW Studio" — always English */}
                <span className="text-xl font-bold text-white font-display">{t('brand')}</span>
                {/* t('brandSub') → "Enterprise AI" — always English */}
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider">{t('brandSub')}</span>
              </div>
            </Link>
            {/* t('tagline') → brand tagline, translated for SEO */}
            <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
              {t('tagline')}
            </p>
            {/* Social links — icons don't change, aria-labels stay English */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns — each column header and link text is translated */}
          {columnConfig.map(({ columnKey, linksKey, paths }) => (
            <div key={columnKey}>
              {/* t('columns.products') → "Products" (en) or "Prodotti" (it) */}
              <h3 className="text-sm font-semibold text-white mb-4 font-display">
                {t(`columns.${columnKey}`)}
              </h3>
              <ul className="space-y-3">
                {/* Loop through paths to render links */}
                {paths.map((path, index) => {
                  const linkText = t(`${linksKey}.${index}`);
                  const isExternal = path.startsWith('http') || path.startsWith('#');

                  return (
                    <li key={index}>
                      {isExternal ? (
                        <a
                          href={path}
                          className="text-sm text-zinc-500 hover:text-white transition-colors duration-300 link-hover"
                        >
                          {linkText}
                        </a>
                      ) : (
                        <Link
                          href={path as any}
                          className="text-sm text-zinc-500 hover:text-white transition-colors duration-300 link-hover"
                        >
                          {linkText}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright — t('copyright') contains {year} placeholder */}
          {/* EN: "© 2026 DDW Studio. Digital Dream Works LLC. All rights reserved." */}
          {/* IT: "© 2026 DDW Studio. Digital Dream Works LLC. Tutti i diritti riservati." */}
          <p className="text-sm text-zinc-500">
            {t('copyright', { year: new Date().getFullYear().toString() })}
          </p>
          {/* Location badge */}
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {/* t('location') → "Florida, USA" (en) or "Florida, USA — Roma, Italia" (it) */}
              {/* ⚠️ Italian adds Roma, Italia for local SEO advantage */}
              {t('location')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}