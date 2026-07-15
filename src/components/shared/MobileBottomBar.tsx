"use client";

import { Phone, MessageCircle, FileText } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { trackEvent } from "@/components/shared/Analytics";

export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      {/* Gradient shadow above bar */}
      <div className="h-4 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="bg-white border-t border-gray-200 px-3 pb-[env(safe-area-inset-bottom)] pt-2">
        <div className="flex gap-2">
          {/* Ring */}
          <a
            href={COMPANY.phoneHref}
            onClick={() => trackEvent("click", "phone", "mobile_bar")}
            className="flex-1 flex items-center justify-center gap-2 bg-nature-700 hover:bg-nature-800 text-white font-semibold text-sm py-3 rounded-xl transition-colors"
          >
            <Phone className="h-4 w-4" />
            Ring
          </a>

          {/* Begär offert */}
          <a
            href="#kontakt"
            className="flex-1 flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm py-3 rounded-xl transition-colors"
          >
            <FileText className="h-4 w-4" />
            Offert
          </a>

          {/* Messenger */}
          <a
            href={COMPANY.messengerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#0084FF] hover:bg-[#0073E6] text-white font-semibold text-sm py-3 rounded-xl transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Chatta
          </a>
        </div>
      </div>
    </div>
  );
}
