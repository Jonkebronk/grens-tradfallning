import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Integritetspolicy | Grens Trädfällning",
  description:
    "Så hanterar Grens Trädfällning dina personuppgifter. Information om GDPR, dataskydd och dina rättigheter.",
};

export default function IntegritetspolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24 pb-20 md:pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl font-bold text-nature-900 mb-8">
            Integritetspolicy
          </h1>

          <div className="prose prose-nature max-w-none space-y-6 text-foreground/80 leading-relaxed">
            <p className="text-sm text-muted-foreground">
              Senast uppdaterad: 2026-07-15
            </p>

            <h2 className="font-heading text-xl font-semibold text-nature-900 mt-8">
              Personuppgiftsansvarig
            </h2>
            <p>
              Grens Trädfällning, Markus Gren
              <br />
              Telefon: 072-200 44 13
              <br />
              E-post: markus.gren90@gmail.com
            </p>

            <h2 className="font-heading text-xl font-semibold text-nature-900 mt-8">
              Vilka uppgifter jag samlar in
            </h2>
            <p>
              När du skickar en offertförfrågan via formuläret på hemsidan samlar
              jag in följande uppgifter:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Namn</li>
              <li>Telefonnummer</li>
              <li>E-postadress (om du anger den)</li>
              <li>Beskrivning av ditt projekt</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-nature-900 mt-8">
              Varför jag samlar in uppgifterna
            </h2>
            <p>
              Jag använder dina uppgifter enbart för att besvara din förfrågan
              och ge dig en offert. Uppgifterna delas inte med tredje part och
              används inte för marknadsföring.
            </p>

            <h2 className="font-heading text-xl font-semibold text-nature-900 mt-8">
              Laglig grund
            </h2>
            <p>
              Behandlingen sker med stöd av berättigat intresse (artikel 6.1f
              GDPR) — du kontaktar mig för att få en tjänst utförd och jag
              behöver uppgifterna för att kunna svara.
            </p>

            <h2 className="font-heading text-xl font-semibold text-nature-900 mt-8">
              Hur länge jag sparar uppgifterna
            </h2>
            <p>
              Dina uppgifter sparas så länge det behövs för att hantera din
              förfrågan, normalt högst 12 månader. Uppgifter kopplade till
              utförda uppdrag sparas enligt bokföringslagens krav (7 år).
            </p>

            <h2 className="font-heading text-xl font-semibold text-nature-900 mt-8">
              Analys av webbplatstrafik
            </h2>
            <p>
              Denna webbplats använder Plausible Analytics, en cookiefri
              analysplattform som inte samlar in personuppgifter. Ingen
              cookiebanner behövs eftersom inga cookies sätts.
            </p>

            <h2 className="font-heading text-xl font-semibold text-nature-900 mt-8">
              Dina rättigheter
            </h2>
            <p>Enligt GDPR har du rätt att:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Begära tillgång till dina personuppgifter</li>
              <li>Begära rättelse av felaktiga uppgifter</li>
              <li>Begära radering av dina uppgifter</li>
              <li>Invända mot behandlingen</li>
              <li>
                Lämna klagomål till Integritetsskyddsmyndigheten (IMY) om du
                anser att jag hanterar dina uppgifter felaktigt
              </li>
            </ul>
            <p>
              Kontakta mig på{" "}
              <a
                href="mailto:markus.gren90@gmail.com"
                className="text-nature-700 underline"
              >
                markus.gren90@gmail.com
              </a>{" "}
              för att utöva dina rättigheter.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
