import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePage";

export const metadata: Metadata = {
  title: "Trädfällning i Luleå | Grens Trädfällning",
  description:
    "Professionell trädfällning och precisionsfällning i Luleå med omnejd. Jag hanterar grova tallar, björkar och träd nära hus. RUT-avdrag. Ring 072-200 44 13.",
  openGraph: {
    title: "Trädfällning i Luleå | Grens Trädfällning",
    description:
      "Professionell trädfällning i Luleå. Precisionsfällning nära hus, grova träd, flerstammiga träd. RUT-avdrag.",
  },
};

export default function TradfallningPage() {
  return (
    <ServicePageTemplate
      title="Trädfällning"
      h1="Trädfällning i Luleå med RUT-avdrag"
      intro="Jag fäller träd säkert och kontrollerat i Luleå med omnejd. Oavsett om det handlar om en grov tall som står för nära huset, en björk som skymmer kvällssolen eller ett riskträd med röta — jag tar mig an jobbet med rätt utrustning och erfarenhet."
      body={[
        "Precisionsfällning nära byggnader är en av mina specialiteter. Med vinsch och professionella motorsågar från Husqvarna och Stihl styr jag fällriktningen exakt för att skydda hus, staket och trädgård.",
        "Jag hanterar alla typer av träd: grov tall upp till 70 cm i diameter, flerstammiga björkar, asp och träd med röta. Varje jobb börjar med en bedömning av trädet och omgivningen — sedan väljer jag rätt metod.",
        "Efter fällningen kapar jag stammen i hanterbara längder. Vill du behålla veden ordnar jag det. Ris och grenar kan jag forsla bort eller flisa på plats.",
        "Jag arbetar i Luleå, Boden, Gammelstad, Persön, Brändön och Luleå skärgård. RUT-avdrag gäller på arbetskostnaden — du betalar halva priset.",
      ]}
      images={[
        {
          src: "/images/hero.png",
          alt: "Trädfällning nära hus i Luleå – Markus Gren med motorsåg",
        },
        {
          src: "/images/gallery/2-falld-bjork.png",
          alt: "Fälld björk på villatomt i Luleå",
        },
        {
          src: "/images/gallery/3-uppkapad-stam.png",
          alt: "Noggrant uppkapad björkstam efter trädfällning",
        },
      ]}
      relatedServices={[
        { href: "/tjanster/gallring", label: "Gallring" },
        { href: "/tjanster/vinschfallning", label: "Vinschfällning" },
        { href: "/tjanster/stubbfrasning", label: "Stubbfräsning" },
        { href: "/rut-avdrag", label: "RUT-avdrag" },
      ]}
    />
  );
}
