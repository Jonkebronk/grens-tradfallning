import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import { Analytics } from "@/components/shared/Analytics";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grens Trädfällning | Trädfällning i Luleå med RUT-avdrag",
  description:
    "Snabb, säker och prisvärd trädfällning i Luleå och Norrbotten. Precisionsfällning, gallring, vinschfällning och stubbfräsning med RUT-avdrag. Ring 072-200 44 13 för offert.",
  keywords: [
    "trädfällning Luleå",
    "stubbfräsning Luleå",
    "gallring Norrbotten",
    "trädfällning Boden",
    "RUT-avdrag trädfällning",
    "Grens Trädfällning",
    "precisionsfällning",
    "vinschfällning",
  ],
  openGraph: {
    title: "Grens Trädfällning – Professionell trädfällning i Luleå",
    description:
      "Snabb, säker och prisvärd trädfällning i Luleå med omnejd. RUT-avdrag. Ring 072-200 44 13.",
    locale: "sv_SE",
    type: "website",
  },
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Grens Trädfällning",
  description:
    "Professionell trädfällning, gallring, vinschfällning och stubbfräsning i Luleå med omnejd.",
  telephone: "+46722004413",
  email: "markus.gren90@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Luleå",
    addressRegion: "Norrbotten",
    addressCountry: "SE",
  },
  areaServed: [
    "Luleå",
    "Boden",
    "Gammelstad",
    "Persön",
    "Brändön",
    "Luleå skärgård",
  ],
  priceRange: "$$",
  sameAs: ["https://instagram.com/grens_tradfallning"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${poppins.variable} ${openSans.variable} h-full antialiased`}
    >
      <head>
        <script type="application/ld+json">{jsonLd}</script>
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
