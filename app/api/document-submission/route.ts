// app/api/document-submission/route.ts
import { NextRequest, NextResponse } from "next/server";
import formidable from "formidable";
import fs from "fs";
import nodemailer from "nodemailer";
import path from "path";

// Configure formidable to handle file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  try {
    // Parse form data
    const form = formidable({
      multiples: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB
      maxFields: 100,
    });

    // Convert stream to promise
    const parseForm = (req: any) => {
      return new Promise<{ fields: any; files: any }>((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) reject(err);
          resolve({ fields, files });
        });
      });
    };

    // Parse the form data
    const { fields, files } = await parseForm(req);

    // Validate required fields
    const requiredFields = ["fullName", "email", "serviceType"];
    for (const field of requiredFields) {
      if (!fields[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(fields.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailContent = `
      New Document Submission Received
      
      Client Details:
      Name: ${fields.fullName}
      Email: ${fields.email}
      Phone: ${fields.phone || "Not provided"}
      Service Type: ${fields.serviceType}
      
      Special Instructions:
      ${fields.specialInstructions || "None provided"}
      
      Number of Files: ${Object.keys(files).length}
    `;

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: parseInt(process.env.SMTP_PORT!),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
    });

    // Prepare email options
    const mailOptions: any = {
      from: `"Triple M Technology Document Services" <${process.env.EMAIL_USER}>`,
      to: process.env.COMPANY_EMAIL!,
      subject: "New Document Submission - " + fields.serviceType,
      text: emailContent,
      attachments: [],
    };

    // Add files as attachments
    for (const key in files) {
      const file = files[key];
      if (file && file.filepath) {
        mailOptions.attachments.push({
          filename: file.originalFilename,
          path: file.filepath,
        });
      }
    }

    // Send email with attachments
    await transporter.sendMail(mailOptions);

    // Clean up uploaded files
    for (const key in files) {
      const file = files[key];
      if (file && file.filepath) {
        try {
          fs.unlinkSync(file.filepath);
        } catch (err) {
          console.error("Error deleting file:", err);
        }
      }
    }

    return NextResponse.json(
      { message: "Documents submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing document submission:", error);
    return NextResponse.json(
      { error: "Failed to process document submission" },
      { status: 500 }
    );
  }
}
