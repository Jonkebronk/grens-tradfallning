import type { Metadata } from "next";
import { LocationPageTemplate } from "@/components/templates/LocationPage";

export const metadata: Metadata = {
  title: "Trädfällning i Gammelstad | Grens Trädfällning",
  description:
    "Trädfällning och gallring i Gammelstad, Luleå. Precisionsfällning på villatomter, stubbfräsning. RUT-avdrag. Ring 072-200 44 13.",
  alternates: { canonical: "https://grenstradfallning.se/omraden/gammelstad" },
};

const services = [
  { href: "/tjanster/tradfallning", label: "Trädfällning" },
  { href: "/tjanster/gallring", label: "Gallring" },
  { href: "/tjanster/stubbfrasning", label: "Stubbfräsning" },
  { href: "/tjanster/skogsrojning", label: "Skogsröjning" },
];

export default function GammelstadPage() {
  return (
    <LocationPageTemplate
      ort="Gammelstad"
      h1="Trädfällning i Gammelstad"
      intro="Gammelstad har många äldre villatomter med uppväxta björkar och tallar som behöver gallras eller fällas. Jag utför trädfällning i Gammelstad med precision och omsorg om omgivningen."
      body={[
        "Tomterna i Gammelstad är ofta omgivna av lövträd som planterades när husen byggdes. Nu har de blivit för stora — de skymmer ljuset, lyfter plattor och rötterna tränger in i avlopp. Selektiv gallring löser problemet utan att ta bort all grönska.",
        "Jag hanterar även träd nära Gammelstads kyrka och det kulturskyddade området med extra försiktighet. Precision och respekt för omgivningen är grunden i varje jobb.",
        "RUT-avdrag gäller. Stubbfräsning kan göras direkt efter fällningen.",
      ]}
      services={services}
    />
  );
}
