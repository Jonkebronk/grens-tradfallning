import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePage";

export const metadata: Metadata = {
  title: "Gallring av tomt i Luleå | Grens Trädfällning",
  description:
    "Gallring av tomter i Luleå och Norrbotten. Öka ljusinsläppet och frigör kvällssolen. RUT-avdrag på arbetskostnaden. Ring 072-200 44 13.",
  alternates: { canonical: "https://grenstradfallning.se/tjanster/gallring" },
  openGraph: {
    title: "Gallring av tomt i Luleå | Grens Trädfällning",
    description: "Professionell gallring i Luleå. Mer ljus, friare tomt. RUT-avdrag.",
  },
};

export default function GallringPage() {
  return (
    <ServicePageTemplate
      title="Gallring"
      h1="Gallring av tomter i Luleå – mer ljus och bättre utsikt"
      intro="En tät trädridå kan göra tomten mörk och fuktig. Genom att gallra selektivt ökar ljusinsläppet, gräsmattan mår bättre och du frigör kvällssolen utan att förlora vindskyddet."
      body={[
        "Gallring handlar inte om att ta bort allt — det handlar om att välja rätt träd att spara. Jag bedömer tomten tillsammans med dig och tar bort de träd som skymmer mest, riskerar att falla eller konkurrerar med de finare stammarna.",
        "Typiska jobb är stugtomter i skärgården som växt igen, villatomter i Gammelstad där björkarna tagit över, och sommarstugor i Persön och Brändön där ägaren vill se vattnet igen.",
        "Riset flisar jag på plats eller forslar bort. Stammarna kapar jag i vedlängder om du vill behålla dem. Hela jobbet görs med professionell utrustning och skyddsutrustning.",
        "RUT-avdrag gäller på arbetskostnaden — du betalar halva priset. Jag arbetar i Luleå, Boden, Gammelstad, Persön, Brändön och Luleå skärgård.",
      ]}
      images={[
        {
          src: "/images/gallery/1-gallring-skog.jpg",
          alt: "Gallring i skogen i Luleå – full skyddsutrustning",
        },
        {
          src: "/images/gallery/6-fallt-trad.jpg",
          alt: "Gallring av tomt – fällt träd vid fastighet",
        },
      ]}
      relatedServices={[
        { href: "/tjanster/tradfallning", label: "Trädfällning" },
        { href: "/tjanster/stubbfrasning", label: "Stubbfräsning" },
        { href: "/rut-avdrag", label: "RUT-avdrag" },
      ]}
    />
  );
}
