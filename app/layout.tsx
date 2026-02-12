// app/layout.tsx — Root layout (MINIMAL)
// This root layout is kept minimal because the actual layout logic
// (locale detection, font loading, metadata, providers) is handled
// in app/[locale]/layout.tsx.
//
// Since next-intl requires the [locale] dynamic segment, the root layout
// simply passes children through to the locale-specific layout.

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}