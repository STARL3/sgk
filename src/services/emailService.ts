// Removed Resend logic. Email functions are now stubs.
export interface EmailData {
  name: string;
  email: string;
  phone: string;
  admissionClass: string;
  message: string;
}

export const sendInquiryEmail = async () => {
  // Email sending disabled
  return null;
};

export const sendConfirmationEmail = async () => {
  // Email sending disabled
  return null;
}; 