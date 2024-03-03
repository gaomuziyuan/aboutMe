import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const transporter = nodemailer.createTransport({
    // transporter configuration
  });

  try {
    const { senderEmail, message } = req.body;

    const mailOptions = {
      from: "muziyuangao@gmail.com",
      to: senderEmail,
      subject: "New Message from Contact Form",
      text: message,
    };

    const emailResponse = await transporter.sendMail(mailOptions);

    console.log();

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
      data: emailResponse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: (error as Error).message,
    });
  }
}
