import type { Metadata } from "next";
import { LocationPageTemplate } from "@/components/templates/LocationPage";

export const metadata: Metadata = {
  title: "Trädfällning i Persön | Grens Trädfällning",
  description:
    "Trädfällning och gallring i Persön utanför Luleå. Stubbfräsning, vinschfällning. RUT-avdrag. Ring 072-200 44 13.",
};

const services = [
  { href: "/tjanster/tradfallning", label: "Trädfällning" },
  { href: "/tjanster/gallring", label: "Gallring" },
  { href: "/tjanster/stubbfrasning", label: "Stubbfräsning" },
  { href: "/tjanster/skogsrojning", label: "Skogsröjning" },
];

export default function PersonPage() {
  return (
    <LocationPageTemplate
      ort="Persön"
      h1="Trädfällning i Persön"
      intro="Persön har en blandning av fritidshus och permanentboende med skogsmark intill. Jag utför trädfällning och gallring i Persön med samma precision som inne i Luleå."
      body={[
        "Fritidstomter i Persön har ofta vuxit igen med sly och unga träd som konkurrerar med de äldre stammarna. En ordentlig gallring ger tillbaka utsikten och ljuset utan att det känns kalhugget.",
        "Större träd nära husen kräver ibland vinsch för att styra fällriktningen. Jag har utrustningen och erfarenheten för att hantera det.",
        "RUT-avdrag gäller även på fritidshus — du betalar halva arbetskostnaden.",
      ]}
      services={services}
    />
  );
}
