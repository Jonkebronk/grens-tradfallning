import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePage";

export const metadata: Metadata = {
  title: "Stubbfräsning i Luleå | Grens Trädfällning",
  description:
    "Stubbfräsning i Luleå från 1 350 kr (efter RUT). Maskinell stubbfräsning med Laski-stubbfräs. Ren och plan tomt. Ring 072-200 44 13.",
  alternates: { canonical: "https://grenstradfallning.se/tjanster/stubbfrasning" },
  openGraph: {
    title: "Stubbfräsning i Luleå | Grens Trädfällning",
    description:
      "Stubbfräsning från 1 350 kr efter RUT. Ren tomt, maskinell fräsning i Luleå med omnejd.",
  },
};

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Stubbfräsning",
  description: "Maskinell stubbfräsning för en ren och plan tomt. Från 1 350 kr efter RUT-avdrag.",
  provider: { "@type": "LocalBusiness", name: "Grens Trädfällning" },
  areaServed: "Luleå",
  url: "https://grenstradfallning.se/tjanster/stubbfrasning",
  offers: { "@type": "Offer", price: "1350", priceCurrency: "SEK", description: "Första stubben efter RUT-avdrag" },
});

export default function StubbfrasningPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceJsonLd }} />
    <ServicePageTemplate
      title="Stubbfräsning"
      h1="Stubbfräsning i Luleå – ren och plan tomt"
      intro="En stubbe mitt i gräsmattan är i vägen och ser inte bra ut. Med maskinell stubbfräs tar jag bort stubben ner till under marknivå på under en timme. Efteråt kan du så gräs eller plantera direkt."
      price="Från 1 350 kr / stubbe (efter RUT)"
      priceBefore="2 700 kr före RUT-avdrag. Därefter 350 kr per extra stubbe."
      body={[
        "Jag använder en Laski-stubbfräs som maler ner stubben till 15–20 cm under marknivå. Fliset som bildas lämnar jag kvar som utfyllnad i hålet, eller forslar bort det om du vill.",
        "Stubbfräsning är betydligt billigare och snabbare än att gräva upp stubben med maskin. Ingen trädgård behöver köras sönder av en grävmaskin — stubbfräsen tar sig fram på gräsmattan utan att lämna spår.",
        "Priset beror på stubbens diameter och hur tillgänglig den är. Första stubben kostar 1 350 kr efter RUT-avdrag (2 700 kr före). Varje ytterligare stubbe på samma adress kostar 350 kr efter RUT.",
        "Jag utför stubbfräsning i Luleå, Boden, Gammelstad, Persön, Brändön och Luleå skärgård. Ring för offert — jag behöver veta antal stubbar och ungefärlig storlek.",
      ]}
      images={[
        {
          src: "/images/gallery/8-stubbfrasning-laski.jpg",
          alt: "Stubbfräsning med Laski-maskin i Luleå",
        },
        {
          src: "/images/gallery/7-motorsag-stubbe.jpg",
          alt: "Stubbe efter fällning – redo för stubbfräsning",
        },
      ]}
      relatedServices={[
        { href: "/tjanster/tradfallning", label: "Trädfällning" },
        { href: "/tjanster/gallring", label: "Gallring" },
        { href: "/rut-avdrag", label: "RUT-avdrag & priser" },
      ]}
    />
    </>
  );
}
