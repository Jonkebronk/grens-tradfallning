import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <Image
        src="/images/logo.jpg"
        alt="Grens Trädfällning logotyp"
        width={80}
        height={80}
        className="rounded-lg mb-6"
      />
      <h1 className="font-heading text-3xl font-bold text-nature-900 mb-3">
        Sidan hittades inte
      </h1>
      <p className="text-foreground/70 mb-8 max-w-md">
        Sidan du letar efter finns tyvärr inte. Kanske har den flyttats eller
        tagits bort.
      </p>
      <a
        href="/"
        className={buttonVariants({
          className:
            "bg-nature-700 hover:bg-nature-800 text-white font-semibold px-6 py-3",
        })}
      >
        Tillbaka till startsidan
      </a>
    </div>
  );
}
