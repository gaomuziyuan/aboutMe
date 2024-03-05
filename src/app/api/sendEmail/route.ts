import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import aws from "aws-sdk";

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export async function POST(req: NextRequest, res: NextResponse) {
  const ses = new aws.SES({ apiVersion: "2010-12-01" });
  const transporter = nodemailer.createTransport({
    SES: { ses, aws },
  });
  // const transporter = nodemailer.createTransport({
  //   host: "email-smtp.us-west-1.amazonaws.com",
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: process.env.AWS_SMTP_KEY_ID, // Access key ID
  //     pass: process.env.AWS_SMTP_ACCESS_KEY, // Secret access key
  //   },
  // });

  if (req.method === "POST") {
    try {
      const body = await req.json();
      const { senderEmail, message } = body;

      const mailOptions = {
        from: "muziyuangao@gmail.com",
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
      console.log(error);
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
