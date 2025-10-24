import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

export const metadata: Metadata = {
  title: "Roméo Rel | Next.js Developer",
  description:
    "My name is Roméo Rel and I specialize in Next.js website and web app Development",
  keywords: [
    "next.js",
    "cms",
    "portfolio",
    "frontend",
    "react",
    "developer",
    "landing page",
    "dashboard",
    "tailwind",
    "contentful",
    "sanity",
    "seo",
  ],
  openGraph: {
    title: "Roméo Rel | Next.js Developer",
    description:
      "Build modern, SEO, high-performance websites — Next.js and React development.",
    url: "",
    siteName: "Roméo Rel | Next.js Developer",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Roméo Rel - Next.js Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Roméo Rel",
              url: "https://yourdomain.com", // replace with your real URL
              jobTitle: "Next.js Developer",
              sameAs: [
                "https://github.com/Romeorel",
                "https://linkedin.com/in/romeo-rel-302045200/",
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
