"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/shared/InstagramIcon";
import { FacebookIcon } from "@/components/shared/FacebookIcon";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { COMPANY, SERVICE_AREAS } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="kontakt" className="py-20 md:py-28 bg-nature-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Kontakta mig"
            subtitle="Berätta om ditt projekt så återkommer jag med en offert."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <ScrollReveal className="lg:col-span-3">
            <ContactForm />
          </ScrollReveal>

          {/* Contact info */}
          <ScrollReveal delay={0.15} className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-lg font-semibold text-nature-900 mb-4">
                  Kontaktuppgifter
                </h3>
                <div className="space-y-3">
                  <a
                    href={COMPANY.phoneHref}
                    className="flex items-center gap-3 text-foreground/70 hover:text-nature-700 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-nature-600 shrink-0" />
                    <span className="font-semibold">{COMPANY.phone}</span>
                  </a>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-center gap-3 text-foreground/70 hover:text-nature-700 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-nature-600 shrink-0" />
                    {COMPANY.email}
                  </a>
                  <a
                    href={COMPANY.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground/70 hover:text-nature-700 transition-colors"
                  >
                    <InstagramIcon className="h-5 w-5 text-nature-600 shrink-0" />
                    @{COMPANY.instagram}
                  </a>
                  <a
                    href={COMPANY.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground/70 hover:text-nature-700 transition-colors"
                  >
                    <FacebookIcon className="h-5 w-5 text-nature-600 shrink-0" />
                    Facebook
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold text-nature-900 mb-3">
                  Verksamhetsområde
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREAS.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-nature-200 rounded-lg text-sm text-nature-700"
                    >
                      <MapPin className="h-3.5 w-3.5" />
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
