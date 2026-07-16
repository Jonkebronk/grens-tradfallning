import type { Metadata } from "next";
import { LocationPageTemplate } from "@/components/templates/LocationPage";

export const metadata: Metadata = {
  title: "Trädfällning i Södra Sunderbyn | Grens Trädfällning",
  description:
    "Trädfällning och gallring i Södra Sunderbyn. Stubbfräsning, vinschfällning av riskträd. RUT-avdrag. Ring 072-200 44 13.",
  alternates: { canonical: "https://grenstradfallning.se/omraden/sodra-sunderbyn" },
};

const services = [
  { href: "/tjanster/tradfallning", label: "Trädfällning" },
  { href: "/tjanster/gallring", label: "Gallring" },
  { href: "/tjanster/vinschfallning", label: "Vinschfällning" },
  { href: "/tjanster/stubbfrasning", label: "Stubbfräsning" },
];

export default function SodraSunderbynPage() {
  return (
    <LocationPageTemplate
      ort="Södra Sunderbyn"
      h1="Trädfällning i Södra Sunderbyn"
      intro="Södra Sunderbyn ligger strax söder om Luleå och har många villatomter med uppvuxen skog. Jag utför trädfällning, gallring och stubbfräsning i området."
      body={[
        "Villatomterna i Södra Sunderbyn har ofta tall och björk som planterades när husen byggdes och nu vuxit sig stora. Träd som står för nära husgrunden eller skuggar trädgården kan behöva fällas eller gallras.",
        "Jag har erfarenhet av trånga tomter där träd måste fällas med precision. Med vinsch styr jag riktningen så att trädet faller säkert även när det lutar fel.",
        "RUT-avdrag gäller på arbetskostnaden — du betalar halva priset. Stubbfräsning kan göras på samma besök.",
      ]}
      services={services}
    />
  );
}
