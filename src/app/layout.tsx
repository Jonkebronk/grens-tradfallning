import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import { Analytics } from "@/components/shared/Analytics";
import "./globals.css";

const SITE_URL = "https://grens-tradfallning.vercel.app";

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
    url: SITE_URL,
    siteName: "Grens Trädfällning",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Grens Trädfällning – Professionell trädfällning i Luleå",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grens Trädfällning – Trädfällning i Luleå",
    description:
      "Snabb, säker och prisvärd trädfällning i Luleå med RUT-avdrag. Ring 072-200 44 13.",
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
};

const localBusinessJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Grens Trädfällning",
  description:
    "Professionell trädfällning, gallring, vinschfällning och stubbfräsning i Luleå med omnejd.",
  telephone: "+46722004413",
  email: "markus.gren90@gmail.com",
  url: SITE_URL,
  image: `${SITE_URL}/images/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Luleå",
    addressRegion: "Norrbotten",
    addressCountry: "SE",
  },
  areaServed: [
    { "@type": "City", name: "Luleå" },
    { "@type": "City", name: "Boden" },
    { "@type": "City", name: "Gammelstad" },
    { "@type": "AdministrativeArea", name: "Norrbotten" },
  ],
  priceRange: "$$",
  sameAs: [
    "https://instagram.com/grens_tradfallning",
    "https://www.facebook.com/profile.php?id=61577624627170",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: "Patrik Persson" },
      reviewBody:
        "Utför jobbet snabbt och effektivt med precision! Rekommenderas!",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Person", name: "Karolina Fredriksson" },
      reviewBody:
        "Proffsigt utfört! Träden föll precis där de skulle och bortstädningen blev noggrant fixad. Tack för hjälpen!",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tjänster",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Trädfällning",
          description:
            "Professionell trädfällning inklusive precisionsfällning nära hus och byggnader i Luleå med omnejd.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gallring",
          description:
            "Gallring av tomter för ökat ljusinsläpp och frigörande av kvällssol.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vinschassisterad fällning",
          description:
            "Säker fällning av lutande och riskträd med vinsch.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Stubbfräsning",
          description:
            "Maskinell stubbfräsning. Från 1 350 kr för första stubben efter RUT-avdrag.",
        },
      },
    ],
  },
});

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vad kostar trädfällning i Luleå?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Priset beror på trädets storlek, placering och svårighetsgrad. Stubbfräsning kostar från 1 350 kr för första stubben och 350 kr per extra stubbe efter RUT-avdrag. Kontakta mig för en kostnadsfri offert.",
      },
    },
    {
      "@type": "Question",
      name: "Får man fälla träd på sin egen tomt i Luleå?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "I de flesta fall får du fälla träd på din egen tomt utan tillstånd. Undantag kan gälla inom detaljplanerat område eller om trädet är skyddat. Kontakta Luleå kommun om du är osäker.",
      },
    },
    {
      "@type": "Question",
      name: "Vad ingår i RUT-avdraget för trädfällning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RUT-avdraget ger 50% skattereduktion på arbetskostnaden för trädfällning, stubbfräsning och gallring på din tomt. Avdraget gäller för privatpersoner och du får max 75 000 kr per person och år.",
      },
    },
    {
      "@type": "Question",
      name: "Hur snabbt kan du komma för att fälla ett träd?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Normalt kan jag boka in ett jobb inom 1–2 veckor. Vid akuta situationer som stormskador försöker jag komma snabbare. Ring 072-200 44 13 så löser vi det.",
      },
    },
    {
      "@type": "Question",
      name: "Fäller du träd nära hus och byggnader?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, precisionsfällning nära hus är en av mina specialiteter. Jag använder vinsch och professionell utrustning för att styra fällriktningen och skydda det som ska bevaras.",
      },
    },
    {
      "@type": "Question",
      name: "Forslar du bort virket och riset?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, jag kan forsla bort ris och grenar. Stammar kapar jag i vedlängder — du bestämmer om du vill behålla veden eller om jag ska ta med den.",
      },
    },
    {
      "@type": "Question",
      name: "Har du försäkring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, jag är försäkrad och godkänd för F-skatt. Skulle något oväntat hända under arbetet är du som kund skyddad.",
      },
    },
    {
      "@type": "Question",
      name: "Vilka områden arbetar du i?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Jag arbetar i Luleå, Boden, Gammelstad, Persön, Brändön och Luleå skärgård. Kontakta mig om du är osäker — jag tar mig an jobb i hela Norrbotten.",
      },
    },
  ],
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
        <script type="application/ld+json">{localBusinessJsonLd}</script>
        <script type="application/ld+json">{faqJsonLd}</script>
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
