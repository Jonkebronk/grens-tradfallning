import { Phone, Mail } from "lucide-react";
import { InstagramIcon } from "@/components/shared/InstagramIcon";
import { FacebookIcon } from "@/components/shared/FacebookIcon";
import { COMPANY, NAV_LINKS, SERVICE_AREAS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-nature-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company info */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-3">
              Grens Trädfällning
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              {COMPANY.tagline}
            </p>
            <p className="text-white/50 text-sm mt-4">
              Verksamma i {SERVICE_AREAS.join(", ")}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 text-white/60">
              Snabblänkar
            </h4>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 text-white/60">
              Kontakt
            </h4>
            <div className="space-y-3">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                {COMPANY.email}
              </a>
              <a
                href={COMPANY.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <InstagramIcon className="h-4 w-4" />
                @{COMPANY.instagram}
              </a>
              <a
                href={COMPANY.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                <FacebookIcon className="h-4 w-4" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} {COMPANY.name}. Alla rättigheter
          förbehållna.
        </div>
      </div>
    </footer>
  );
}
