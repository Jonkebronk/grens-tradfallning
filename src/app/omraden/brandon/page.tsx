import type { Metadata } from "next";
import { LocationPageTemplate } from "@/components/templates/LocationPage";

export const metadata: Metadata = {
  title: "Trädfällning i Brändön | Grens Trädfällning",
  description:
    "Trädfällning och gallring i Brändön, Luleå. Stugtomter, fritidshus. RUT-avdrag på arbetskostnaden. Ring 072-200 44 13.",
};

const services = [
  { href: "/tjanster/tradfallning", label: "Trädfällning" },
  { href: "/tjanster/gallring", label: "Gallring" },
  { href: "/tjanster/stubbfrasning", label: "Stubbfräsning" },
];

export default function BrandonPage() {
  return (
    <LocationPageTemplate
      ort="Brändön"
      h1="Trädfällning i Brändön"
      intro="Brändön ligger vackert vid kusten men stugtomterna kan snabbt växa igen. Jag utför trädfällning och gallring i Brändön så att du får tillbaka havsutsikten och kvällssolen."
      body={[
        "Kustvinden gör att träd i Brändön ofta växer snett eller blir vindpinade. Det gör dem svårare att fälla säkert — vinsch behövs ibland för att styra riktningen. Jag har erfarenhet av just den typen av jobb.",
        "Många fritidshusägare i Brändön vill gallra för att öppna upp tomten utan att förlora vindskyddet. Jag hjälper dig välja rätt träd att spara och rätt att ta bort.",
        "RUT-avdrag gäller på fritidshus. Stubbfräsning kan göras samma dag.",
      ]}
      services={services}
    />
  );
}
