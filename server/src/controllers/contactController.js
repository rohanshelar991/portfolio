import { z } from 'zod';
import { createMailer } from '../config/mailer.js';

const contactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  subject: z.string().min(3).max(140),
  message: z.string().min(10).max(3000),
});

export async function sendContactEmail(req, res) {
  const parseResult = contactSchema.safeParse(req.body);

  if (!parseResult.success) {
    return res.status(400).json({ message: 'Invalid form details', errors: parseResult.error.flatten() });
  }

  const transporter = createMailer();

  if (!transporter) {
    return res.status(500).json({
      message: 'Email transport is not configured. Set MAIL_* env variables on the backend.',
    });
  }

  const { name, email, subject, message } = parseResult.data;

  await transporter.sendMail({
    from: `Portfolio Contact <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO,
    replyTo: email,
    subject: `[Portfolio Contact] ${subject}`,
    text: `New portfolio inquiry\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    html: `<h2>New Portfolio Inquiry</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
  });

  return res.status(200).json({ message: 'Message sent successfully' });
}
