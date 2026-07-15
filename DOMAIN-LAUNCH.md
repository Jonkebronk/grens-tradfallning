# Checklista: När grenstradfallning.se är köpt

## 1. Koppla domänen till Vercel
- Vercel Dashboard → Settings → Domains → Lägg till `grenstradfallning.se`
- Vercel visar DNS-records att lägga in hos domänregistraren (A-record + CNAME)
- Lägg även till `www.grenstradfallning.se` (Vercel redirectar automatiskt)
- HTTPS aktiveras automatiskt av Vercel

## 2. Verifiera Resend-domän (så mejl inte hamnar i skräppost)
- Resend Dashboard → Domains → Lägg till `grenstradfallning.se`
- Lägg in DNS-records (SPF, DKIM, DMARC) hos domänregistraren
- Byt from-adress i `src/app/api/contact/route.ts`:
  ```
  from: "Grens Trädfällning <info@grenstradfallning.se>"
  ```
- Testa att mejl landar i inkorgen, inte skräppost

## 3. Google Search Console
- Gå till search.google.com/search-console
- Lägg till `grenstradfallning.se` som property
- Verifiera via DNS (TXT-record) eller HTML-tagg
- Om HTML-tagg: lägg koden som `NEXT_PUBLIC_GSC_ID` i Vercel env vars
- Skicka in sitemap: `https://grenstradfallning.se/sitemap.xml`

## 4. Google Företagsprofil (Google Business Profile)
- Skapa profil på business.google.com
- Fyll i: namn, kategori (Trädfällningstjänst), tjänster, foton, Q&A
- Lägg in `https://grenstradfallning.se` som webbplats
- Verifiera med video
- Se Lokal_SEO_Guide_Svensk_Version.pdf för fullständig guide

## Redan gjort i koden
- [x] Alla canonical-taggar pekar på `grenstradfallning.se`
- [x] sitemap.xml använder `grenstradfallning.se`
- [x] robots.txt refererar till `grenstradfallning.se/sitemap.xml`
- [x] og:url pekar på `grenstradfallning.se`
- [x] JSON-LD url pekar på `grenstradfallning.se`
- [x] GSC-verifiering förberedd via `NEXT_PUBLIC_GSC_ID` env var

## Manuella tester efter domänbyte
- [ ] Öppna `grenstradfallning.se` — laddar sajten?
- [ ] Öppna `www.grenstradfallning.se` — redirectar till `grenstradfallning.se`?
- [ ] HTTPS-hänglås synligt?
- [ ] Skicka testformulär — landar mejlet i inkorgen (inte skräppost)?
- [ ] Ring via telefonknappen från mobil
- [ ] Dela länk på Facebook — visas OG-bild och titel korrekt?
- [ ] Sök `site:grenstradfallning.se` på Google efter 2-3 dagar — indexeras sidor?
