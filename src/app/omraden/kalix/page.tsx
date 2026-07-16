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
      intro="Jag åker till Kalix för trädfällning, gallring och skogsröjning. Resan från Luleå tar drygt en timme och jag tar med all utrustning — motorsåg, vinsch och stubbfräs."
      body={[
        "Kalixdalen har grov barrskog och villatomter där tallarna ofta står tätt intill husen. Längs älven växer björkarna sig kraftiga och kan bli riskträd vid höststormarna. Jag har fällt grova tallar i bostadsområden i Kalix där vinsch var enda sättet att styra fällriktningen.",
        "Många har också fritidshus uppåt älvdalen med tomter som växt igen. En ordentlig röjning och gallring gör stor skillnad — du får tillbaka utsikten mot älven och ljuset i stugan.",
        "RUT-avdrag gäller på arbetskostnaden — du betalar halva priset. Stubbfräsning kan göras på samma besök.",
      ]}
      services={services}
    />
  );
}
