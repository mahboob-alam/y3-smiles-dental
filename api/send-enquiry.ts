import { Resend } from "resend";

// Expected environment variable: RESEND_API_KEY
// Configure on Vercel dashboard: Project Settings -> Environment Variables

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { from_name, from_email, phone, service, message } = req.body || {};

    if (!from_name || !from_email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const subject = `New enquiry from ${from_name}`;

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111827;">
        <h2 style="margin: 0 0 12px;">New Enquiry</h2>
        <p><strong>Name:</strong> ${from_name}</p>
        <p><strong>Email:</strong> ${from_email}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Service:</strong> ${service || "-"}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `;

    const sendResult = await resend.emails.send({
      from: "Y3 Smiles Dental <onboarding@resend.dev>",
      to: ["smile@y3smilesdental.com.au"],
      reply_to: from_email,
      subject,
      html,
    });

    if (sendResult.error) {
      console.error("Resend error:", sendResult.error);
      return res.status(500).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("send-enquiry error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
