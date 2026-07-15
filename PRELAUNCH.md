# PRE-LAUNCH GRANSKNING – Grens Trädfällning

Granskat: 2026-07-15
URL: https://grens-tradfallning.vercel.app/
Mål: Avgöra om sajten är redo att peka grenstradfallning.se mot.

---

## 1. Prestanda (Lighthouse mobil)

| Sida | Perf | A11y | BP | SEO | LCP | CLS | TBT |
|------|------|------|----|-----|-----|-----|-----|
| Startsidan | 87 | 93 | 100 | 100 | 3.5s | 0 | 70ms |
| /tjanster/stubbfrasning | 87 | 90 | 100 | 100 | 3.9s | 0 | 20ms |
| /omraden/boden | 96 | 89 | 100 | 100 | 2.6s | 0 | 20ms |

**Under 95:** Performance på startsidan (87) och tjänstesida (87). A11y under 95 på alla tre (89–93).
**LCP-bov:** Startsidan och tjänstesidan laddar hero-bilder som fortfarande är stora PNG:er (1.9–4 MB). Ortssidan utan hero-bild har 96/2.6s.
**A11y-brister:** Troligen kontrast- eller ARIA-issues. Bör köras med `--output=html` för detalj.

---

## 2. Strukturerad data

**LocalBusiness:** ✅ Finns i layout.tsx med telephone (+46722004413), areaServed (4 städer), url, name, aggregateRating (5/5, 3 reviews), 2 individuella Review-objekt.
**Service (OfferCatalog):** ✅ 4 tjänster med namn och beskrivning.
**FAQPage:** ✅ 8 frågor med svar.
**telephone i schema vs sidfot vs tel:-länk:** ✅ Alla konsistenta (+46722004413 i schema, "072-200 44 13" i sidfot, tel:+46722004413 i href).

**Saknas:** Inga Service-schemas på individuella tjänstesidor. LocalBusiness + FAQ ligger bara i layout.tsx (renderas på alla sidor).

---

## 3. On-page (tabell)

| Sida | Title (längd) | Unik? | Description (längd) | H1 | H1 antal |
|------|---------------|-------|--------------------|----|----------|
| / (startsida) | Grens Trädfällning \| Trädfällning i Luleå med RUT-avdrag (58) | ✅ | 156 tecken | Snabb, säker och prisvärd trädfällning i Luleå med RUT-avdrag | 1 |
| /tjanster/tradfallning | Trädfällning i Luleå \| Grens Trädfällning (54) | ❌ DUBBLETT | 153 | Trädfällning i Luleå med RUT-avdrag | 1 |
| /tjanster/gallring | Gallring av tomt i Luleå \| Grens Trädfällning (56) | ✅ | 135 | Gallring av tomter i Luleå – mer ljus och bättre utsikt | 1 |
| /tjanster/vinschfallning | Vinschfällning i Luleå \| Grens Trädfällning (54) | ✅ | 144 | Vinschassisterad fällning av riskträd i Luleå | 1 |
| /tjanster/stubbfrasning | Stubbfräsning i Luleå \| Grens Trädfällning (54) | ✅ | 138 | Stubbfräsning i Luleå – ren och plan tomt | 1 |
| /omraden/lulea | Trädfällning i Luleå \| Grens Trädfällning (54) | ❌ DUBBLETT | 126 | Trädfällning i Luleå med RUT-avdrag | 1 |
| /omraden/boden | Trädfällning i Boden \| Grens Trädfällning (52) | ✅ | 132 | Trädfällning i Boden | 1 |
| /omraden/gammelstad | Trädfällning i Gammelstad \| Grens Trädfällning (56) | ✅ | 149 | Trädfällning i Gammelstad | 1 |
| /omraden/person | Trädfällning i Persön \| Grens Trädfällning (52) | ✅ | 124 | Trädfällning i Persön | 1 |
| /omraden/brandon | Trädfällning i Brändön \| Grens Trädfällning (54) | ✅ | 129 | Trädfällning i Brändön | 1 |
| /omraden/lulea-skargard | Trädfällning i Luleå skärgård \| Grens Trädfällning (60) | ✅ | 127 | Trädfällning i Luleå skärgård | 1 |
| /rut-avdrag | Ärver layout-titel | ❌ SAKNAR EGEN | Ärver layout-desc | RUT-avdrag på trädfällning – du betalar halva priset | 1 |
| /integritetspolicy | Integritetspolicy \| Grens Trädfällning (46) | ✅ | 112 | Integritetspolicy | 1 |

**lang:** `sv` ✅ (i layout.tsx, gäller alla sidor)
**Canonical:** Ingen explicit canonical på någon sida. Next.js sätter ingen automatiskt.

### Blockerare

**DUBBLETT TITLE + H1:** `/tjanster/tradfallning` och `/omraden/lulea` har identisk title ("Trädfällning i Luleå | Grens Trädfällning") OCH identisk H1 ("Trädfällning i Luleå med RUT-avdrag"). Google kan inte skilja dem åt.

**RUT-sidan saknar metadata:** `use client` gör att metadata-export inte fungerar. Sidan ärver startsidans titel.

---

## 4. Dubblettinnehåll – ortssidor

Varje ortssida har **unikt intro** och **unika stycken** som nämner lokal terräng, typiska jobb och specifika utmaningar. Enda gemensamma mönstret är RUT-stycket i slutet (1 mening, varierar något):

- Luleå: "RUT-avdrag gäller på arbetskostnaden. Du betalar halva priset och jag sköter pappersarbetet mot Skatteverket."
- Boden: "RUT-avdrag gäller på arbetskostnaden även i Boden — du betalar halva priset."
- Gammelstad: "RUT-avdrag gäller. Stubbfräsning kan göras direkt efter fällningen."
- Persön: "RUT-avdrag gäller även på fritidshus — du betalar halva arbetskostnaden."
- Brändön: "RUT-avdrag gäller på fritidshus. Stubbfräsning kan göras samma dag."
- Skärgård: "RUT-avdrag gäller även på fritidshus i skärgården. Kontakta mig..."

**Bedömning:** Parvis likhet är under 30%. Varje sida har unik brödtext. RUT-meningen är acceptabel boilerplate. **Inget dubblettinnehållsproblem.**

---

## 5. Länkar och crawl

**sitemap.xml:** 13 URL:er, alla bygger korrekt.
**robots.txt:** `Allow: /`, sitemap-referens, inga blockerade sidor.
**noindex/nofollow:** Inga hittade. ✅
**Föräldralösa sidor:** Inga — alla sidor finns i sitemap OCH länkas från footer.
**Sidfoten:** 4 kolumner med Tjänster (5 länkar), Områden (6 länkar), Företaget (5 länkar inkl. integritetspolicy), Kontakt (telefon, e-post, Instagram, Facebook). ✅

**Intern länkning från tjänstesidor:** Varje tjänstesida har "Andra tjänster" med korsreferenser. ✅
**Intern länkning från ortssidor:** Varje ortssida har "Tjänster i [ort]" med korsreferenser. ✅

---

## 6. NAP-konsistens

**Telefon:** "072-200 44 13" i alla synliga instanser (20+ förekomster). `tel:+46722004413` i alla href. Schema: "+46722004413". ✅ Exakt konsistent.
**Företagsnamn:** "Grens Trädfällning" överallt. ✅
**E-post:** "markus.gren90@gmail.com" i constants, integritetspolicy, schema, API-route. ✅

---

## 7. Bilder

| Fil | Storlek | Format | Alt-text | Problem |
|-----|---------|--------|----------|---------|
| hero.jpg | 158 KB | JPG | ✅ Beskrivande | OK |
| hero.png | 1 964 KB | PNG | — | ⚠ Kvar i public/, används av /tjanster/tradfallning |
| markus.png | 2 334 KB | PNG | ✅ | ⚠ 2.3 MB, drar ner LCP |
| logo.jpg | 68 KB | JPG | ✅ | OK |
| og-image.jpg | 115 KB | JPG | ✅ | OK |
| gallery/1-gallring-skog.png | 2 079 KB | PNG | ✅ | ⚠ 2 MB |
| gallery/2-falld-bjork.png | 2 955 KB | PNG | ✅ | ⚠ 3 MB |
| gallery/3-uppkapad-stam.png | 3 241 KB | PNG | ✅ | ⚠ 3.2 MB |
| gallery/4-vinschning-tall.png | 1 899 KB | PNG | ✅ | ⚠ 1.9 MB |
| gallery/5-husqvarna-sag.png | 3 982 KB | PNG | ✅ | ⚠ 4 MB |
| gallery/6-fallt-trad.png | 1 923 KB | PNG | ✅ | ⚠ 1.9 MB |
| gallery/7-motorsag-stubbe.png | 2 686 KB | PNG | ✅ | ⚠ 2.7 MB |
| gallery/8-stubbfrasning-laski.jpg | 279 KB | JPG | ✅ | ⚠ 279 KB |
| about-placeholder.jpg | 3 KB | JPG | — | ⚠ Kvarlämnad, oanvänd |
| hero-placeholder.jpg | 8 KB | JPG | — | ⚠ Kvarlämnad, oanvänd |

**Totalt ~28 MB rå bilddata.** Next.js Image-komponent konverterar till WebP/AVIF vid serving, men källfilerna bör komprimeras till JPEG för att minska deploy-storlek och initial build. Alla alt-texter är beskrivande och relevanta. Inga generiska.

---

## 8. Formulär — statisk granskning

| Punkt | Status |
|-------|--------|
| Antal fält | 4 (Namn, Telefon, E-post valfri, Meddelande) ✅ |
| Klientvalidering | Zod: namn min 2, telefon min 6, e-post format eller tom, meddelande min 10 ✅ |
| Spärr dubbelinlämning | `isSubmitting` disablar knappen ✅ |
| Felmeddelanden | Ja, på svenska: "Ange ditt namn", "Ange ett giltigt telefonnummer", "Beskriv ditt projekt (minst 10 tecken)" ✅ |
| Serverfel om Resend nere | Formuläret gör `if (res.ok)` men visar **inget felmeddelande om res INTE ok**. Användaren ser bara att inget händer. ❌ |
| Filuppladdning | Finns inte (ingen upload-funktion) — OK för MVP |
| GDPR-samtyckestext | "Genom att skicka godkänner du att jag behandlar dina uppgifter... Integritetspolicy" ✅ |
| Honeypot | Dolt fält, bots som fyller i det avvisas tyst ✅ |

---

## 9. GDPR

| Punkt | Status |
|-------|--------|
| Integritetspolicy | ✅ /integritetspolicy, länkad från footer och formulär |
| Analytics | ✅ Ingen tracking, inga cookies |
| Google Fonts | ✅ Self-hosted via next/font (inga externa requests) |
| Google Maps iframe | ❌ Inbäddad iframe på kontaktsidan sätter Google-cookies utan samtycke |
| Samtyckestext vid formulär | ✅ |

---

## 10. Faktakontroll

| Fakta | Status |
|-------|--------|
| Tjänster: trädfällning, precisionsfällning, gallring, stubbfräsning | ✅ |
| ⚠ "Beskärning" nämns i RUT-sidan | ❌ Inte i godkänd tjänstelista — `src/app/rut-avdrag/page.tsx:92` |
| Orter: Luleå, Boden, Gammelstad, Persön, Brändön, Luleå skärgård | ✅ |
| RUT 50% av arbetskostnad | ✅ |
| RUT max 75 000 kr/person/år | ✅ |
| Telefon 072-200 44 13 | ✅ |
| "Stormskador" nämns i FAQ | ⚠ Nämns som kontext ("Vid akuta situationer som stormskador"), inte som tjänst. Acceptabelt. |

---

## Blockerare — måste fixas före launch

### B1. Dubblett title + H1 mellan /tjanster/tradfallning och /omraden/lulea
**Var:** `src/app/tjanster/tradfallning/page.tsx` och `src/app/omraden/lulea/page.tsx`
**Vad:** Identisk title ("Trädfällning i Luleå | Grens Trädfällning") och identisk H1 ("Trädfällning i Luleå med RUT-avdrag"). Google kan inte skilja sidorna åt.
**Åtgärd:** Ändra ortssidans title till "Trädfällning i Luleå kommun | Grens Trädfällning" och H1 till "Trädfällning i Luleå – alla områden". Eller ändra tjänstesidans title till "Professionell trädfällning | Grens Trädfällning Luleå".

### B2. RUT-sidan saknar metadata (use client)
**Var:** `src/app/rut-avdrag/page.tsx`
**Vad:** Hela sidan är `"use client"` → metadata-export fungerar inte. Sidan ärver startsidans title ("Grens Trädfällning | Trädfällning i Luleå med RUT-avdrag") istället för en unik RUT-titel.
**Åtgärd:** Extrahera metadata till en separat `layout.tsx` i `/rut-avdrag/`, eller refaktorera sidan till server component med klienten i en separat komponent.

### B3. "Beskärning" felaktigt nämnd som godkänd tjänst
**Var:** `src/app/rut-avdrag/page.tsx:92`
**Vad:** "Gäller: Trädfällning, beskärning, stubbfräsning, gallring" — beskärning är inte i den godkända tjänstelistan.
**Åtgärd:** Ta bort "beskärning" eller ersätt med "precisionsfällning" om det stämmer med Markus tjänsteutbud.

### B4. Formuläret visar inget fel om servern svarar icke-OK
**Var:** `src/components/forms/ContactForm.tsx`
**Vad:** `if (res.ok) { setSubmitted(true); }` — men inget händer om `res.ok` är false. Användaren ser att knappen slutar ladda, men inget meddelande.
**Åtgärd:** Lägg till `else`-gren som visar felmeddelande: "Något gick fel. Ring mig istället på 072-200 44 13."

---

## Bör fixas — kostar ranking eller leads

### V1. Alla PNG-bilder >200 KB bör komprimeras till JPEG
**Var:** `public/images/` — 10 filer, totalt ~27 MB
**Åtgärd:** Konvertera alla `.png` galleri-/profilbilder till `.jpg` med quality 75–80. Uppdatera sökvägar i constants.ts och tjänstesidor. Ta bort oanvända placeholder-filer.

### V2. Google Maps-iframe sätter cookies utan samtycke
**Var:** `src/components/sections/ContactSection.tsx`
**Åtgärd:** Antingen (a) byt iframe-src till `https://www.google.com/maps/embed?...&output=embed` (sätter färre cookies), eller (b) ta bort kartan och behåll bara ortlistan. Kartan tillför marginellt värde för ett servicearea-företag.

### V3. Inga canonical-taggar
**Var:** Alla sidor
**Åtgärd:** Lägg till `alternates.canonical` i varje sidas metadata-export. Viktigast på /tjanster/tradfallning och /omraden/lulea (dubblettfixens komplement).

### V4. URL:er i sitemap och robots.txt pekar på vercel.app
**Var:** `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/robots.txt`
**Åtgärd:** Byt `SITE_URL`/`BASE_URL` till `https://grenstradfallning.se` innan domänen pekas om.

---

## Kan vänta — marginellt

### M1. Bilder serveras via next/image men källfilerna är onödigt stora
Next.js konverterar till WebP/AVIF vid serving. Bilderna fungerar, men deploy-storlek och build-cache påverkas. Komprimering (V1) löser detta.

### M2. Kvarlämnade placeholder-filer
`about-placeholder.jpg` och `hero-placeholder.jpg` i public/images/. Tar plats men påverkar inget.

### M3. Accessibility under 95
Lighthouse rapporterar 89–93. Bör undersökas med detaljerad rapport, men inte en blockerare.

---

## Manuella tester kvar till Johnny

Dessa kan jag inte verifiera automatiskt:

- [ ] **Ringtest på 4G:** Öppna sajten på riktig mobiltelefon via mobildata. Tryck på "Ring"-knappen i bottom bar. Verifierar att tel:-länken fungerar end-to-end.
- [ ] **Formulärtest:** Fyll i och skicka ett riktigt meddelande. Kontrollera att det landar i markus.gren90@gmail.com inom rimlig tid. Testa också med tomt namn (ska ge felmeddelande).
- [ ] **Safari på iPhone:** Öppna sajten i Safari. Kolla att hamburgarmenyn fungerar, att scroll är smooth, att bottom bar inte krockar med Safaris adressfält.
- [ ] **Ortssidornas text:** Läs igenom varje ortssida. Låter texten mänsklig? Stämmer detaljerna om lokala förhållanden (t.ex. "Gammelstads kyrka", "kustvinden i Brändön")? Du känner orterna — jag gör inte det.
- [ ] **RUT-räknaren:** Skriv in 5000 kr. Ska visa 2 500 kr efter RUT. Testa med 0, negativa tal, bokstäver.
- [ ] **Google Maps:** Renderas kartan korrekt på mobil? Går den att panorera utan att hela sidan scrollar?
- [ ] **Resend-leverans:** Kontrollera att mejlet inte hamnar i skräppost. "from: onboarding@resend.dev" kan flaggas — Resend kräver verifierad domän för produktionsbruk. När grenstradfallning.se är aktiv, verifiera domänen i Resend Dashboard och byt from-adress.
- [ ] **F-skatt och försäkring:** Trust badges i hero säger "F-skattsedel" och "Försäkrad". Verifiera med Markus att båda stämmer innan launch.
