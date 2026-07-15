"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const equipment = [
  "Husqvarna motorsågar",
  "Stihl motorsågar",
  "Laski-vinsch",
  "25-tums svärd",
  "Stubbfräs",
  "Full skyddsutrustning",
];

export function AboutSection() {
  return (
    <section id="om-oss" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading title="Om oss" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <ScrollReveal>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/markus.png"
                alt="Markus Gren – ägare av Grens Trädfällning"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={0.1}>
            <div>
              <h3 className="font-heading text-2xl font-bold text-nature-900 mb-4">
                Markus Gren
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Markus driver Grens Trädfällning vid sidan av ett heltidsjobb
                och hjälper privatpersoner och företag med säker och noggrann
                trädfällning i Luleåområdet. Fokus ligger på personlig och
                pålitlig service, från första kontakt till sista gren.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Vi åker även ut i skärgården och till mindre orter i Norrbotten.
                Oavsett om det gäller en grov tall vid huset eller en hel
                gallring på stugtomten så tar vi oss an jobbet med
                professionell utrustning och erfarenhet.
              </p>

              <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-nature-600 mb-3">
                Utrustning
              </h4>
              <div className="flex flex-wrap gap-2">
                {equipment.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-nature-50 text-nature-700 text-sm font-medium rounded-lg border border-nature-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
