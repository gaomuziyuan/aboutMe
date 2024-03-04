import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest, res: NextResponse) {
  const transporter = nodemailer.createTransport({
    // transporter configuration
  });

  if (req.method === "POST") {
    try {
      const body = await req.json();
      const { senderEmail, message } = body;

      const mailOptions = {
        from: "muziyuangao@example.com",
        to: senderEmail,
        subject: "New Message from Contact Form",
        text: message,
      };

      const emailResponse = await transporter.sendMail(mailOptions);

      return new NextResponse(
        JSON.stringify({
          success: true,
          message: "Email sent successfully",
          data: emailResponse,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Failed to send email",
          error: (error as Error).message,
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  } else {
    return new NextResponse(null, { status: 405 });
  }
}
