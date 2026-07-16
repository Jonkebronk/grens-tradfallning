import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { MobileBottomBar } from "@/components/shared/MobileBottomBar";
import { MessengerButton } from "@/components/shared/MessengerButton";
import { COMPANY } from "@/lib/constants";

type ServicePageProps = {
  title: string;
  h1: string;
  intro: string;
  body: string[];
  price?: string;
  priceBefore?: string;
  images: { src: string; alt: string }[];
  relatedServices: { href: string; label: string }[];
  faq?: { q: string; a: string }[];
};

export function ServicePageTemplate({
  title,
  h1,
  intro,
  body,
  price,
  priceBefore,
  images,
  relatedServices,
}: ServicePageProps) {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20 pb-20 md:pb-0">
        {/* Hero */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <ScrollReveal>
                <p className="text-sm font-semibold text-nature-600 uppercase tracking-wider mb-2">
                  {title} i Luleå &amp; Norrbotten
                </p>
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-nature-900 leading-tight mb-6">
                  {h1}
                </h1>
                <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                  {intro}
                </p>

                {price && (
                  <div className="mb-6 px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl inline-block">
                    <p className="text-lg font-semibold text-amber-700">
                      {price}
                    </p>
                    {priceBefore && (
                      <p className="text-sm text-amber-600/70">{priceBefore}</p>
                    )}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={COMPANY.phoneHref}
                    className={buttonVariants({
                      size: "lg",
                      className:
                        "bg-nature-700 hover:bg-nature-800 text-white font-semibold px-6 py-5",
                    })}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Ring mig: {COMPANY.phone}
                  </a>
                  <a
                    href="#offert"
                    className={buttonVariants({
                      size: "lg",
                      className:
                        "bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-5",
                    })}
                  >
                    Begär offert
                  </a>
                </div>
              </ScrollReveal>

              {/* Main image */}
              {images[0] && (
                <ScrollReveal delay={0.1}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={images[0].src}
                      alt={images[0].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </section>

        {/* Body content */}
        <section className="py-12 bg-nature-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              {body.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-foreground/70 leading-relaxed mb-4 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </ScrollReveal>
          </div>
        </section>

        {/* Gallery on service page */}
        {images.length > 1 && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollReveal>
                <h2 className="font-heading text-2xl font-bold text-nature-900 mb-6">
                  Referensjobb
                </h2>
              </ScrollReveal>
              <ScrollReveal stagger={0.06}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {images.slice(1).map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-square rounded-xl overflow-hidden shadow-sm"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* Related services */}
        <section className="py-12 bg-nature-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="font-heading text-xl font-bold text-nature-900 mb-4">
                Andra tjänster
              </h2>
              <div className="flex flex-wrap gap-3">
                {relatedServices.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-nature-200 rounded-xl text-sm font-medium text-nature-700 hover:bg-nature-100 transition-colors"
                  >
                    {s.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
              <h2 className="font-heading text-xl font-bold text-nature-900 mt-8 mb-4">
                Jag arbetar i
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  { href: "/omraden/lulea", label: "Luleå" },
                  { href: "/omraden/boden", label: "Boden" },
                  { href: "/omraden/gammelstad", label: "Gammelstad" },
                  { href: "/omraden/person", label: "Persön" },
                  { href: "/omraden/brandon", label: "Brändön" },
                  { href: "/omraden/lulea-skargard", label: "Luleå skärgård" },
                  { href: "/omraden/kalix", label: "Kalix" },
                  { href: "/omraden/ranea", label: "Råneå" },
                  { href: "/omraden/sodra-sunderbyn", label: "Södra Sunderbyn" },
                ].map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-nature-200 rounded-xl text-sm font-medium text-nature-700 hover:bg-nature-100 transition-colors"
                  >
                    {s.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section id="offert" className="py-16">
          <div className="max-w-xl mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="font-heading text-2xl font-bold text-nature-900 mb-3">
                Behöver du hjälp med {title.toLowerCase()}?
              </h2>
              <p className="text-foreground/70 mb-6">
                Ring mig direkt eller skicka en förfrågan så återkommer jag med
                en offert.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={COMPANY.phoneHref}
                  className={buttonVariants({
                    size: "lg",
                    className:
                      "bg-nature-700 hover:bg-nature-800 text-white font-semibold px-8 py-5",
                  })}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  {COMPANY.phone}
                </a>
                <a
                  href="/#kontakt"
                  className={buttonVariants({
                    size: "lg",
                    className:
                      "bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-5",
                  })}
                >
                  Skicka offertförfrågan
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <MessengerButton />
      <MobileBottomBar />
    </>
  );
}
