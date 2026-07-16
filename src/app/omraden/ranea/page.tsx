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
      intro="Jag utför trädfällning och gallring i Råneå. Samhället ligger omgivet av tät barrskog och många villaägare behöver hjälp med träd som vuxit sig för stora eller skymmer ljuset."
      body={[
        "I Råneå finns ofta grova tallar nära bostäder som bör fällas innan de riskerar att falla vid storm. Jag bedömer trädet på plats och fäller det säkert — med vinsch om det lutar mot huset.",
        "Gallring av tomter i Råneå gör stor skillnad. Genom att ta bort de rätta träden får du tillbaka ljuset utan att förlora vindskyddet mot älven.",
        "RUT-avdrag gäller på arbetskostnaden. Stubbfräsning kan göras direkt efter fällningen.",
      ]}
      services={services}
    />
  );
}
