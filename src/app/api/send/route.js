import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  // 1. Initialize Resend INSIDE the function (Safety Check)
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "Missing Resend API Key" }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.FROM_EMAIL;

  try {
    const { email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting me!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}