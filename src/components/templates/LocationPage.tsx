import { Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { MobileBottomBar } from "@/components/shared/MobileBottomBar";
import { MessengerButton } from "@/components/shared/MessengerButton";
import { COMPANY } from "@/lib/constants";

type LocationPageProps = {
  ort: string;
  h1: string;
  intro: string;
  body: string[];
  services: { href: string; label: string }[];
};

export function LocationPageTemplate({
  ort,
  h1,
  intro,
  body,
  services,
}: LocationPageProps) {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20 pb-20 md:pb-0">
        <section className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <p className="text-sm font-semibold text-nature-600 uppercase tracking-wider mb-2">
                Trädfällning i {ort}
              </p>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-nature-900 leading-tight mb-6">
                {h1}
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                {intro}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-12">
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
                  href="/#kontakt"
                  className={buttonVariants({
                    size: "lg",
                    className:
                      "bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-5",
                  })}
                >
                  Begär offert
                </a>
              </div>

              {body.map((p, i) => (
                <p
                  key={i}
                  className="text-foreground/70 leading-relaxed mb-4"
                >
                  {p}
                </p>
              ))}
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-heading text-xl font-bold text-nature-900 mt-10 mb-4">
                Tjänster i {ort}
              </h2>
              <div className="flex flex-wrap gap-3">
                {services.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="px-4 py-2 bg-nature-50 border border-nature-200 rounded-xl text-sm font-medium text-nature-700 hover:bg-nature-100 transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
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
