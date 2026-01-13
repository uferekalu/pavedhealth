import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function sanitizeInput(input: string, maxLength = 1000): string {
    return (input || "")
        .replace(/<[^>]*>/g, "")     
        .replace(/\s+/g, " ")         
        .trim()
        .slice(0, maxLength);
}

export async function POST(req: NextRequest) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        const body = await req.json();
        let { email, subject, message, service } = body;

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json({ error: "Valid email is required" }, { status: 400 });
        }

        if (!subject || subject.trim().length < 3) {
            return NextResponse.json({ error: "Subject is required (min 3 chars)" }, { status: 400 });
        }

        if (!message || message.trim().length < 10) {
            return NextResponse.json({ error: "Message is required (min 10 chars)" }, { status: 400 });
        }

        email = sanitizeInput(email, 254);
        subject = sanitizeInput(subject, 200);
        message = sanitizeInput(message, 5000);
        service = sanitizeInput(service || "General", 100);

        const { data, error } = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || "Paved Healthcare Consult <onboarding@resend.dev>",  // Use verified sender
            to: ["hope@pavedhealthcare.com"],
            replyTo: email,
            subject: `New Consult Request: ${subject} (${service})`,
            text: `
Service: ${service}
From: ${email}
Subject: ${subject}

Message:
${message}
      `,
            html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
  <h2 style="color: #333;">New Consultation Request</h2>
  <p><strong>Service:</strong> ${service}</p>
  <p><strong>From:</strong> ${email}</p>
  <p><strong>Subject:</strong> ${subject}</p>
  <hr style="border-top: 1px solid #eee;" />
  <p style="white-space: pre-wrap;">${message.replace(/\n/g, "<br>")}</p>
</div>
      `,
        });

        if (error) {
            throw new Error(error.message);
        }

        return NextResponse.json({ success: true, message: "Message sent successfully!", id: data?.id });
    } catch (error: any) {
        console.error("Resend error:", error);
        return NextResponse.json(
            { error: "Failed to send message. Please try again later." },
            { status: 500 }
        );
    }
}