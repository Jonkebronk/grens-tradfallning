import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePage";

export const metadata: Metadata = {
  title: "Vinschfällning i Luleå | Grens Trädfällning",
  description:
    "Vinschassisterad fällning av lutande och riskträd i Luleå. Laski-vinsch för kontrollerad fällriktning. RUT-avdrag. Ring 072-200 44 13.",
  alternates: { canonical: "https://grenstradfallning.se/tjanster/vinschfallning" },
  openGraph: {
    title: "Vinschfällning i Luleå | Grens Trädfällning",
    description: "Säker vinschfällning av lutande och riskträd i Luleå med omnejd.",
  },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Vinschassisterad fällning",
  description: "Säker fällning av lutande och riskträd med Laski-vinsch i Luleå med omnejd.",
  provider: { "@type": "LocalBusiness", name: "Grens Trädfällning" },
  areaServed: "Luleå",
  url: "https://grenstradfallning.se/tjanster/vinschfallning",
});

export default function VinschfallningPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd }} />
    <ServicePageTemplate
      title="Vinschfällning"
      h1="Vinschassisterad fällning av riskträd i Luleå"
      intro="Träd som lutar mot huset, har röta i stammen eller står i svår terräng går inte att fälla fritt. Med Laski-vinsch styr jag fällriktningen exakt och tar ner trädet säkert, även i trånga lägen."
      body={[
        "Vinschen förankras i ett stabilt träd eller fordon och ger upp till flera tons dragkraft. Det betyder att jag kan styra ett lutande träd bort från huset, kraftledningen eller garaget — istället för att hoppas på att det faller rätt.",
        "Typiska jobb: björkar som lutar mot huset efter en storm, tallar med röta som riskerar att falla, och träd som står mellan byggnader där fritt fall inte är möjligt.",
        "Jag bedömer alltid trädet och omgivningen innan jobbet startar. Ibland räcker det med vinsch och sågning från marken. I andra fall krävs sektionsfällning — att ta ner trädet i bitar uppifrån.",
        "Jag arbetar med Laski-vinsch och Husqvarna-motorsågar, full skyddsutrustning och erfarenhet av komplicerade fällningar i Luleå, Boden och hela Norrbotten.",
      ]}
      images={[
        {
          src: "/images/gallery/4-vinschning-tall.jpg",
          alt: "Vinschassisterad fällning av tall i Luleå",
        },
        {
          src: "/images/gallery/5-husqvarna-sag.jpg",
          alt: "Husqvarna motorsåg vid vinschfällning",
        },
      ]}
      relatedServices={[
        { href: "/tjanster/tradfallning", label: "Trädfällning" },
        { href: "/tjanster/gallring", label: "Gallring" },
        { href: "/tjanster/stubbfrasning", label: "Stubbfräsning" },
      ]}
    />
    </>
  );
}
