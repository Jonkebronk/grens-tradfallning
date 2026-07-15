"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Ange ditt namn"),
  phone: z.string().min(6, "Ange ett giltigt telefonnummer"),
  email: z.string().email("Ange en giltig e-postadress").or(z.literal("")),
  message: z.string().min(10, "Beskriv ditt projekt (minst 10 tecken)"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  });

  async function onSubmit(data: FormData) {
    const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formId) {
      // Fallback: open mailto
      const subject = encodeURIComponent("Offertförfrågan från hemsidan");
      const body = encodeURIComponent(
        `Namn: ${data.name}\nTelefon: ${data.phone}\nE-post: ${data.email}\n\nMeddelande:\n${data.message}`
      );
      window.location.href = `mailto:markus.gren90@gmail.com?subject=${subject}&body=${body}`;
      return;
    }

    const res = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle2 className="h-12 w-12 text-nature-600 mb-4" />
        <h3 className="font-heading text-xl font-semibold text-nature-900 mb-2">
          Tack för din förfrågan!
        </h3>
        <p className="text-foreground/70">
          Vi återkommer till dig så snart som möjligt.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Label htmlFor="name">Namn *</Label>
        <Input
          id="name"
          placeholder="Ditt namn"
          {...register("name")}
          className="mt-1.5"
        />
        {errors.name && (
          <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="phone">Telefon *</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="070-123 45 67"
          {...register("phone")}
          className="mt-1.5"
        />
        {errors.phone && (
          <p className="text-sm text-destructive mt-1">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="email">E-post</Label>
        <Input
          id="email"
          type="email"
          placeholder="din@email.se (valfritt)"
          {...register("email")}
          className="mt-1.5"
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message">Beskriv ditt projekt *</Label>
        <Textarea
          id="message"
          placeholder="Berätta om träden, var de står, ungefärlig storlek..."
          rows={5}
          {...register("message")}
          className="mt-1.5"
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-1">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-6 text-base"
      >
        <Send className="h-4 w-4 mr-2" />
        {isSubmitting ? "Skickar..." : "Skicka förfrågan"}
      </Button>
    </form>
  );
}
