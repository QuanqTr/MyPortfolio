import nodemailer from 'nodemailer';
import type { InsertContactMessage } from '@shared/schema';

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor(config: EmailConfig) {
    this.transporter = nodemailer.createTransport(config);
  }

  async sendContactMessage(message: InsertContactMessage, toEmail: string) {
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_FROM || 'noreply@portfolio.com'}>`,
      to: toEmail,
      subject: `New Contact Message: ${message.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
              New Contact Message from Portfolio
            </h2>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #666; margin-bottom: 10px;">Contact Information:</h3>
              <p style="margin: 5px 0;"><strong>Name:</strong> ${message.name}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${message.email}</p>
              <p style="margin: 5px 0;"><strong>Subject:</strong> ${message.subject}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #666; margin-bottom: 10px;">Message:</h3>
              <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
                <p style="margin: 0; white-space: pre-wrap;">${message.message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
              <p>This message was sent from your portfolio contact form.</p>
              <p>Reply directly to this email to respond to ${message.name}.</p>
            </div>
          </div>
        </div>
      `,
      replyTo: message.email
    };

    try {
      const result = await this.transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', result.messageId);
      return result;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }

  async verifyConnection() {
    try {
      await this.transporter.verify();
      console.log('Email service connection verified');
      return true;
    } catch (error) {
      console.error('Email service connection failed:', error);
      return false;
    }
  }
}

// Create email service instance if configuration is available
export function createEmailService(): EmailService | null {
  const emailConfig = {
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER || '',
      pass: process.env.EMAIL_PASS || ''
    }
  };

  // Only create service if we have email credentials
  if (emailConfig.auth.user && emailConfig.auth.pass) {
    return new EmailService(emailConfig);
  }

  console.warn('Email credentials not configured. Email sending will be disabled.');
  return null;
}