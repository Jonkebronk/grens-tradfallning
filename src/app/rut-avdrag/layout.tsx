import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "https://grenstradfallning.se/rut-avdrag" },
  title: "RUT-avdrag på trädfällning | Grens Trädfällning",
  description:
    "RUT-avdrag ger 50% skattereduktion på trädfällning, gallring och stubbfräsning. Räkna ut ditt pris. Max 75 000 kr/person/år. Ring 072-200 44 13.",
  openGraph: {
    title: "RUT-avdrag på trädfällning | Grens Trädfällning",
    description:
      "Halva priset med RUT-avdrag. Räkna ut vad trädfällningen kostar efter avdrag.",
  },
};

export default function RutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
