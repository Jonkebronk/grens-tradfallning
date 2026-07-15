"use client";

import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PhoneLink({
  showIcon = true,
  className,
}: {
  showIcon?: boolean;
  className?: string;
}) {
  return (
    <a
      href={COMPANY.phoneHref}
      className={cn("inline-flex items-center gap-2 font-semibold", className)}
    >
      {showIcon && <Phone className="h-4 w-4" />}
      {COMPANY.phone}
    </a>
  );
}
