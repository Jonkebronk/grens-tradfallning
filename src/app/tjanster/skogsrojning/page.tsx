import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePage";

export const metadata: Metadata = {
  title: "Skogsröjning i Luleå | Grens Trädfällning",
  description:
    "Skogsröjning och markröjning i Luleå och Norrbotten. Röjning av sly, underväxt och igenväxta tomter. RUT-avdrag. Ring 072-200 44 13.",
  alternates: { canonical: "https://grenstradfallning.se/tjanster/skogsrojning" },
  openGraph: {
    title: "Skogsröjning i Luleå | Grens Trädfällning",
    description: "Professionell skogsröjning i Luleå. Röjning av sly och underväxt. RUT-avdrag.",
  },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Skogsröjning",
  description: "Röjning av sly, buskar och underväxt för framkomlig och ljus tomt i Luleå med omnejd.",
  provider: { "@type": "LocalBusiness", name: "Grens Trädfällning" },
  areaServed: "Luleå",
  url: "https://grenstradfallning.se/tjanster/skogsrojning",
});

export default function SkogsrojningPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd }} />
    <ServicePageTemplate
      title="Skogsröjning"
      h1="Skogsröjning i Luleå – framkomlig och ljus tomt"
      intro="Skogsröjning innebär att ta bort sly, buskar och underväxt som gör tomten svårframkomlig och mörk. Det är steget innan gallring — jag röjer bort allt som inte ska vara kvar så att du får en öppen och ljus mark."
      body={[
        "En igenväxt tomt samlar fukt, skymmer sikten och gör det svårt att ta sig fram. Skogsröjning tar bort sly, småträd och buskage med röjsåg och motorsåg. Resultatet är en framkomlig yta där du ser vad du har.",
        "Jag röjer villatomter, stugtomter, tomtmark inför bygge och skogspartier som växt igen. Materialet flisar jag på plats eller forslar bort beroende på mängd och önskemål.",
        "Skogsröjning kombineras ofta med gallring — jag röjer underväxten först och gallrar sedan de större träden. Det ger bäst resultat och håller nere kostnaden.",
        "RUT-avdrag gäller på arbetskostnaden — du betalar halva priset. Jag arbetar i Luleå, Boden, Gammelstad, Kalix, Råneå, Södra Sunderbyn och hela Norrbotten.",
      ]}
      images={[]}
      relatedServices={[
        { href: "/tjanster/gallring", label: "Gallring" },
        { href: "/tjanster/tradfallning", label: "Trädfällning" },
        { href: "/tjanster/stubbfrasning", label: "Stubbfräsning" },
        { href: "/rut-avdrag", label: "RUT-avdrag" },
      ]}
    />
    </>
  );
}
