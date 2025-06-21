import { Resend } from 'resend';
import { config } from '../config/env';

const resend = new Resend(config.resendApiKey);

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  admissionClass: string;
  message: string;
}

export const sendInquiryEmail = async (data: EmailData) => {
  try {
    const { data: result, error } = await resend.emails.send({
      from: config.fromEmail,
      to: [config.toEmail],
      subject: `New Admission Inquiry - ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Admission Inquiry
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Student Information</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Admission Class:</strong> ${data.admissionClass}</p>
          </div>
          
          ${data.message ? `
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #92400e; margin-top: 0;">Additional Message</h3>
              <p style="color: #78350f; white-space: pre-wrap;">${data.message}</p>
            </div>
          ` : ''}
          
          <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #1e40af; margin: 0; font-size: 14px;">
              <strong>Action Required:</strong> Please respond to this inquiry within 24 hours.
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px;">
              This inquiry was submitted from the SGK School of Academy website.
            </p>
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }

    return result;
  } catch (error) {
    console.error('Email service error:', error);
    throw error;
  }
};

export const sendConfirmationEmail = async (data: EmailData) => {
  try {
    const { data: result, error } = await resend.emails.send({
      from: config.fromEmail,
      to: [data.email],
      subject: 'Thank you for your inquiry - SGK School of Academy',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            Thank You for Your Inquiry
          </h2>
          
          <p>Dear ${data.name},</p>
          
          <p>Thank you for your interest in SGK School of Academy. We have received your inquiry for admission to <strong>${data.admissionClass}</strong>.</p>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0369a1; margin-top: 0;">What happens next?</h3>
            <ul style="color: #0c4a6e;">
              <li>Our admissions team will review your inquiry within 24 hours</li>
              <li>We'll contact you at ${data.email} or ${data.phone} to discuss next steps</li>
              <li>You may be invited for a campus tour and meeting with our staff</li>
            </ul>
          </div>
          
          <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #92400e; margin: 0;">
              <strong>Inquiry Details:</strong><br>
              Student: ${data.name}<br>
              Class: ${data.admissionClass}<br>
              Contact: ${data.phone}
            </p>
          </div>
          
          <p>If you have any urgent questions, please don't hesitate to call us at <strong>+91 7676116565</strong>.</p>
          
          <p>Best regards,<br>
          <strong>SGK School of Academy</strong><br>
          Naduvathi, Soukya Road, Bengaluru 560067</p>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px;">
              This is an automated confirmation email. Please do not reply to this message.
            </p>
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Error sending confirmation email:', error);
      // Don't throw error for confirmation email as it's not critical
      return null;
    }

    return result;
  } catch (error) {
    console.error('Confirmation email service error:', error);
    // Don't throw error for confirmation email as it's not critical
    return null;
  }
}; 