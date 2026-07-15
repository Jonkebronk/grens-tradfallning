"use client";

import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section id="omdomen" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Vad mina kunder säger"
            subtitle="Jag sätter en ära i att leverera kvalitet varje gång."
          />
        </ScrollReveal>

        <ScrollReveal stagger={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {TESTIMONIALS.map((testimonial, i) => (
              <Card
                key={i}
                className="border-none shadow-sm bg-nature-50 relative"
              >
                <CardContent className="pt-8 pb-6 px-6">
                  <Quote className="absolute top-4 left-5 h-6 w-6 text-nature-200" />

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, s) => (
                      <Star
                        key={s}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <blockquote className="text-foreground/80 leading-relaxed mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-nature-800">
                      {testimonial.author}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {testimonial.source}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
