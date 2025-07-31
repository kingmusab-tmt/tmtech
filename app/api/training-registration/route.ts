// app/api/training-registration/route.ts (updated with nodemailer)
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate required fields
    const requiredFields = [
      "fullName",
      "email",
      "phone",
      "trainingProgram",
      "experienceLevel",
    ];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailContent = `
      New Training Registration Received
      
      Participant Details:
      Name: ${body.fullName}
      Email: ${body.email}
      Phone: ${body.phone}
      Company: ${body.company || "Not provided"}
      
      Training Program:
      Program ID: ${body.trainingProgram}
      Program Name: ${body.trainingDetails?.name || "Not specified"}
      Category: ${body.trainingDetails?.category || "Not specified"}
      
      Registration Details:
      Experience Level: ${body.experienceLevel}
      Preferred Start Date: ${body.startDate || "Not specified"}
      Special Requirements: ${body.specialRequirements || "None provided"}
    `;

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: parseInt(process.env.SMTP_PORT!),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Triple Multipurpose Technology Training" <${process.env.EMAIL_USER}>`,
      to: process.env.COMPANY_EMAIL!,
      subject: "New Training Registration - " + body.trainingDetails?.name,
      text: emailContent,
    });

    return NextResponse.json(
      { message: "Training registration submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing training registration:", error);
    return NextResponse.json(
      { error: "Failed to process training registration" },
      { status: 500 }
    );
  }
}
