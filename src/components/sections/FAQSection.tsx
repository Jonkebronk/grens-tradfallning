"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const FAQ_ITEMS = [
  {
    q: "Vad kostar trädfällning i Luleå?",
    a: "Priset beror på trädets storlek, placering och svårighetsgrad. Stubbfräsning kostar från 1 350 kr för första stubben och 350 kr per extra stubbe efter RUT-avdrag. Kontakta mig för en kostnadsfri offert.",
  },
  {
    q: "Får man fälla träd på sin egen tomt i Luleå?",
    a: "I de flesta fall får du fälla träd på din egen tomt utan tillstånd. Undantag kan gälla inom detaljplanerat område eller om trädet är skyddat. Kontakta Luleå kommun om du är osäker.",
  },
  {
    q: "Vad ingår i RUT-avdraget för trädfällning?",
    a: "RUT-avdraget ger 50% skattereduktion på arbetskostnaden för trädfällning, stubbfräsning och gallring på din tomt. Avdraget gäller för privatpersoner och du får max 75 000 kr per person och år.",
  },
  {
    q: "Hur snabbt kan du komma för att fälla ett träd?",
    a: "Normalt kan jag boka in ett jobb inom 1–2 veckor. Vid akuta situationer som stormskador försöker jag komma snabbare. Ring 072-200 44 13 så löser vi det.",
  },
  {
    q: "Fäller du träd nära hus och byggnader?",
    a: "Ja, precisionsfällning nära hus är en av mina specialiteter. Jag använder vinsch och professionell utrustning för att styra fällriktningen och skydda det som ska bevaras.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Vanliga frågor"
            subtitle="Svar på det du kanske undrar innan du ringer."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-nature-200 rounded-xl px-5 data-[state=open]:bg-nature-50"
              >
                <AccordionTrigger className="text-left font-heading text-[15px] font-semibold text-nature-900 py-4 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
