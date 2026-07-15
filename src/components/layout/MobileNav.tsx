"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { Phone } from "lucide-react";

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle className="font-heading text-nature-800">
            Grens Trädfällning
          </SheetTitle>
        </SheetHeader>
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
        <div className="mt-8 space-y-3 px-3">
          <a
            href={COMPANY.phoneHref}
            className="flex items-center gap-2 text-base font-semibold text-nature-700"
          >
            <Phone className="h-5 w-5" />
            {COMPANY.phone}
          </a>
          <a
            href="#kontakt"
            onClick={onClose}
            className={buttonVariants({
              className:
                "w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold",
            })}
          >
            Begär offert
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
