export const COMPANY = {
  name: "Grens Trädfällning",
  owner: "Markus Gren",
  phone: "072-200 44 13",
  phoneHref: "tel:+46722004413",
  email: "markus.gren90@gmail.com",
  instagram: "grens_tradfallning",
  instagramUrl: "https://instagram.com/grens_tradfallning",
  facebookUrl: "https://facebook.com/grenstradfallning",
  messengerUrl: "https://m.me/grenstradfallning",
  tagline: "Snabb, säker och prisvärd trädfällning i Luleå med RUT-avdrag",
} as const;

export const SERVICE_AREAS = [
  "Luleå",
  "Boden",
  "Gammelstad",
  "Persön",
  "Brändön",
  "Luleå skärgård",
] as const;

export const SERVICES = [
  {
    id: "tradfallning",
    title: "Trädfällning",
    description:
      "Professionell trädfällning inklusive precisionsfällning nära hus och byggnader. Vi hanterar grova tallar, björkar, aspar och flerstammiga träd.",
    icon: "TreePine" as const,
  },
  {
    id: "gallring",
    title: "Gallring",
    description:
      "Gallring av tomter för ökat ljusinsläpp och frigörande av kvällssol. Vi tar bort skymmande träd med precision.",
    icon: "Trees" as const,
  },
  {
    id: "vinschfallning",
    title: "Vinschassisterad fällning",
    description:
      "Säker fällning av lutande och riskträd med Laski-vinsch. Vi hanterar träd med röta och svåra vinklar.",
    icon: "Cable" as const,
  },
  {
    id: "stubbfrasning",
    title: "Stubbfräsning",
    description:
      "Maskinell stubbfräsning för en ren och plan tomt. Från 1 350 kr för första stubben, därefter 350 kr/stubbe (efter RUT-avdrag).",
    icon: "CircleDot" as const,
    priceExample: "Från 1 350 kr / stubbe (efter RUT)",
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
  { src: "/images/gallery/1-gallring-skog.png", alt: "Gallring i skogen – Markus i full skyddsutrustning" },
  { src: "/images/gallery/2-falld-bjork.png", alt: "Fälld björk på villatomt i Luleå" },
  { src: "/images/gallery/3-uppkapad-stam.png", alt: "Noggrant uppkapad björkstam" },
  { src: "/images/gallery/4-vinschning-tall.png", alt: "Vinschassisterad fällning av tall" },
  { src: "/images/gallery/5-husqvarna-sag.png", alt: "Husqvarna motorsåg i arbete" },
  { src: "/images/gallery/6-fallt-trad.png", alt: "Fällt träd vid fastighet" },
  { src: "/images/gallery/7-motorsag-stubbe.png", alt: "Motorsåg i stubbe efter fällning" },
] as const;

export const NAV_LINKS = [
  { href: "#hem", label: "Hem" },
  { href: "#tjanster", label: "Tjänster" },
  { href: "#om-oss", label: "Om oss" },
  { href: "#galleri", label: "Galleri" },
  { href: "#omdomen", label: "Omdömen" },
  { href: "#kontakt", label: "Kontakt" },
] as const;
