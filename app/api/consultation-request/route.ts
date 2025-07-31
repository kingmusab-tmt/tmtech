// app/api/consultation-request/route.ts (updated with nodemailer)
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
      "serviceType",
      "projectDetails",
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
      New Consultation Request Received
      
      Client Details:
      Name: ${body.fullName}
      Email: ${body.email}
      Phone: ${body.phone}
      Company: ${body.company || "Not provided"}
      
      Service Requested:
      Service Type: ${body.serviceType}
      Project Timeline: ${body.timeline || "Not specified"}
      Budget Range: ${body.budget || "Not specified"}
      
      Project Details:
      ${body.projectDetails}
    `;

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Triple Multipurpose Technology" <${process.env.EMAIL_USER}>`,
      to: process.env.COMPANY_EMAIL!,
      subject: "New Consultation Request - " + body.serviceType,
      text: emailContent,
    });

    return NextResponse.json(
      { message: "Consultation request submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing consultation request:", error);
    return NextResponse.json(
      { error: "Failed to process consultation request" },
      { status: 500 }
    );
  }
}
