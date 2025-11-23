# Email Setup Guide for SEVA SHIKSHA Registration System

This guide explains how to configure email notifications for form submissions using Hostinger's email hosting service.

## Prerequisites

1. **Hostinger Email Account**: You need an active email account with Hostinger
2. **Domain**: Your domain should be properly configured with Hostinger
3. **Node.js**: Backend server requires Node.js to run

## Configuration Steps

### 1. Environment Variables Setup

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your Hostinger email credentials:
   ```env
   # Email Configuration (Hostinger SMTP)
   SMTP_HOST=smtp.hostinger.com
   EMAIL_USER=your-email@yourdomain.com
   EMAIL_PASS=your-email-password
   ADMIN_EMAIL=admin@yourdomain.com

   # Server Configuration
   PORT=3001
   ```

### 2. Hostinger Email Configuration

1. **Login to Hostinger**: Go to your Hostinger control panel
2. **Navigate to Emails**: Find the "Emails" section in your hosting control panel
3. **Create/Update Email Account**:
   - If you don't have an email account, create one
   - Note down the email address and password
4. **SMTP Settings**: Hostinger typically uses:
   - **SMTP Host**: `smtp.hostinger.com`
   - **Port**: `587` (TLS) or `465` (SSL)
   - **Authentication**: Required

### 3. Update Environment Variables

Replace the placeholder values in `.env`:

- `EMAIL_USER`: Your full email address (e.g., `admin@sevashiksha.com`)
- `EMAIL_PASS`: Your email account password
- `ADMIN_EMAIL`: The email where you want to receive registration notifications

### 4. Install Dependencies

```bash
npm install
```

### 5. Test Email Configuration

1. Start the backend server:
   ```bash
   npm run server
   ```

2. Test the email functionality by submitting a registration form

## Email Content

When a user submits a registration form with payment screenshot, you'll receive an email containing:

- **Form Type**: (Student Registration, Membership, etc.)
- **Amount**: Payment amount
- **All Form Data**: Complete form submission details
- **Payment Screenshot**: Attached image file
- **Submission Details**: Timestamp, user agent, etc.

## Troubleshooting

### Common Issues

1. **Authentication Failed**:
   - Verify your email credentials
   - Check if 2FA is enabled (may need app password)
   - Ensure SMTP settings are correct

2. **Emails Not Sending**:
   - Check server logs for error messages
   - Verify firewall settings allow SMTP connections
   - Confirm email account has sending permissions

3. **File Upload Issues**:
   - Ensure `uploads/` directory exists and is writable
   - Check file size limits (currently 5MB)
   - Verify image file types are accepted

### Testing Email Configuration

You can test the email setup by:

1. Starting the development server: `npm run dev:full`
2. Submitting a test registration form
3. Checking your admin email for the notification

## Security Notes

- Never commit the `.env` file to version control
- Use strong passwords for email accounts
- Consider using app passwords if 2FA is enabled
- Regularly rotate email passwords

## Support

If you encounter issues with Hostinger email configuration:

1. Check Hostinger's email documentation
2. Contact Hostinger support for SMTP settings
3. Verify your domain's DNS records are properly configured

## Alternative Email Services

If Hostinger email doesn't work, you can also use:

- **SendGrid**: Professional email service
- **Mailgun**: Transactional email service
- **AWS SES**: Amazon's email service
- **Gmail SMTP**: For testing purposes

Each service would require updating the SMTP configuration in `server.js`.