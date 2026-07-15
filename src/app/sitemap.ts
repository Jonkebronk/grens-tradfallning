import type { MetadataRoute } from "next";

const BASE_URL = "https://grens-tradfallning.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    // Tjänstesidor
    { url: `${BASE_URL}/tjanster/tradfallning`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/tjanster/gallring`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/tjanster/vinschfallning`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/tjanster/stubbfrasning`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    // Ortssidor
    { url: `${BASE_URL}/omraden/lulea`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/omraden/boden`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/omraden/gammelstad`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/omraden/person`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/omraden/brandon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/omraden/lulea-skargard`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    // Övrigt
    { url: `${BASE_URL}/rut-avdrag`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/integritetspolicy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
