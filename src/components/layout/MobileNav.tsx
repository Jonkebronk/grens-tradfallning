"use client";

import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import {
  Phone,
  FileText,
  MessageCircle,
  Home,
  Star,
  Wrench,
  User,
  Camera,
  Mail,
} from "lucide-react";
import { InstagramIcon } from "@/components/shared/InstagramIcon";
import { FacebookIcon } from "@/components/shared/FacebookIcon";

const navIcons: Record<string, React.ElementType> = {
  "/#hem": Home,
  "/#omdomen": Star,
  "/#tjanster": Wrench,
  "/#om-oss": User,
  "/#galleri": Camera,
  "/#kontakt": Mail,
};

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="right" className="w-80 flex flex-col p-0">
        {/* Header */}
        <SheetHeader className="px-6 pt-6 pb-4 border-b border-border">
          <SheetTitle>
            <Image
              src="/images/logo.png"
              alt="Grens Trädfällning"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </SheetTitle>
        </SheetHeader>

        {/* Navigation links */}
        <nav className="flex flex-col py-3 px-3 flex-1">
          {NAV_LINKS.map((link) => {
            const Icon = navIcons[link.href];
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3.5 text-[15px] font-medium text-foreground/80 hover:text-nature-700 hover:bg-nature-50 rounded-xl transition-colors"
              >
                {Icon && (
                  <Icon className="h-[18px] w-[18px] text-nature-600" />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* CTA buttons */}
        <div className="px-5 space-y-2.5">
          <a
            href={COMPANY.phoneHref}
            onClick={onClose}
            className="flex items-center justify-center gap-2.5 w-full bg-nature-700 hover:bg-nature-800 text-white font-semibold text-[15px] py-3.5 rounded-xl transition-colors"
          >
            <Phone className="h-[18px] w-[18px]" />
            Ring {COMPANY.phone}
          </a>
          <a
            href="/#kontakt"
            onClick={onClose}
            className="flex items-center justify-center gap-2.5 w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold text-[15px] py-3.5 rounded-xl transition-colors"
          >
            <FileText className="h-[18px] w-[18px]" />
            Begär offert
          </a>
          <a
            href={COMPANY.messengerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full bg-[#0084FF] hover:bg-[#0073E6] text-white font-semibold text-[15px] py-3.5 rounded-xl transition-colors"
          >
            <MessageCircle className="h-[18px] w-[18px]" />
            Chatta på Messenger
          </a>
        </div>

        {/* Social media */}
        <div className="mt-6 px-5 pb-8 pt-5 border-t border-border">
          <div className="flex gap-3">
            <a
              href={COMPANY.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-nature-50 hover:bg-nature-100 rounded-xl text-sm font-medium text-nature-700 transition-colors"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
            <a
              href={COMPANY.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-nature-50 hover:bg-nature-100 rounded-xl text-sm font-medium text-nature-700 transition-colors"
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
