import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev" },
      { protocol: "https", hostname: "athena-cannabis-images.vercel.app" },
      { protocol: "https", hostname: "afterdarkcannabis.com" },
      { protocol: "https", hostname: "kennedyloudcannabis.com" },
      { protocol: "https", hostname: "stclaircannabis.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/blog", destination: "/", permanent: true },
      { source: "/blog/:path*", destination: "/", permanent: true },
      { source: "/edibles", destination: "/items/edibles", permanent: true },
      { source: "/vapes", destination: "/items/vapes", permanent: true },
      { source: "/vape-disposables", destination: "/items/vape-disposables", permanent: true },
      { source: "/concentrates", destination: "/items/concentrates", permanent: true },
      { source: "/prerolls", destination: "/items/prerolls", permanent: true },
      { source: "/add-ons", destination: "/items/add-ons", permanent: true },
      { source: "/cigarettes", destination: "/items/cigarettes", permanent: true },
      { source: "/magic", destination: "/items/magic", permanent: true },
      { source: "/item/grabba-redrose-redherring", destination: "/item/grabba", permanent: true },
      {
        source: "/flower/mike-tyson-ko-super-exotics:stars(\\*+)",
        destination: "/flower/mike-tyson-ko-super-exotics",
        permanent: true,
      },
      {
        source: "/item/grabba-shaker-redrose-red-herring-x2-available",
        destination: "/item/grabba-shaker-redrose-red-herring",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
