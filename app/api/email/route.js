import { Resend } from "resend";
import WelcomeTemplate from "@/components/emails/WelcomeTemplate";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { u_name, u_email, u_phone, u_message } = await request.json();
  const fromEmail = process.env.RESEND_FROM || "Portfolio <onboarding@resend.dev>";
  const adminEmail = process.env.CONTACT_EMAIL || "rmshelar11@gmail.com";
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Email service is not configured. Add RESEND_API_KEY to enable contact delivery.", status: 500 },
      { status: 500 }
    );
  }

  const resend = new Resend(resendApiKey);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [adminEmail],
      subject: "Portfolio Contact Enquiry",
      react: WelcomeTemplate({
        u_name,
        u_email,
        u_phone,
        u_message,
        u_user: "admin",
        adminEmail,
      }),
    });

    const { error: uerror } = await resend.emails.send({
      from: fromEmail,
      to: [u_email],
      subject: "Thank you for contacting",
      react: WelcomeTemplate({
        u_name,
        u_email,
        u_phone,
        u_message,
        u_user: "user",
        adminEmail,
      }),
    });

    if (error || uerror) {
      return NextResponse.json({ error, status: 500 });
    }

    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error, status: 500 });
  }
}
