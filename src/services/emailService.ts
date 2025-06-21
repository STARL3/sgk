import emailjs from '@emailjs/browser';

// Removed Resend logic. Email functions are now stubs.
export interface EmailData {
  name: string;
  email: string;
  phone: string;
  admissionClass: string;
  message: string;
}

export const sendInquiryEmail = async (data: EmailData) => {
  // Replace with your actual EmailJS values
  const SERVICE_ID = 'service_zwvz44h';
  const TEMPLATE_ID = 'template_9vztscq';
  const PUBLIC_KEY = 'DWsX12yrh81WDjsuE';

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, data as unknown as Record<string, unknown>, { publicKey: PUBLIC_KEY });
};

export const sendConfirmationEmail = async () => {
  // Email sending disabled
  return null;
}; 