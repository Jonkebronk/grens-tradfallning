import Image from "next/image";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { GALLERY_ITEMS } from "@/lib/constants";

export function GallerySection() {
  return (
    <section id="galleri" className="py-20 md:py-28 bg-nature-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Referensjobb"
            subtitle="Ett urval av genomförda uppdrag i Luleå med omnejd."
          />
        </ScrollReveal>

        <ScrollReveal stagger={0.06}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY_ITEMS.map((item, i) => (
              <div
                key={i}
                className="group relative aspect-square rounded-xl overflow-hidden bg-nature-200 shadow-sm"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Hover overlay with caption */}
                <div className="absolute inset-0 bg-nature-900/0 group-hover:bg-nature-900/60 transition-colors duration-300 flex items-end">
                  <p className="p-3 text-sm text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
