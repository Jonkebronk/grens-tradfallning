# PRE-LAUNCH GRANSKNING — grenstradfallning.se

Granskat: 2026-07-16 (post-domänpek)
URL: https://grenstradfallning.se/
Viewport: 390×844, Playwright MCP
Search Console: uppsatt, ingen sökdata ännu (normalt, tar dagar)

---

## Sammanfattning

Sajten är i gott skick. Inga hårda blockerare — konverteringsvägen fungerar (1 tap till samtal), formuläret fungerar med felhantering, alla 17 sidor ger 200, SEO-grunderna sitter. Två redirect-issues bör fixas för att undvika dubblettinnehåll.

---

## 1. Blockerare

### B1. www.grenstradfallning.se ger 200 istället för 301-redirect
**Var:** Vercel domänkonfiguration
**Vad:** `curl -sI https://www.grenstradfallning.se` returnerar `200 OK` med fullt sidinnehåll istället för `301 Moved Permanently` till `https://grenstradfallning.se`. Google kan indexera båda versionerna som separata sidor.
**Mildring:** Canonical-taggen pekar korrekt på `grenstradfallning.se`, vilket signalerar rätt till Google. Men en 301 är starkare.
**Åtgärd:** Gå till Vercel Dashboard → Settings → Domains. Kontrollera att `www.grenstradfallning.se` är konfigurerad som redirect (inte som separat domän). Vercel ska visa "Redirects to grenstradfallning.se".

### B2. grens-tradfallning.vercel.app serverar sajten utan redirect
**Var:** Vercel domänkonfiguration
**Vad:** `curl -sI https://grens-tradfallning.vercel.app` returnerar `200 OK`. Google kan indexera denna URL som dubblett.
**Mildring:** Canonical pekar på `grenstradfallning.se`. Sitemapen innehåller bara `grenstradfallning.se`-URL:er.
**Åtgärd:** Ingen kodändring — Vercel redirectar automatiskt `.vercel.app` till custom domain när domänen är korrekt uppsatt. Om detta inte sker, kontrollera i Vercel Dashboard att `grenstradfallning.se` är satt som "Primary Domain".

---

## 2. Kostar samtal — fungerar men kan förbättras

### K1. Integritetspolicy saknar canonical-tagg
**Var:** `src/app/integritetspolicy/page.tsx:5-8`
**Vad:** Alla andra sidor har `alternates.canonical` i metadata — integritetspolicyn saknar den.
**Varför:** Inkonsistens. Låg risk (integritetspolicyn rankar inte för något), men bör fixas för komplett SEO.
**Åtgärd:** Lägg till `alternates: { canonical: "https://grenstradfallning.se/integritetspolicy" }` i metadata.

---

## 3. Kan vänta — fixa när sökdata finns

Inga punkter. Alla tidigare "kan vänta"-issues från förra granskningen är fixade.

---

## Verifierade kontroller — PASS

| Kontroll | Status |
|----------|--------|
| HTTP → HTTPS redirect | ✅ 308 till https://grenstradfallning.se |
| TLS-certifikat | ✅ Giltigt, Vercel-utfärdat |
| Sitemap: 17 URL:er, alla ger 200 | ✅ |
| robots.txt: korrekt domän, Allow: / | ✅ |
| Inga noindex/nofollow i kodbasen | ✅ |
| Canonical på alla sidor (utom integritetspolicy) | ✅ 16/17 |
| Alla titlar unika | ✅ 17 unika titlar |
| Alla H1:or unika, 1 per sida | ✅ |
| JSON-LD LocalBusiness komplett | ✅ telephone, areaServed (9 orter + Norrbotten), url, name |
| JSON-LD Service-schema på alla 5 tjänstesidor | ✅ |
| JSON-LD FAQPage med 9 frågor | ✅ |
| JSON-LD hasOfferCatalog med 5 tjänster | ✅ |
| Telefonnummer konsistent (25+ instanser) | ✅ 072-200 44 13 / +46722004413 |
| NAP-konsistens | ✅ Namn, telefon, e-post identiska överallt |
| ContactForm: felmeddelande vid serverfel | ✅ "Ring mig istället på 072-200 44 13" |
| ContactForm: 4 fält, Zod-validering, svenska feltexter | ✅ |
| ContactForm: honeypot, GDPR-samtycke | ✅ |
| Resend-domän verifierad (DKIM + SPF) | ✅ grenstradfallning.se |
| From-adress: info@grenstradfallning.se | ✅ Via RESEND_FROM_EMAIL env var |
| Footer: 9 orter + 6 tjänster | ✅ |
| Ortssidor: parvis likhet < 15% | ✅ Ingen dubblettinnehållsrisk |
| Intern länkning: ort↔tjänst dubbelriktad | ✅ |
| Ingen mixed content (http://) | ✅ |
| Google Search Console verifierat | ✅ Meta-tag via NEXT_PUBLIC_GSC_ID |
| Sitemap inskickad i Search Console | ✅ 17 sidor upptäckta |
| lang="sv" | ✅ |
| Self-hosted fonts (next/font) | ✅ Inga externa font-requests |

## Konverteringsvägen — mobil (390×844)

| Scenario | Tap till samtal | Skroll | Bottleneck |
|----------|----------------|--------|------------|
| Startsida → Ring (bottom bar) | 1 | 0 | Ingen |
| Startsida → Ring (hero-knapp) | 1 | 0-1 | Ingen |
| Ortssida → Ring (bottom bar) | 1 | 0 | Ingen |
| Tjänstesida → Ring (bottom bar) | 1 | 0 | Ingen |
| Startsida → Begär offert | 1 (bottom bar) eller skroll till formulär | 0-1 | Ingen |

**Bottom bar:** Fixerad, följer vid skroll, tre knappar (Ring/Offert/Chatta). God kontrast.
**Första skärmen:** Logga, "Begär offert"-knapp, telefon-ikon, H1 med "trädfällning i Luleå", trust badges (RUT, F-skatt, Försäkrad, 5/5). Framgår vad/var/hur inom 1 sekund.

## Sidstorlekar

| Sida | HTML-storlek | TTFB |
|------|-------------|------|
| Startsidan | 126 KB | 0.32s |
| /tjanster/stubbfrasning | 57 KB | 0.59s |
| /omraden/boden | 44 KB | 0.46s |

---

## Kunde inte verifiera

- **Ring-knappens tel:-länk på riktig telefon** — Playwright kan inte göra telefonsamtal. Testa att trycka "Ring" i bottom bar på en riktig mobil via 4G.
- **Formulärets mejlleverans** — Resend-domänen verifierades idag. Första riktiga testmejlet bör skickas och verifieras att det landar i inkorgen (ej spam).
- **Safari på iPhone** — Playwright kör Chromium. Bottom bar kan krocka med Safaris adressfält.
- **Kontrast i julisol** — Kan inte simulera utomhusbelysning. Visuell bedömning: kontrasterna ser goda ut (vit text på mörk grön/amber/blå).
- **F-skatt och försäkring** — Trust badges säger "F-skattsedel" och "Försäkrad". Verifiera med Markus.
- **Ortssidornas lokala riktighet** — Stämmer detaljerna om Kalixälven, Råneå längs E10, 70/80-talsvillor i Södra Sunderbyn? Bara någon lokal kan verifiera.
- **Lighthouse Performance** — Kräver Chrome headless som inte var tillgänglig i denna session. Senaste mätning (pre-domänpek): Performance 87-96, LCP 2.6-3.9s. Bör köras igen efter alla ändringar.
