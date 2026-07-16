# INVENTERING — grenstradfallning.se

Inventerat: 2026-07-16
Fråga: Hindrar något en stressad person i Norrbotten från att ringa Markus?
Viewport: 390×844 (iPhone 14), Playwright MCP
Ingen Search Console-data finns — sökordsresonemang är antaganden.

---

## Konverteringsvägen — sammanfattning

**Startsidan → Ring:** 1 tap (bottom bar "Ring"), 0 skroll. Alternativt 1 skroll + 1 tap (hero-knapp "Ring mig: 072-200 44 13"). Bra.

**Ortssida → Ring:** 1 tap (bottom bar "Ring"), 0 skroll. Bra.

**Tjänstesida → Ring:** 1 tap (bottom bar "Ring"), 0 skroll. Bra.

**Första skärmen, mobil:** Logga + "Begär offert" + telefon-ikon + hamburger i header. Hero-bild med Markus i arbete, H1 "Snabb, säker och prisvärd trädfällning i Luleå med RUT-avdrag", intro, två CTA-knappar (Ring + Begär offert), trust badges (RUT, 5/5, F-skatt, Försäkrad). Bottom bar med Ring/Offert/Chatta. **Framgår inom 1 sekund vad han gör, var, och hur man ringer.** Inga blockerare här.

**Bottom bar:** Fixerad, följer vid skroll, tre knappar med god kontrast (mörk grön, amber, blå). Visuellt tydliga, tillräcklig träffyta.

---

## 1. Blockerare

### B1. Hero-knappen "Begär offert" fungerar inte från undersidor
**Var:** `src/components/sections/HeroSection.tsx:60`
**Vad:** `href="#kontakt"` utan `/`-prefix. Missades i den tidigare anchor-fix-commiten (97662f0) som fixade Header, MobileNav, MobileBottomBar och constants — men inte HeroSection.
**Varför det påverkar:** HeroSection renderas bara på startsidan, så funktionellt funkar det. Men om mönstret kopieras till andra sidor, eller om Next.js soft-navigerar tillbaka, kan det bryta. **Sänkt till "Kostar samtal" eftersom det funkar i praktiken.**

*Ingen ren blockerare hittad. Sajten fungerar, formuläret fungerar, telefonen fungerar.*

---

## 2. Kostar samtal — fungerar, men tappar folk

### K1. 6 ursprungliga ortssidor saknar canonical-tagg
**Var:** `src/app/omraden/lulea/page.tsx`, `boden/`, `gammelstad/`, `person/`, `brandon/`, `lulea-skargard/` — alla saknar `alternates.canonical`
**Vad:** De 3 nya ortssidorna (kalix, ranea, sodra-sunderbyn) har canonical, de 6 äldre har inte. Tjänstesidorna har canonical.
**Varför:** Google kan indexera med query-parametrar eller trailing slash och se dem som dubbletter. Inkonsistens signalerar slarv till crawlern.
**Åtgärd:** Lägg till `alternates: { canonical: "https://grenstradfallning.se/omraden/{slug}" }` i metadata-exporten på varje sida. 6 enradiga ändringar.

### K2. Nya ortssidorna (Kalix, Råneå, Södra Sunderbyn) har AI-genererad ton
**Var:** `src/app/omraden/kalix/page.tsx:23-30`, `ranea/page.tsx:23-30`, `sodra-sunderbyn/page.tsx:23-30`
**Vad:** Texterna följer ett tydligt mall-mönster: "[Ort] har [trädtyp] som [problem]. Jag [löser det]. Stubbfräsning kan göras [detalj]. RUT-avdrag gäller." Structural similarity ~40-50% parvis. Jämfört med de äldre ortssidorna (Boden, Brändön, Persön) som har mer personliga och platsspecifika detaljer.
**Varför:** En person i Kalix som läser texten kan känna att den inte är skriven av någon som verkligen åker dit. De äldre sidorna nämner konkreta detaljer (kustvinden i Brändön, kyrkan i Gammelstad). De nya är generiska.
**Åtgärd:** Johnny/Markus bör läsa igenom och lägga till 1-2 lokala detaljer per sida. Exempel Kalix: nämn ett specifikt område, en typisk jobbtyp, eller avstånd/restid.

### K3. Hero "Begär offert" har `#kontakt` utan `/`-prefix
**Var:** `src/components/sections/HeroSection.tsx:60`
**Vad:** `href="#kontakt"` istället för `href="/#kontakt"`. Funkar på startsidan men inkonsekvent med den fix som gjordes i övriga komponenter.
**Varför:** Om HeroSection återanvänds på en undersida i framtiden fungerar inte knappen. Riskerar att skapa förvirring vid kodunderhåll.
**Åtgärd:** Ändra till `href="/#kontakt"`.

### K4. Bilderna är fortfarande 2-4 MB PNG-filer
**Var:** `public/images/gallery/` — 7 filer, 1.9-4 MB vardera. `public/images/markus.png` 2.3 MB.
**Vad:** Next.js Image-komponent konverterar till WebP vid serving, men byggtiden och initial deploy påverkas. Lighthouse mobile Performance på startsidan var 87 (senaste mätning pre-launch).
**Varför:** LCP på startsidan var 3.5s. Snabbare LCP = fler som stannar. En stressad person på 4G med en äldre telefon märker fördröjningen.
**Åtgärd:** Konvertera PNG → JPG quality 80 med sharp. Uppdatera sökvägar i constants.ts och tjänstesidor. Halverar deploy-storlek och kan sänka LCP med ~0.5-1s.

---

## 3. Kan vänta — fixa när det finns sökdata

### V1. Startsidan saknar canonical
**Var:** `src/app/layout.tsx` / `src/app/page.tsx`
**Vad:** Ingen explicit canonical på startsidan. Next.js med metadataBase kan hantera det implicit, men en explicit canonical är bäst praxis.
**Åtgärd:** Lägg till `alternates: { canonical: "https://grenstradfallning.se" }` i page.tsx metadata.

### V2. Google Maps iframe sätter tredjepartscookies
**Var:** `src/components/sections/ContactSection.tsx:94`
**Vad:** Inbäddad Google Maps iframe. Strikt tolkat kräver GDPR samtycke innan tredjepartsinnehåll laddas.
**Varför:** Låg risk — Google Maps embed är branschstandard och inga tillsynsmyndigheter har slagit ner på det för småföretag. Men det är tekniskt sett en brist.
**Åtgärd:** Kan bytas till en statisk karta/bild med länk till Google Maps, eller laddas med "klicka för att visa"-samtycke. Marginell effekt.

### V3. Inga Service-schemas på individuella tjänstesidor
**Var:** Tjänstesidorna (`/tjanster/*`)
**Vad:** JSON-LD LocalBusiness + OfferCatalog finns i layout.tsx (alla sidor) men enskilda tjänstesidor har inte egna Service-schemas.
**Varför:** Kan ge rich results i Google för specifika tjänster. Inte kritiskt men kan förbättra CTR.
**Åtgärd:** Lägg till `Service`-schema i varje tjänstesida. Gör när sökdata visar vilka sidor som får mest visningar.

---

## Kunde inte verifiera

- **Ring-knappens tel:-länk på riktig telefon:** Playwright kan inte göra riktiga telefonsamtal. Johnny bör testa att trycka "Ring" i bottom bar på en riktig mobiltelefon via 4G.
- **Formulärets mejlleverans i produktion:** Resend-domänen verifierades idag (2026-07-16). Första riktiga testmejlet bör skickas och verifieras att det inte hamnar i skräppost.
- **Kontrast i julisol:** Skärmbild i Playwright visar normal belysning. Kan inte simulera hur den gröna headern och bottom bar ser ut i stark sol på en mörk skärm utomhus. Subjektiv bedömning: kontrasterna är goda (vit text på mörk grön, vit text på amber/blå).
- **Safari på iPhone:** Playwright kör Chromium. Bottom bar kan krocka med Safaris adressfält — kräver test på riktig iPhone.
- **F-skatt och försäkring:** Trust badges i hero säger "F-skattsedel" och "Försäkrad". Kan inte verifiera att dessa stämmer — Johnny/Markus bekräftar.
- **Lighthouse-mätning post-deploy:** Senaste Lighthouse-data är från 2026-07-15 (pre-launch). Ny mätning bör köras efter att domänen och alla ändringar (logga, nya sidor) deployas. Siffrorna kan ha ändrats.
- **Ortssidornas lokala riktighet:** Stämmer det att "Kalixälven" ligger nära de fastigheter Markus jobbar vid? Att "kustvinden i Brändön" är relevant? Bara någon lokal kan verifiera detta.
