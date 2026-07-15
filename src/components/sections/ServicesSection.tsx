"use client";

import { TreePine, Trees, Cable, CircleDot, Sun, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  TreePine,
  Trees,
  Cable,
  CircleDot,
} as const;

const sellingPoints = [
  { icon: Sun, text: "Ökat ljusinsläpp och frigjord kvällssol på din tomt" },
  {
    icon: Shield,
    text: "Precision runt byggnader – vi bevarar det som ska stå kvar",
  },
  {
    icon: TreePine,
    text: "Vana vid stora och komplicerade träd – grov tall, björk, asp och flerstammiga träd",
  },
];

export function ServicesSection() {
  return (
    <section id="tjanster" className="py-20 md:py-28 bg-nature-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Våra tjänster"
            subtitle="Vi erbjuder professionell trädfällning i Luleå med omnejd – allt från enstaka träd till större gallringar."
          />
        </ScrollReveal>

        {/* Service cards */}
        <ScrollReveal stagger={0.08}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Card
                  key={service.id}
                  className="border-none shadow-sm hover:shadow-md transition-shadow bg-white"
                >
                  <CardContent className="pt-6 pb-6 px-6">
                    <div className="w-12 h-12 rounded-xl bg-nature-100 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-nature-700" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-nature-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    {"priceExample" in service && service.priceExample && (
                      <div className="mt-4 px-3 py-2 bg-amber-50 border border-amber-200 rounded-lg">
                        <p className="text-sm font-semibold text-amber-700">
                          {service.priceExample}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Selling points */}
        <ScrollReveal delay={0.2}>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {sellingPoints.map((point) => (
              <div key={point.text} className="flex items-start gap-3">
                <point.icon className="h-5 w-5 text-nature-600 mt-0.5 shrink-0" />
                <p className="text-sm text-foreground/70">{point.text}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
