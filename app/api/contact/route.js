import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { captchaToken, ...formData } = body;

    // 1. Verify the reCAPTCHA token with Google
    if (!captchaToken) {
      return NextResponse.json(
        { error: "Missing CAPTCHA token." },
        { status: 400 }
      );
    }

    const verifyRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: captchaToken,
        }),
      }
    );

    const verifyData = await verifyRes.json();

    // reCAPTCHA v3 returns a score 0.0 (bot) – 1.0 (human)
    // 0.5 is a safe threshold; raise to 0.7 if you still get spam
    if (!verifyData.success || verifyData.score < 0.5) {
      console.warn("reCAPTCHA failed:", verifyData);
      return NextResponse.json(
        { error: "CAPTCHA verification failed. Please try again." },
        { status: 403 }
      );
    }

    // 2. Forward the clean form data to your mail API
    const mailRes = await fetch(
      "https://medtrixhealthcare.com/corporate-websiteapi/api/contact/send",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    if (!mailRes.ok) {
      throw new Error("Mail API returned an error.");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
