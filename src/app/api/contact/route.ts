import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/lib/contact-schema";
import { clientKey, rateLimit } from "@/lib/rate-limit";
import { site } from "@/content/site";

export const runtime = "nodejs";

/**
 * The address messages are sent from. Resend requires a verified domain, so
 * this falls back to the Resend onboarding sender until the client verifies
 * zypatech.online.
 *
 * TODO: verify zypatech.online in Resend and set CONTACT_FROM_EMAIL to
 * something like "Zypa Tech website <website@zypatech.online>".
 */
const FROM = process.env.CONTACT_FROM_EMAIL ?? "Zypa Tech <onboarding@resend.dev>";
const TO = process.env.CONTACT_TO_EMAIL ?? site.email;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  /* Basic rate limiting, before any work is done. */
  const limit = rateLimit(clientKey(request.headers));
  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Too many messages. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(limit.retryAfterSeconds) },
      },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Please check the form and try again.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const data = parsed.data;

  /*
    Honeypot. A bot filled the hidden field, so accept the request and do
    nothing with it. Returning an error would tell the bot what happened.
  */
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set. The contact form cannot send.");
    return NextResponse.json(
      { error: "The form is not configured to send right now." },
      { status: 500 },
    );
  }

  const rows: [string, string][] = [
    ["Name", data.name],
    ["Company", data.company || "Not given"],
    ["Email", data.email],
    ["Phone", data.phone || "Not given"],
    ["Project type", data.projectType],
    ["Budget", data.budget],
  ];

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #1C1819;">
      <h2 style="color: #231F20; margin: 0 0 16px;">New enquiry from ${escapeHtml(
        site.domain,
      )}</h2>
      <table style="border-collapse: collapse;">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="padding: 4px 16px 4px 0; color: #5C5254;">${label}</td><td style="padding: 4px 0;"><strong>${escapeHtml(
                value,
              )}</strong></td></tr>`,
          )
          .join("")}
      </table>
      <h3 style="color: #231F20; margin: 24px 0 8px;">Message</h3>
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(data.message)}</p>
    </div>
  `;

  const text = [
    `New enquiry from ${site.domain}`,
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    data.message,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: data.email,
      subject: `Enquiry from ${data.name}${data.company ? ` at ${data.company}` : ""}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend rejected the message:", error);
      return NextResponse.json(
        { error: "The message could not be sent." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Sending the contact message failed:", error);
    return NextResponse.json(
      { error: "The message could not be sent." },
      { status: 500 },
    );
  }
}
