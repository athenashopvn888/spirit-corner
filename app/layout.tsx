import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://spiritcornercannabis.com"),
  title: {
    default: "Spirit Corner Cannabis - Premium Cannabis Dispensary, Ottawa",
    template: "%s | Spirit Corner Cannabis",
  },
  description:
    "Shop 200+ premium cannabis strains at Spirit Corner Cannabis. Exotic, Premium, AAA+, AA & Budget flower from $3/g. Ottawa's uplifting dispensary at 251 Dalhousie St. Open 24 Hours.",
  keywords: [
    "cannabis dispensary Ottawa",
    "weed store Dalhousie",
    "exotic flower Ottawa",
    "premium cannabis",
    "Spirit Corner Cannabis",
    "cheap weed Ottawa",
    "dispensary near me",
    "THC flower",
    "indica sativa hybrid",
    "edibles Ottawa",
    "vapes",
    "pre-rolls",
    "native cigarettes Ottawa",
    "weed store Gatineau",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://spiritcornercannabis.com",
    siteName: "Spirit Corner Cannabis",
    title: "Spirit Corner Cannabis - Premium Ottawa Cannabis Dispensary",
    description:
      "200+ strains from $3/g. Exotic to Budget. Ottawa's uplifting dispensary at 251 Dalhousie St. Open 24 Hours.",
    images: [
      {
        url: "/banners/spirit_corner_cannabis_showcase.webp",
        width: 1200,
        height: 630,
        alt: "Spirit Corner Cannabis - Premium Cannabis Dispensary Ottawa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spirit Corner Cannabis - Ottawa's Uplifting Dispensary",
    description:
      "200+ strains from $3/g. Open 24 Hours at 251 Dalhousie St, Ottawa.",
    images: ["/banners/spirit_corner_cannabis_showcase.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://spiritcornercannabis.com",
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  additionalType: "https://schema.org/Store",
  "@id": "https://spiritcornercannabis.com",
  name: "Spirit Corner Cannabis",
  description:
    "Cannabis dispensary at 251 Dalhousie St in Ottawa, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open 24 Hours.",
  url: "https://spiritcornercannabis.com",
  telephone: "+16136122107",
  image: "https://spiritcornercannabis.com/wp-content/uploads/2026/04/7Clmh.jpg",
  priceRange: "$3 - $12/g",
  paymentAccepted: "Cash, Credit Card, Interac, Contactless Tap",
  amenityFeature: {
    "@type": "LocationFeatureSpecification",
    name: "24/7 ATM on site",
    value: true,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "251 Dalhousie St",
    addressLocality: "Ottawa",
    addressRegion: "ON",
    postalCode: "K1N 1E7",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.4292,
    longitude: -75.6928,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  areaServed: [
    { "@type": "AdministrativeArea", name: "Ottawa" },
    { "@type": "AdministrativeArea", name: "ByWard Market" },
    { "@type": "AdministrativeArea", name: "Lowertown" },
    { "@type": "AdministrativeArea", name: "Centretown" },
    { "@type": "AdministrativeArea", name: "Vanier" },
    { "@type": "AdministrativeArea", name: "Sandy Hill" },
    { "@type": "AdministrativeArea", name: "Rideau" },
    { "@type": "AdministrativeArea", name: "Orleans" },
    { "@type": "AdministrativeArea", name: "Kanata" },
    { "@type": "AdministrativeArea", name: "Barrhaven" },
    { "@type": "AdministrativeArea", name: "Nepean" },
    { "@type": "AdministrativeArea", name: "Gatineau" },
    { "@type": "AdministrativeArea", name: "Hull" },
    { "@type": "AdministrativeArea", name: "Aylmer" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-S9S5B80HR2"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S9S5B80HR2');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
