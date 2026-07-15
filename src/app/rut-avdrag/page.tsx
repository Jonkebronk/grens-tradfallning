"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/shared/MobileBottomBar";
import { MessengerButton } from "@/components/shared/MessengerButton";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

export default function RutAvdragPage() {
  const [amount, setAmount] = useState("");
  const parsed = parseFloat(amount) || 0;
  const afterRut = Math.round(parsed * 0.5);

  return (
    <>
      <Header />
      <main className="flex-1 pt-24 pb-20 md:pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold text-nature-600 uppercase tracking-wider mb-2">
              RUT-avdrag på trädfällning
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-nature-900 mb-6">
              RUT-avdrag på trädfällning – du betalar halva priset
            </h1>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              Som privatperson får du 50% skattereduktion på arbetskostnaden när
              jag fäller träd, gallrar eller stubbfräser på din tomt. Det gäller
              även fritidshus.
            </p>
          </ScrollReveal>

          {/* Calculator */}
          <ScrollReveal delay={0.1}>
            <div className="bg-nature-50 border border-nature-200 rounded-2xl p-6 md:p-8 mb-10">
              <h2 className="font-heading text-xl font-bold text-nature-900 mb-4">
                Räkna ut ditt pris efter RUT
              </h2>
              <div className="max-w-xs">
                <Label htmlFor="amount" className="text-sm font-medium">
                  Arbetskostnad (kr)
                </Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="T.ex. 5000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="mt-1.5 text-lg"
                />
              </div>
              {parsed > 0 && (
                <div className="mt-5 flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-nature-700">
                    {afterRut.toLocaleString("sv-SE")} kr
                  </span>
                  <span className="text-foreground/50 line-through">
                    {parsed.toLocaleString("sv-SE")} kr
                  </span>
                  <span className="text-sm text-nature-600 font-medium">
                    efter RUT-avdrag
                  </span>
                </div>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="space-y-6 text-foreground/70 leading-relaxed">
              <h2 className="font-heading text-xl font-bold text-nature-900">
                Så fungerar det
              </h2>
              <p>
                RUT-avdraget ger dig 50% skattereduktion på arbetskostnaden.
                Maxbeloppet är 75 000 kr per person och år (ROT och RUT
                sammanlagt, varav max 50 000 kr ROT). Du behöver inte göra
                något extra — jag drar av beloppet direkt på fakturan och söker
                ersättning hos Skatteverket.
              </p>

              <h2 className="font-heading text-xl font-bold text-nature-900">
                Vad som gäller
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Gäller:</strong> Trädfällning, beskärning,
                  stubbfräsning, gallring — på tomt i anslutning till bostad
                </li>
                <li>
                  <strong>Gäller inte:</strong> Material, maskinhyra,
                  resekostnader, nyplantering
                </li>
                <li>
                  <strong>Krav:</strong> Företaget godkänt för F-skatt. Kunden
                  betalar elektroniskt.
                </li>
                <li>
                  <strong>Fritidshus:</strong> Ja, samma regler som permanentbostad
                </li>
              </ul>

              <h2 className="font-heading text-xl font-bold text-nature-900">
                Prisexempel
              </h2>
              <div className="bg-white rounded-xl border border-nature-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-nature-50">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold">Tjänst</th>
                      <th className="text-right px-4 py-3 font-semibold">Före RUT</th>
                      <th className="text-right px-4 py-3 font-semibold text-nature-700">Efter RUT</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-nature-100">
                    <tr>
                      <td className="px-4 py-3">Stubbfräsning (1 stubbe)</td>
                      <td className="text-right px-4 py-3 text-foreground/50">2 700 kr</td>
                      <td className="text-right px-4 py-3 font-semibold text-nature-700">1 350 kr</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Extra stubbe</td>
                      <td className="text-right px-4 py-3 text-foreground/50">700 kr</td>
                      <td className="text-right px-4 py-3 font-semibold text-nature-700">350 kr</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-muted-foreground">
                Nyansen: trädfällning inför byggnation kan klassas som ROT eller
                falla utanför helt. Det är arbetets karaktär som avgör, inte
                kundens önskan. Kontakta mig så reder vi ut vad som gäller i
                ditt fall.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-10 text-center">
              <a
                href={COMPANY.phoneHref}
                className={buttonVariants({
                  size: "lg",
                  className:
                    "bg-nature-700 hover:bg-nature-800 text-white font-semibold px-8 py-5",
                })}
              >
                <Phone className="h-5 w-5 mr-2" />
                Ring för offert: {COMPANY.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
      <MessengerButton />
      <MobileBottomBar />
    </>
  );
}
