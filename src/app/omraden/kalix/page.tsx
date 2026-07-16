import type { Metadata } from "next";
import { LocationPageTemplate } from "@/components/templates/LocationPage";

export const metadata: Metadata = {
  title: "Trädfällning i Kalix | Grens Trädfällning",
  description:
    "Trädfällning, gallring och stubbfräsning i Kalix. Erfaren arborist med RUT-avdrag. Ring 072-200 44 13.",
  alternates: { canonical: "https://grenstradfallning.se/omraden/kalix" },
};

const services = [
  { href: "/tjanster/tradfallning", label: "Trädfällning" },
  { href: "/tjanster/gallring", label: "Gallring" },
  { href: "/tjanster/skogsrojning", label: "Skogsröjning" },
  { href: "/tjanster/stubbfrasning", label: "Stubbfräsning" },
];

export default function KalixPage() {
  return (
    <LocationPageTemplate
      ort="Kalix"
      h1="Trädfällning i Kalix"
      intro="Jag åker till Kalix för trädfällning, gallring och skogsröjning. Kalix älvdal har kraftig skog och många fastigheter med träd som behöver tas ner eller gallras."
      body={[
        "Fastigheter längs Kalixälven har ofta grov björk och tall som växt sig nära husen. Jag fäller säkert även i trånga lägen — med vinsch när det behövs. Gallring av tomter ger mer ljus under de korta vinterdagarna.",
        "Stubbfräsning kan göras på samma besök så att tomten blir ren direkt. Jag tar med all utrustning och forslar bort riset.",
        "RUT-avdrag gäller på arbetskostnaden — du betalar halva priset. Kontakta mig för en kostnadsfri bedömning.",
      ]}
      services={services}
    />
  );
}
