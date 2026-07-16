import type { Metadata } from "next";
import { LocationPageTemplate } from "@/components/templates/LocationPage";

export const metadata: Metadata = {
  title: "Trädfällning i Råneå | Grens Trädfällning",
  description:
    "Trädfällning och gallring i Råneå. Vinschfällning av riskträd, stubbfräsning. RUT-avdrag. Ring 072-200 44 13.",
  alternates: { canonical: "https://grenstradfallning.se/omraden/ranea" },
};

const services = [
  { href: "/tjanster/tradfallning", label: "Trädfällning" },
  { href: "/tjanster/gallring", label: "Gallring" },
  { href: "/tjanster/vinschfallning", label: "Vinschfällning" },
  { href: "/tjanster/stubbfrasning", label: "Stubbfräsning" },
];

export default function RaneaPage() {
  return (
    <LocationPageTemplate
      ort="Råneå"
      h1="Trädfällning i Råneå"
      intro="Råneå ligger längs E10 mellan Luleå och Boden, omgivet av tät skog. Jag åker dit regelbundet för trädfällning och gallring — det är bara tre mil från Luleå."
      body={[
        "Villaområdena i Råneå har typisk norrbottnisk tomtskog — tall och gran som stod där när husen byggdes och nu vuxit sig 20 meter höga. Stammar nära husgrunden behöver ibland vinschas ner för att undvika skador på tak och fasad.",
        "Råneå älvdal ger fina tomtlägen men också fuktigt klimat som gynnar snabb tillväxt. En ordentlig gallring varannat-vart tredje år håller tomten ljus och framkomlig. Jag har gjort flera jobb i centrala Råneå och utmed älven.",
        "RUT-avdrag gäller på arbetskostnaden — du betalar halva priset. Stubbfräsning kan göras på samma besök.",
      ]}
      services={services}
    />
  );
}
