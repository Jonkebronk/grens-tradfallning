import type { Metadata } from "next";
import { LocationPageTemplate } from "@/components/templates/LocationPage";

export const metadata: Metadata = {
  title: "Trädfällning i Luleå skärgård | Grens Trädfällning",
  description:
    "Trädfällning i Luleå skärgård. Jag åker ut till öarna för fällning och gallring på stugtomter. RUT-avdrag. Ring 072-200 44 13.",
  alternates: { canonical: "https://grenstradfallning.se/omraden/lulea-skargard" },
};

const services = [
  { href: "/tjanster/tradfallning", label: "Trädfällning" },
  { href: "/tjanster/gallring", label: "Gallring" },
  { href: "/tjanster/skogsrojning", label: "Skogsröjning" },
];

export default function LuleaSkargardPage() {
  return (
    <LocationPageTemplate
      ort="Luleå skärgård"
      h1="Trädfällning i Luleå skärgård"
      intro="Jag åker ut i Luleå skärgård för trädfällning och gallring. Stugtomter på öarna kräver lite mer planering — men resultatet är detsamma: säker fällning, noggrann städning och en tomt du trivs på."
      body={[
        "Skärgården har egna utmaningar: transport av utrustning, begränsad åtkomst och ibland terräng som gör det svårt att använda tunga maskiner. Jag löser logistiken och har den utrustning som behövs — motorsåg, vinsch och skyddsutrustning.",
        "En av mina kunder i skärgården skrev: 'Det blev jäkligt bra! Tack för att du kunde ta dig ut.' Det sammanfattar det ganska väl — jag tar mig dit och gör jobbet ordentligt.",
        "RUT-avdrag gäller även på fritidshus i skärgården. Kontakta mig för att diskutera ditt projekt — jag behöver veta vilken ö, hur många träd och ungefärlig storlek.",
      ]}
      services={services}
    />
  );
}
