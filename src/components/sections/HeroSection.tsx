"use client";

import { Phone, ArrowDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { trackEvent } from "@/components/shared/Analytics";
import { COMPANY } from "@/lib/constants";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="hem"
      className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.png"
          alt="Markus Gren fäller björk nära hus med full skyddsutrustning i Luleå"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-2xl">
          <ScrollReveal>
            <p className="text-sm font-semibold text-nature-600 uppercase tracking-wider mb-3">
              Trädfällning i Luleå &amp; Norrbotten
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-nature-900 leading-tight">
              {COMPANY.tagline}
            </h1>
            <p className="mt-6 text-lg text-foreground/70 leading-relaxed max-w-xl">
              Jag driver Grens Trädfällning och hjälper privatpersoner och
              företag med säker och noggrann trädfällning i Luleåområdet. Från
              första kontakt till sista gren.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={COMPANY.phoneHref}
                onClick={() => trackEvent("click", "phone", "hero")}
                className={buttonVariants({
                  size: "lg",
                  className:
                    "bg-nature-700 hover:bg-nature-800 text-white font-semibold text-base px-6 py-6",
                })}
              >
                <Phone className="h-5 w-5 mr-2" />
                Ring mig: {COMPANY.phone}
              </a>
              <a
                href="#kontakt"
                className={buttonVariants({
                  size: "lg",
                  className:
                    "bg-amber-600 hover:bg-amber-700 text-white font-semibold text-base px-6 py-6",
                })}
              >
                <ArrowDown className="h-5 w-5 mr-2" />
                Begär offert
              </a>
            </div>
          </ScrollReveal>

          {/* Trust badges */}
          <ScrollReveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                "RUT-avdrag 50%",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-nature-200 rounded-full text-sm font-medium text-nature-700"
                >
                  {badge}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
