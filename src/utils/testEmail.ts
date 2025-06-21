import { sendInquiryEmail } from '../services/emailService';

// Test function to verify email functionality
export const testEmailFunctionality = async () => {
  const testData = {
    name: 'Test Student',
    email: 'test@example.com',
    phone: '9876543210',
    admissionClass: 'Grade 5',
    message: 'This is a test inquiry to verify email functionality.'
  };

  try {
    console.log('Testing email functionality...');
    const result = await sendInquiryEmail(testData);
    console.log('Email sent successfully:', result);
    return true;
  } catch (error) {
    console.error('Email test failed:', error);
    return false;
  }
};

// Call this function in browser console to test
// testEmailFunctionality(); 