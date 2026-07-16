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
      intro="Södra Sunderbyn ligger bara en kvart från Luleå centrum och har stora villakvarter med mogna tomter. Jag tar mig dit snabbt för trädfällning, gallring och stubbfräsning."
      body={[
        "Många hus i Södra Sunderbyn byggdes på 70- och 80-talet med tallar kvar på tomten. Nu är de 15-20 meter höga och skuggar hela trädgården. Selektiv gallring ger tillbaka ljuset utan att du förlorar vindskyddet — jag hjälper dig välja vilka som ska stå kvar.",
        "Tomterna ligger ofta nära grannar, vilket kräver precision vid fällning. Jag använder vinsch och kilning för att styra riktningen exakt. Har du en tall som lutar mot garaget? Det är just den sortens jobb jag gör varje vecka.",
        "RUT-avdrag gäller på arbetskostnaden — du betalar halva priset. Stubbfräsning kan göras direkt efter fällningen.",
      ]}
      services={services}
    />
  );
}
