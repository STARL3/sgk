# Resend Email Integration Setup

This project now includes Resend email integration for the inquiry form. Follow these steps to set it up:

## 1. Get Your Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Go to your dashboard and create an API key
3. Copy the API key (it starts with `re_`)

## 2. Set Up Environment Variables

Create a `.env` file in the root of your project with the following variables:

```env
VITE_RESEND_API_KEY=your_resend_api_key_here
VITE_FROM_EMAIL=noreply@yourdomain.com
VITE_TO_EMAIL=sgkschoolofacademy@gmail.com
```

### Environment Variables Explained:

- `VITE_RESEND_API_KEY`: Your Resend API key (required)
- `VITE_FROM_EMAIL`: The email address that will appear as the sender (should be a verified domain in Resend)
- `VITE_TO_EMAIL`: The email address where inquiry submissions will be sent (default: sgkschoolofacademy@gmail.com)

## 3. Domain Verification

For the `VITE_FROM_EMAIL` to work, you need to verify your domain in Resend:

1. Go to your Resend dashboard
2. Navigate to "Domains"
3. Add and verify your domain
4. Use an email from your verified domain as `VITE_FROM_EMAIL`

## 4. Testing

1. Start your development server: `npm run dev`
2. Fill out the inquiry form on your website
3. Submit the form
4. Check that:
   - You receive an inquiry email at `VITE_TO_EMAIL`
   - The user receives a confirmation email at their email address

## 5. Production Deployment

When deploying to production:

1. Set the environment variables in your hosting platform (Netlify, Vercel, etc.)
2. Make sure your domain is verified in Resend
3. Test the form functionality in production

## Troubleshooting

- **API Key Issues**: Make sure your API key is correct and has the necessary permissions
- **Domain Issues**: Ensure your sending domain is verified in Resend
- **Email Not Received**: Check spam folders and Resend dashboard for delivery status
- **CORS Issues**: Resend API calls are made from the client side, so ensure your domain is allowed

## Security Notes

- Never commit your `.env` file to version control
- The API key is exposed to the client side (this is normal for Vite apps)
- Consider implementing rate limiting on the form to prevent abuse
- Monitor your Resend usage to avoid unexpected charges 