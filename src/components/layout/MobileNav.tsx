"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { Phone, FileText, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/shared/InstagramIcon";
import { FacebookIcon } from "@/components/shared/FacebookIcon";

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="w-72 flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-heading text-nature-800">
            Grens Trädfällning
          </SheetTitle>
        </SheetHeader>

        {/* Navigation links */}
        <nav className="flex flex-col gap-1 mt-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="px-3 py-3 text-base font-medium text-foreground/80 hover:text-nature-700 hover:bg-nature-50 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA buttons */}
        <div className="mt-8 space-y-2 px-3">
          <a
            href={COMPANY.phoneHref}
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full bg-nature-700 hover:bg-nature-800 text-white font-semibold text-sm py-3 rounded-xl transition-colors"
          >
            <Phone className="h-4 w-4" />
            Ring {COMPANY.phone}
          </a>
          <a
            href="#kontakt"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm py-3 rounded-xl transition-colors"
          >
            <FileText className="h-4 w-4" />
            Begär offert
          </a>
          <a
            href={COMPANY.messengerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#0084FF] hover:bg-[#0073E6] text-white font-semibold text-sm py-3 rounded-xl transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Chatta på Messenger
          </a>
        </div>

        {/* Social media */}
        <div className="mt-auto pt-6 pb-4 px-3 border-t border-border">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Sociala medier
          </p>
          <div className="flex gap-3">
            <a
              href={COMPANY.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-nature-50 hover:bg-nature-100 rounded-lg text-sm text-nature-700 transition-colors"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
            <a
              href={COMPANY.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 bg-nature-50 hover:bg-nature-100 rounded-lg text-sm text-nature-700 transition-colors"
            >
              <FacebookIcon className="h-4 w-4" />
              Facebook
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
