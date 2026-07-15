import type { Metadata } from "next";
import { LocationPageTemplate } from "@/components/templates/LocationPage";

export const metadata: Metadata = {
  title: "Trädfällning i Boden | Grens Trädfällning",
  description:
    "Trädfällning och stubbfräsning i Boden. Vinschfällning av riskträd, gallring av tomter. RUT-avdrag. Ring 072-200 44 13.",
};

const services = [
  { href: "/tjanster/tradfallning", label: "Trädfällning" },
  { href: "/tjanster/gallring", label: "Gallring" },
  { href: "/tjanster/vinschfallning", label: "Vinschfällning" },
  { href: "/tjanster/stubbfrasning", label: "Stubbfräsning" },
];

export default function BodenPage() {
  return (
    <LocationPageTemplate
      ort="Boden"
      h1="Trädfällning i Boden"
      intro="Jag åker regelbundet till Boden för trädfällning och gallring. Boden har mycket skog nära bebyggelsen och jag har erfarenhet av de utmaningar som hör till — lutande träd, trång åtkomst och grova stammar."
      body={[
        "Villatomter i Boden har ofta tallskog som växt sig tät under årtiondena. Gallring ger mer ljus och minskar risken för vindfall. Jag har bland annat vinschat ner lutande björkar i bostadsområden i Boden där fritt fall inte var möjligt.",
        "Stubbfräsning erbjuds på samma besök om du vill bli av med stubben direkt. Det sparar en resa och håller nere kostnaden.",
        "RUT-avdrag gäller på arbetskostnaden även i Boden — du betalar halva priset.",
      ]}
      services={services}
    />
  );
}
