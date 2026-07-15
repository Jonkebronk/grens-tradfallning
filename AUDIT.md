# AUDIT – Grens Trädfällning

Granskat: 2026-07-15
URL: https://grens-tradfallning.vercel.app/
Referens: Lokal_SEO_Guide_Svensk_Version.pdf (Nortropic)

---

## Kritiskt – blockerar konvertering eller indexering

### K1. Inga tjänstesidor – allt på en sida
**Var:** Sajtstruktur
**Problem:** Sajten är en single-page med ankarlänkar. Det finns ingen `/tradfallning`, `/stubbfrasning`, `/gallring` eller `/precisionsfallning`. Google kan inte ranka en separat sida för "stubbfräsning Luleå" om den inte existerar. Guiden: "En sida per tjänst. Trädfällning är inte stubbfräsning."
**Åtgärd:** Skapa fyra tjänstesidor under `/tjanster/[slug]` med unik title, H1, copy, före/efter-bilder och CTA. Behåll startsidan som översikt med kort intro per tjänst + länk till respektive sida.

### K2. Inga ortssidor
**Var:** Sajtstruktur
**Problem:** Ingen `/tradfallning-boden`, `/tradfallning-gammelstad` etc. "Söker någon 'trädfällning Boden' letar Google efter den mest relevanta sidan på internet för exakt den frågan. En sida som heter 'Trädfällning i Boden' slår din startsida."
**Åtgärd:** Skapa en ortssida per verksamhetsort: Luleå, Boden, Gammelstad, Persön, Brändön, Luleå skärgård. Unikt innehåll per ort – inte samma text med utbytt ortnamn.

### K3. Ingen integritetspolicy (GDPR)
**Var:** Saknas helt
**Problem:** Formuläret samlar in namn, telefon och e-post – det är personuppgiftsbehandling. Guiden: "Ett offertformulär som samlar in namn, telefon och adress är personuppgiftsbehandling." Ingen integritetspolicy finns, ingen samtyckestext vid formuläret.
**Åtgärd:** Skapa `/integritetspolicy` med: vem som behandlar data, vilka uppgifter, syfte, laglig grund (berättigat intresse), lagringstid, rättigheter. Lägg samtyckestext under formuläret: "Genom att skicka godkänner du att jag behandlar dina uppgifter för att besvara din förfrågan. Läs mer i min integritetspolicy."

### K4. Google Analytics utan samtycke
**Var:** `src/app/layout.tsx` → `Analytics.tsx`
**Problem:** GA4 laddas direkt utan samtyckesbanner. GA4 sätter cookies och är inte cookiefri. Guiden: "Cookiefri analys (Plausible eller Umami) eller korrekt samtycke."
**Åtgärd:** Antingen (a) byt till Plausible/Umami (cookiefri, inget samtycke krävs), eller (b) implementera cookie-samtycke som blockerar GA4 tills användaren godkänt. Rekommendation: Plausible – enklare, GDPR-säkert, billigare.

---

## Viktigt – kostar ranking eller leads

### V1. Sidfot saknar tjänste- och ortslänkar
**Var:** `src/components/layout/Footer.tsx`
**Problem:** Sidfoten har bara copyright, snabblänkar (ankarlänkar) och kontaktinfo. Guiden: "Sidfoten syns på varje sida — lägg dina fem orter och fem tjänster där, länkade. Gratis sökordssignaler på varje URL." När tjänste- och ortssidor finns ska de länkas härifrån.
**Åtgärd:** Lägg till "Tjänster" och "Områden" som separata kolumner med länk till respektive undersida.

### V2. Ingen RUT-sida eller RUT-räknare
**Var:** Saknas
**Problem:** "Gäller RUT-avdrag på trädfällning?" är en sökfråga folk ställer. FAQ-svaret finns men ingen dedikerad sida. Guiden: "Bygg en räknare på sajten. Kunden skriver in offertsumman och ser vad de faktiskt betalar."
**Åtgärd:** Skapa `/rut-avdrag` med förklaring av regler, prisexempel (före/efter RUT) och en enkel räknare (input-fält → visar pris efter 50% avdrag).

### V3. Pris visas bara för stubbfräsning
**Var:** `src/lib/constants.ts`, ServicesSection
**Problem:** Bara stubbfräsning har prisexempel. Guiden: "Visa alltid pris efter RUT, med bruttopriset bredvid." Prisinformation konverterar – det sållar bort de som inte köper och tryggar de som ska.
**Åtgärd:** Lägg till "från X kr (efter RUT)" på varje tjänst om Markus kan ange ungefärliga priser.

### V4. Trust-signaler saknas: F-skatt, försäkrad
**Var:** `src/components/sections/HeroSection.tsx`
**Problem:** Trust badges visar "RUT-avdrag 50%" och "5/5 stjärnor". Guiden: "F-skatt, försäkrad, RUT" som förtroendemarkörer synliga ovanför fold. "F-skatt" och "Försäkrad" saknas.
**Åtgärd:** Lägg till "F-skatt" och "Försäkrad" som trust badges (om det stämmer – verifiera med Markus).

### V5. Inga före/efter-bilder på tjänstebeskrivningar
**Var:** ServicesSection + GallerySection
**Problem:** Alla bilder ligger i ett separat galleri. Guiden: "Lägg galleriet direkt på tjänstesidan, mellan beskrivningen och kontaktknappen. Inte i en portfolio ingen hittar."
**Åtgärd:** När tjänstesidor skapas (K1): placera relevanta före/efter-bilder direkt på respektive tjänstesida.

### V6. Formuläret saknar samtyckestext
**Var:** `src/components/forms/ContactForm.tsx`
**Problem:** Formuläret samlar personuppgifter utan samtyckesinformation. Se K3.
**Åtgärd:** Lägg till rad under skicka-knappen: "Genom att skicka godkänner du att jag behandlar dina uppgifter för att besvara din förfrågan. [Integritetspolicy](/integritetspolicy)"

### V7. Sitemap har bara en URL
**Var:** `src/app/sitemap.ts`
**Problem:** Sitemapen listar bara `/`. När undersidor skapas måste de in.
**Åtgärd:** Uppdatera automatiskt med alla tjänste- och ortssidor.

---

## Bra att ha – marginellt

### B1. LCP 3.7s – hero-bilden är stor
**Var:** `public/images/hero.png` (~2 MB)
**Problem:** Lighthouse Performance 84. LCP 3.7s överstiger 2.5s-gränsen. Hero-bilden serveras via next/image (auto-WebP) men källfilen är stor.
**Åtgärd:** Komprimera hero.png till under 500 KB. Eller konvertera till .webp manuellt.

### B2. Pris bör visa före/efter RUT
**Var:** Constants/ServicesSection
**Problem:** "Från 1 350 kr / stubbe (efter RUT)" – bra, men guiden: "1 350 kr efter RUT (2 700 kr före) konverterar bättre än något av talen ensamt."
**Åtgärd:** Visa båda: "1 350 kr efter RUT (2 700 kr före avdrag)".

### B3. Saknar intern länkning mellan sektioner
**Var:** Hela sajten
**Problem:** Som single-page saknas intern länkning. Guiden: "När din sida om trädfällning länkar till sidan om stubbfräsning, som länkar till RUT-sidan, bygger du ett nät Google kan förstå."
**Åtgärd:** Löses automatiskt när K1/K2 implementeras – varje tjänstesida bör länka till relaterade tjänster.

### B4. FAQ bör vara 8-10 frågor
**Var:** FAQSection + layout.tsx JSON-LD
**Problem:** 5 frågor idag. Guiden föreslår 8-10 i Q&A-sektionen. Saknar: "Forslar du bort virket?", "Har du försäkring?", "Vilka områden arbetar du i?"
**Åtgärd:** Lägg till 3-5 fler FAQ-frågor.

### B5. Facebook-sida som sameAs i JSON-LD
**Var:** `src/app/layout.tsx`
**Problem:** Facebook-länken finns i sameAs men använder `profile.php?id=` format. Inte ett problem, men en vanity-URL (facebook.com/grenstradfallning) ser bättre ut.
**Åtgärd:** Skapa vanity-URL på Facebook om möjligt.

---

## Sammanfattning per checklista

### Struktur
| Check | Status |
|-------|--------|
| Sida per tjänst? | ❌ Allt på en sida |
| Sida per ort? | ❌ Saknas |
| RUT-sida/räknare? | ❌ Saknas |
| FAQ med riktiga frågor? | ✅ 5 frågor, specifika för Luleå |

### Konvertering (mobil först)
| Check | Status |
|-------|--------|
| Telefon synligt utan scroll? | ✅ Header + hero |
| Tel:-länk? | ✅ Överallt |
| Fast telefonknapp vid scroll? | ✅ MobileBottomBar (Ring/Offert/Chatta) |
| Formulär ≤5 fält? | ✅ 4 fält (Namn, Telefon, E-post valfri, Meddelande) |
| Trust-signaler ovanför fold? | ⚠ RUT + 5/5 stjärnor. Saknar F-skatt, Försäkrad |
| Före/efter-bilder på tjänstesidor? | ❌ Bara i separat galleri |

### Teknik
| Check | Status |
|-------|--------|
| Title <60 tecken, tjänst+ort? | ✅ 58 tecken |
| Meta description <160 tecken? | ✅ 156 tecken |
| En H1 med tjänst+ort? | ✅ "Snabb, säker och prisvärd trädfällning i Luleå med RUT-avdrag" |
| Schema: LocalBusiness? | ✅ Med aggregateRating, reviews, areaServed |
| Schema: Service? | ✅ OfferCatalog med 4 tjänster |
| Schema: FAQPage? | ✅ 5 frågor |
| lang="sv"? | ✅ |
| sitemap.xml? | ✅ (men bara 1 URL) |
| robots.txt? | ✅ |
| Alt-texter med ort/tjänst? | ⚠ Beskrivande men inte alla nämner ort |
| AVIF/WebP? | ✅ Aktiverat i next.config.ts |
| Intern länkning? | ❌ Single-page, inga korsreferenser |
| Sidfot med tjänste-/ortslänkar? | ❌ Bara ankarlänkar |

### NAP
| Check | Status |
|-------|--------|
| Telefon identiskt överallt? | ✅ "072-200 44 13" via COMPANY.phone konstant |
| Företagsnamn identiskt? | ✅ "Grens Trädfällning" överallt |

### GDPR
| Check | Status |
|-------|--------|
| Integritetspolicy? | ❌ Saknas |
| Cookiefri analytics eller samtycke? | ❌ GA4 utan samtycke |
| Samtyckestext vid formulär? | ❌ Saknas |

### Prestanda (Lighthouse mobil)
| Metric | Värde | Bedömning |
|--------|-------|-----------|
| Performance | 84 | ⚠ LCP drar ner |
| Accessibility | 93 | ✅ |
| Best Practices | 100 | ✅ |
| SEO | 100 | ✅ |
| LCP | 3.7s | ❌ Mål <2.5s |
| CLS | 0 | ✅ |
| TBT | 60ms | ✅ |

---

## Prioriterad åtgärdsordning

1. **K3 + K4** – GDPR: integritetspolicy + byt till Plausible (eller cookie-samtycke). Juridiskt krav.
2. **K1** – Tjänstesidor med unik copy, bilder, CTA per tjänst.
3. **K2** – Ortssidor med unikt innehåll per ort.
4. **V2** – RUT-sida med räknare.
5. **V4 + V6** – Trust-signaler (F-skatt, Försäkrad) + samtyckestext vid formulär.
6. **V1** – Sidfotslänkar till tjänste- och ortssidor.
7. **B1** – Komprimera hero-bilden.
8. **B4** – Fler FAQ-frågor.
