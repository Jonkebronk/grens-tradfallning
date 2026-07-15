"use client";

import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function MessengerButton() {
  return (
    <a
      href={COMPANY.messengerUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatta med mig på Messenger"
      className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2 bg-[#0084FF] hover:bg-[#0073E6] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="text-sm font-semibold">Chatta</span>
    </a>
  );
}
