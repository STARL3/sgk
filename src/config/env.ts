export const config = {
  resendApiKey: import.meta.env.VITE_RESEND_API_KEY || '',
  fromEmail: import.meta.env.VITE_FROM_EMAIL || 'noreply@yourdomain.com',
  toEmail: import.meta.env.VITE_TO_EMAIL || 'sgkschoolofacademy@gmail.com'
}; 