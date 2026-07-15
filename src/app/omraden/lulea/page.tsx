import type { Metadata } from "next";
import { LocationPageTemplate } from "@/components/templates/LocationPage";

export const metadata: Metadata = {
  title: "Trädfällning i Luleå | Grens Trädfällning",
  description:
    "Trädfällning, gallring och stubbfräsning i Luleå. Precisionsfällning nära hus, RUT-avdrag. Ring 072-200 44 13 för offert.",
};

const services = [
  { href: "/tjanster/tradfallning", label: "Trädfällning" },
  { href: "/tjanster/gallring", label: "Gallring" },
  { href: "/tjanster/vinschfallning", label: "Vinschfällning" },
  { href: "/tjanster/stubbfrasning", label: "Stubbfräsning" },
];

export default function LuleaPage() {
  return (
    <LocationPageTemplate
      ort="Luleå"
      h1="Trädfällning i Luleå med RUT-avdrag"
      intro="Jag utför trädfällning, gallring och stubbfräsning i hela Luleå kommun. Från villaområden i centrum till stugtomter utmed kusten."
      body={[
        "Luleå har en blandning av villakvarter med uppväxta björkar och tallar, radhusområden med tät vegetation och fritidshus utmed kusten. Många tomter har träd som planterades för 40–50 år sedan och nu blivit för stora, skymmer ljuset eller riskerar att falla vid storm.",
        "Jag arbetar med precisionsfällning nära hus — med vinsch när det behövs — och kan hantera grova tallar och flerstammiga björkar. Efter fällningen erbjuder jag stubbfräsning för en ren och plan tomt.",
        "RUT-avdrag gäller på arbetskostnaden. Du betalar halva priset och jag sköter pappersarbetet mot Skatteverket.",
      ]}
      services={services}
    />
  );
}
