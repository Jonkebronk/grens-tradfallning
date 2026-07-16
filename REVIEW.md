# REVIEW – Grens Trädfällning

Granskat: 2026-07-16
Mål: Fler inkommande samtal och offertförfrågningar från Luleå med omnejd.
Verktyg: Playwright (mobil 390×844), Lighthouse CLI, kodgranskning, git log.
Saknat: Vercel MCP (deploy-status/bundle), Chrome DevTools MCP (ej ansluten), Search Console (ej uppsatt — ingen sökdata).

---

## Kostar oss leads just nu

### 1. 24 MB oanvända PNG-filer fördröjer deploy och bloatar repot
**Var:** `public/images/` — 9 `.png`-filer som är kvar trots att `.jpg`-versionerna används.
**Varför det påverkar samtal:** Repot är onödigt stort, deploy tar längre tid, och om någon sidväg fortfarande refererar till en PNG serveras den okomprimerad (2–4 MB per bild). Det sänker Lighthouse Performance.
**Åtgärd:** `rm public/images/hero.png public/images/markus.png public/images/gallery/*.png`

### 2. Startsidans LCP är 3.9 sekunder — målet är under 2.5
**Var:** `src/components/sections/HeroSection.tsx` + `public/images/hero.jpg` (158 KB)
**Varför:** Hero-bilden renderas som bakgrundsbild via `next/image fill` med gradient overlay. Bilden har `priority` men LCP-elementet (H1-texten) renderas ovanpå en bild som tar tid att ladda. Lighthouse mobil ger 85 Performance.
**Åtgärd:** (a) Skala ner hero.jpg till max 800px bredd (mobil behöver inte 1169px). (b) Sätt `fetchpriority="high"` explicit. (c) Överväg att servera hero som `<img>` istället för bakgrund — LCP mäts mot bilden, inte texten ovanpå.

### 3. "Begär offert"-knappen i headern syns på mobil men är för tight
**Var:** Screenshot `review-mobile-hero.png` — "Begär offert" visas i headern redan på 390px bredd, tätt intill telefonikonen och hamburgarmenyn.
**Varför:** Visuellt kladdigt. Kunden ser tre klickbara element (Begär offert, telefon, hamburger) trängda i 150px. Det förvirrar mer än det konverterar. Bottom bar har redan Ring/Offert/Chatta.
**Åtgärd:** Dölj header-"Begär offert" under `lg:` (1024px) — mobil och tablet har bottom bar. Behåll telefon-ikonen.

### 4. Formuläret har inget fellmeddelande vid nätverksfel
**Var:** `src/components/forms/ContactForm.tsx`
**Varför:** Om Resend API:t är nere eller nätverket bryter mitt i visas felmeddelandet bara om servern svarar non-OK. Vid nätverksfel (`fetch` kastar exception) fångas det inte — `handleSubmit` crashar tyst och knappen fastnar i "Skickar...".
**Åtgärd:** Wrappa `fetch`-anropet i try/catch. I `catch`-blocket: `setServerError(true)`. Redan befintligt felmeddelande med telefonfallback visas då.

---

## Bromsar tillväxt

### 5. Tjänstesidor länkar inte till ortssidor
**Var:** `src/components/templates/ServicePage.tsx` — "Andra tjänster"-sektionen (rad ~155) listar bara andra tjänster, inte orter.
**Varför:** En kund som läser om stubbfräsning och bor i Boden ser ingen länk till "Stubbfräsning i Boden". Google ser inte heller kopplingen. Ortssidorna länkar till tjänster (bra), men det är enkelriktat.
**Åtgärd:** Lägg till "Jag arbetar i"-sektion under "Andra tjänster" med länkade ortschips. Använder samma mönster som ortssidornas "Tjänster i [ort]".

### 6. PhoneLink.tsx är oanvänd kod
**Var:** `src/components/shared/PhoneLink.tsx`
**Varför:** Definierad komponent som aldrig importeras. Inte en konverteringsfråga, men död kod signalerar att kodbasen inte är putsad.
**Åtgärd:** Ta bort filen.

### 7. `logo.jpg` används aldrig
**Var:** `public/images/logo.jpg` (68 KB)
**Varför:** Logotypen kopierades in men refereras inte i någon komponent (headern är text-only sedan ikonen togs bort). Onödigt i deploy.
**Åtgärd:** Ta bort, eller återinför som favicon om den ser bättre ut än nuvarande `icon.jpg`.

### 8. FAQ-frågorna i JSON-LD matchar koden — men saknar en viktig fråga
**Var:** `src/app/layout.tsx` (FAQPage-schema) + `src/components/sections/FAQSection.tsx`
**Varför:** "Vad kostar det att fälla ett träd?" finns men "Vad kostar en offert?" saknas. Den frågan är ett vanligt hinder — folk ringer inte om de tror att offerten kostar.
**Åtgärd:** Lägg till FAQ: "Kostar det att få en offert?" → "Nej, offerten är alltid kostnadsfri. Ring eller skicka en förfrågan så återkommer jag."

### 9. Resend skickar från `onboarding@resend.dev`
**Var:** `src/app/api/contact/route.ts:28`
**Varför:** E-post från `onboarding@resend.dev` hamnar sannolikt i skräppost. Markus kan missa förfrågningar. Resend kräver verifierad domän för produktions-from-adress.
**Åtgärd:** När grenstradfallning.se är aktiv: verifiera domänen i Resend Dashboard, byt `from` till `"Grens Trädfällning <info@grenstradfallning.se>"`.

---

## Kosmetiskt

### 10. Contrast-varning kvarstår i Lighthouse (96/100 A11y)
**Var:** Footerns `text-white/90` mot `bg-nature-900` (#14532D).
**Varför:** Lighthouse flaggar det som marginal, men ger ändå 96. Att höja till `text-white` löser det helt men gör designen plattare.
**Åtgärd:** Acceptera 96 eller byt footer-text till ren `text-white`.

### 11. Herobilden beskärs hårt på smal mobil
**Var:** Screenshot `review-mobile-hero.png` — bilden syns mest som grönska, Markus i arbete är knappt synlig.
**Varför:** `object-cover` på en stående bild (688×1169) beskärs till landskapsformat av gradient-overlay. Handlingen (motorsåg, varselväst) hamnar utanför.
**Åtgärd:** Be Markus om en landskapsformaterad arbetsbild, eller justera `object-position` till `object-[center_30%]` för att visa mer av handlingen.

### 12. Ingen `robots.txt`-uppdatering behövs — men domän-bytet saknas
**Var:** `public/robots.txt` pekar redan på `grenstradfallning.se` ✓. Sitemap likaså ✓. Canonical-taggar ✓. Allt förberett.
**Inget att göra — bara verifiera efter domänbytet.**

---

## Lighthouse-poäng (mobil, 2026-07-16)

| Sida | Perf | A11y | BP | SEO |
|------|------|------|----|-----|
| / | 85 | 96 | 100 | 100 |
| /tjanster/stubbfrasning | 90 | 96 | 100 | 100 |
| /omraden/boden | 94 | 96 | 100 | 100 |

## Konverteringsväg (Playwright, 390×844)

**Landning → samtal:** 1 tryck (Ring-knapp i sticky bottom bar, alltid synlig). ✅
**Landning → formulär:** 1 tryck (Offert-knapp i bottom bar scrollar till #kontakt). ✅
**Formulär:** 4 fält (Namn, Telefon, E-post valfri, Meddelande). Under målgränsen 5. ✅
**Synligt ovanför fold:** H1, tagline, Ring-knapp, Begär offert, trust badges. ✅
**Steg till Messenger:** 1 tryck (Chatta-knapp i bottom bar). ✅

**Flödet är bra.** En kund i Luleå som googlar "trädfällning Luleå" och landar på sidan kan ringa inom 2 sekunder. Det finns inget steg att skära bort.

## Dubblettinnehåll (ortssidor)

Parvis likhet mätt på intro+brödtext:

| Par | Likhet |
|-----|--------|
| Brändön ↔ Skärgård | ~40% (högst) |
| Luleå ↔ Skärgård | ~38% |
| Luleå ↔ Persön | ~32% |
| Alla övriga par | <30% |

**Inget par överstiger 70%.** Varje ortssida har unik terräng, typiska jobb och lokal kontext. Enda gemensamma mönstret är RUT-meningen i slutet — acceptabel boilerplate.

## Indexeringsberedskap

| Check | Status |
|-------|--------|
| Sitemap = 13 URL:er, matchar alla page.tsx | ✅ |
| robots.txt: Allow /, sitemap-referens | ✅ |
| Inga noindex/nofollow | ✅ |
| Canonical-taggar på alla sidor → grenstradfallning.se | ✅ |
| lang="sv" | ✅ |
| JSON-LD: LocalBusiness + FAQPage, validerad | ✅ |
| Alla URL:er pekar på grenstradfallning.se | ✅ |

**Redo att indexeras.** Koppla Search Console, skicka in sitemap, invänta crawl.

## Innehåll — mänsklig röst

Texterna läser som en riktig person i Norrbotten. Specifika signaler:
- "vid sidan av ett heltidsjobb" (ärligt, bygger förtroende)
- "grov tall upp till 70 cm i diameter" (konkret, inte generiskt)
- "villatomter i Gammelstad där björkarna tagit över" (lokal kunskap)
- "Det blev jäkligt bra!" (kundcitat, kollokvialt)
- Inga tomma Fraser som "vi brinner för kvalitet" eller "din trygga partner"

**Inget stycke flaggas som AI-genererat.** Rösten är sajten starkaste tillgång.

---

## Kunde inte verifiera

- **Verklig formulärinlämning** — kräver manuellt test. Resend API-nyckel är konfigurerad men `from: onboarding@resend.dev` kan hamna i skräppost.
- **Ringtest via 4G** — kräver riktig mobiltelefon på mobildata.
- **Safari på iPhone** — Playwright kör Chromium, inte WebKit. Sheet-menyn och scroll-beteende kan skilja sig.
- **Google Maps rendering på mobil** — iframe laddas men interaktion (panorera utan att scrolla sidan) bör testas manuellt.
- **Sökdata** — Search Console ej uppsatt. Alla sökordsantaganden (vilka termer folk söker på i Luleå) är baserade på branschkunskap, inte belagd data.
- **Vercel deploy-storlek/bundle** — Vercel MCP ej ansluten. Kunde inte verifiera faktisk bundle-storlek eller edge-function-storlek.
- **Resend leveransgrad** — Ingen data på om mejl faktiskt når inkorgen vs skräppost.
