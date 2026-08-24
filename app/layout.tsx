import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://spiritcornercannabis.com"),
  title: {
    default: "Spirit Corner Cannabis - Premium Cannabis Dispensary, Ottawa",
    template: "%s",
  },
  description:
    "Spirit Corner Cannabis offers Budget, AA, AAA+, Premium, and Exotic flower tiers plus edibles, vapes, pre-rolls, and accessories at 251 Dalhousie St. Open 24 hours.",
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
    siteName: "Spirit Corner Cannabis",
    title: "Spirit Corner Cannabis - Premium Ottawa Cannabis Dispensary",
    description:
      "Five flower tiers plus edibles, vapes, pre-rolls, and accessories at 251 Dalhousie St. Open 24 hours.",
    images: [
      {
        url: "/banners/spirit_corner_cannabis_showcase.webp",
        width: 1168,
        height: 784,
        alt: "Spirit Corner Cannabis branded welcome graphic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spirit Corner Cannabis - Ottawa's Uplifting Dispensary",
    description:
      "Five flower tiers and more at 251 Dalhousie St, Ottawa. Open 24 hours.",
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
  telephone: "+13433088998",
  image: "https://spiritcornercannabis.com/banners/spirit_corner_cannabis_showcase.webp",
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
    latitude: 45.4310488,
    longitude: -75.6927362,
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S9S5B80HR2"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
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
