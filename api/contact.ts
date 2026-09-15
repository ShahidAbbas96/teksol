import nodemailer from "nodemailer";

interface VercelRequest {
  method?: string;
  body?: unknown;
}

interface VercelResponse {
  status(code: number): VercelResponse;
  json(data: unknown): void;
}

interface ContactPayload {
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  industry?: string;
  employees?: string;
  currentSoftware?: string;
  serviceRequired?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const body = (typeof req.body === "string" ? JSON.parse(req.body) : req.body) as ContactPayload;
  const {
    fullName,
    email,
    phone,
    company,
    industry,
    employees,
    currentSoftware,
    serviceRequired,
    message,
  } = body ?? {};

  if (!fullName?.trim() || !email?.trim() || !company?.trim() || !serviceRequired?.trim() || !message?.trim()) {
    res.status(400).json({ error: "Missing required fields." });
    return;
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    res.status(400).json({ error: "Invalid email address." });
    return;
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const notifyTo = process.env.CONTACT_NOTIFY_EMAIL || smtpUser;

  if (!smtpUser || !smtpPassword) {
    console.error("Contact form: SMTP_USER / SMTP_PASSWORD env vars are not set.");
    res.status(500).json({ error: "Email is not configured yet." });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: { user: smtpUser, pass: smtpPassword },
  });

  const summaryLines = [
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone || "-"}`,
    `Company: ${company}`,
    `Industry: ${industry || "-"}`,
    `Number of Employees: ${employees || "-"}`,
    `Current ERP / Software: ${currentSoftware || "-"}`,
    `Service Required: ${serviceRequired}`,
    "",
    "Message:",
    message,
  ];

  try {
    await transporter.sendMail({
      from: `"TechSols Website" <${smtpUser}>`,
      to: notifyTo,
      replyTo: email,
      subject: `New ERP consultation request from ${fullName} (${company})`,
      text: summaryLines.join("\n"),
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    res.status(502).json({ error: "Failed to send email." });
  }
}
