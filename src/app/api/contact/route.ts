import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "E-posttjänsten är inte konfigurerad." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { name, phone, email, message } = await request.json();

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Namn, telefon och meddelande krävs." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Grens Trädfällning <onboarding@resend.dev>",
      to: "markus.gren90@gmail.com",
      subject: `Offertförfrågan från ${name}`,
      replyTo: email || undefined,
      text: [
        `Namn: ${name}`,
        `Telefon: ${phone}`,
        email ? `E-post: ${email}` : "",
        "",
        "Meddelande:",
        message,
        "",
        "---",
        "Skickat via grenstradfallning.se",
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Kunde inte skicka meddelandet. Försök igen." },
      { status: 500 }
    );
  }
}
