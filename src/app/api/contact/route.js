import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Change after domain setup
      to: ["kzhimel129@gmail.com"], // YOUR EMAIL HERE
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0F172A; color: #E5E7EB; padding: 32px; border-radius: 12px;">
          <h2 style="color: #38BDF8; margin-bottom: 24px;">New Contact Form Message</h2>
          <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; margin-bottom: 16px;">
            <p style="margin: 0 0 8px; color: #94A3B8; font-size: 12px;">FROM</p>
            <p style="margin: 0; font-weight: 600;">${name}</p>
            <p style="margin: 4px 0 0; color: #38BDF8; font-size: 14px;">${email}</p>
          </div>
          <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px;">
            <p style="margin: 0 0 8px; color: #94A3B8; font-size: 12px;">MESSAGE</p>
            <p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          <p style="margin-top: 24px; color: #94A3B8; font-size: 12px;">
            Sent from your portfolio contact form
          </p>
        </div>
      `,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }

    return Response.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}