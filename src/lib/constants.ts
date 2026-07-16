export const COMPANY = {
  name: "Grens Trädfällning",
  owner: "Markus Gren",
  phone: "072-200 44 13",
  phoneHref: "tel:+46722004413",
  email: "markus.gren90@gmail.com",
  instagram: "grens_tradfallning",
  instagramUrl: "https://instagram.com/grens_tradfallning",
  facebookUrl: "https://www.facebook.com/profile.php?id=61577624627170",
  messengerUrl: "https://m.me/61577624627170",
  tagline: "Snabb, säker och prisvärd trädfällning i Luleå med RUT-avdrag",
} as const;

export const SERVICE_AREAS = [
  "Luleå",
  "Boden",
  "Gammelstad",
  "Persön",
  "Brändön",
  "Luleå skärgård",
  "Kalix",
  "Råneå",
  "Södra Sunderbyn",
  "Norrbotten",
] as const;

export const SERVICES = [
  {
    id: "tradfallning",
    title: "Trädfällning",
    description:
      "Professionell trädfällning inklusive precisionsfällning nära hus och byggnader. Jag hanterar grova tallar, björkar, aspar och flerstammiga träd.",
    icon: "TreePine" as const,
  },
  {
    id: "gallring",
    title: "Gallring & röjning",
    description:
      "Gallring och skogsröjning av tomter för ökat ljusinsläpp och framkomlig mark. Jag röjer underväxt och tar bort skymmande träd.",
    icon: "Trees" as const,
  },
  {
    id: "vinschfallning",
    title: "Vinschassisterad fällning",
    description:
      "Säker fällning av lutande och riskträd med Laski-vinsch. Jag hanterar träd med röta och svåra vinklar.",
    icon: "Cable" as const,
  },
  {
    id: "stubbfrasning",
    title: "Stubbfräsning",
    description:
      "Maskinell stubbfräsning för en ren och plan tomt. Från 1 350 kr för första stubben, därefter 350 kr/stubbe (efter RUT-avdrag).",
    icon: "CircleDot" as const,
    priceExample: "Från 1 350 kr efter RUT (2 700 kr före avdrag)",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote: "Utför jobbet snabbt och effektivt med precision! Rekommenderas!",
    author: "Patrik Persson",
    rating: 5,
    source: "Facebook",
  },
  {
    quote:
      "Proffsigt utfört! Träden föll precis där de skulle och bortstädningen blev noggrant fixad. Tack för hjälpen!",
    author: "Karolina Fredriksson",
    rating: 5,
    source: "Facebook",
  },
  {
    quote: "Det blev jäkligt bra! Tack för att du kunde ta dig ut😀",
    author: "Kund i Luleå skärgård",
    rating: 5,
    source: "Instagram",
  },
] as const;

export const GALLERY_ITEMS = [
  { src: "/images/gallery/1-gallring-skog.jpg", alt: "Gallring i skogen – Markus i full skyddsutrustning" },
  { src: "/images/gallery/2-falld-bjork.jpg", alt: "Fälld björk på villatomt i Luleå" },
  { src: "/images/gallery/3-uppkapad-stam.jpg", alt: "Noggrant uppkapad björkstam" },
  { src: "/images/gallery/4-vinschning-tall.jpg", alt: "Vinschassisterad fällning av tall" },
  { src: "/images/gallery/5-husqvarna-sag.jpg", alt: "Husqvarna motorsåg i arbete" },
  { src: "/images/gallery/6-fallt-trad.jpg", alt: "Fällt träd vid fastighet" },
  { src: "/images/gallery/7-motorsag-stubbe.jpg", alt: "Motorsåg i stubbe efter fällning" },
  { src: "/images/gallery/8-stubbfrasning-laski.jpg", alt: "Stubbfräsning med Laski-maskin" },
] as const;

export const NAV_LINKS = [
  { href: "/#hem", label: "Hem" },
  { href: "/#omdomen", label: "Omdömen" },
  { href: "/#tjanster", label: "Tjänster" },
  { href: "/#om-oss", label: "Om mig" },
  { href: "/#galleri", label: "Galleri" },
  { href: "/#kontakt", label: "Kontakt" },
] as const;
