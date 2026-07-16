import { Phone, Mail as MailIcon } from "lucide-react";
import { InstagramIcon } from "@/components/shared/InstagramIcon";
import { FacebookIcon } from "@/components/shared/FacebookIcon";
import { COMPANY } from "@/lib/constants";

const SERVICE_LINKS = [
  { href: "/tjanster/tradfallning", label: "Trädfällning" },
  { href: "/tjanster/gallring", label: "Gallring" },
  { href: "/tjanster/vinschfallning", label: "Vinschfällning" },
  { href: "/tjanster/stubbfrasning", label: "Stubbfräsning" },
  { href: "/tjanster/skogsrojning", label: "Skogsröjning" },
  { href: "/rut-avdrag", label: "RUT-avdrag" },
];

const LOCATION_LINKS = [
  { href: "/omraden/lulea", label: "Luleå" },
  { href: "/omraden/boden", label: "Boden" },
  { href: "/omraden/gammelstad", label: "Gammelstad" },
  { href: "/omraden/person", label: "Persön" },
  { href: "/omraden/brandon", label: "Brändön" },
  { href: "/omraden/lulea-skargard", label: "Luleå skärgård" },
  { href: "/omraden/kalix", label: "Kalix" },
  { href: "/omraden/ranea", label: "Råneå" },
  { href: "/omraden/sodra-sunderbyn", label: "Södra Sunderbyn" },
];

const linkClass =
  "text-sm text-white/90 hover:text-white underline decoration-white/40 underline-offset-2 transition-colors";

export function Footer() {
  return (
    <footer className="bg-nature-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 pb-24 md:pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {/* Services */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 text-white/90">
              Tjänster
            </h3>
            <nav className="flex flex-col gap-2">
              {SERVICE_LINKS.map((link) => (
                <a key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 text-white/90">
              Områden
            </h3>
            <nav className="flex flex-col gap-2">
              {LOCATION_LINKS.map((link) => (
                <a key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 text-white/90">
              Företaget
            </h3>
            <nav className="flex flex-col gap-2">
              <a href="/#om-oss" className={linkClass}>Om mig</a>
              <a href="/#galleri" className={linkClass}>Referensjobb</a>
              <a href="/#omdomen" className={linkClass}>Omdömen</a>
              <a href="/#kontakt" className={linkClass}>Kontakt</a>
              <a href="/integritetspolicy" className={linkClass}>Integritetspolicy</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 text-white/90">
              Kontakt
            </h3>
            <div className="space-y-3">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors"
              >
                <MailIcon className="h-4 w-4 shrink-0" />
                {COMPANY.email}
              </a>
              <a
                href={COMPANY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
              <a
                href={COMPANY.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors"
              >
                <FacebookIcon className="h-4 w-4" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-white/70">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.name}. Alla rättigheter
            förbehållna.
          </p>
          <p className="mt-1">
            Webbplats av{" "}
            <a
              href="https://www.nortropic.se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white underline decoration-white/30 underline-offset-2 transition-colors"
            >
              Nortropic
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
