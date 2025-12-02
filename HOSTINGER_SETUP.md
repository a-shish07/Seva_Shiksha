# Hostinger Email Setup and Deployment Guide

## Overview

This guide covers setting up form email notifications for the Seva Shiksha website when hosted on Hostinger. Form submissions from StudentRegistration, MembershipRegistration, and ContactUs pages will be automatically sent to your admin email.

## Prerequisites

- Hostinger hosting account with domain
- Hostinger email account (or create one)
- Node.js installed locally for running the backend server
- All dependencies installed (`npm install`)

## Step 1: Create Hostinger Email Account

1. **Login to Hostinger hPanel**: https://hpanel.hostinger.com
2. **Navigate to Email**: Go to `Email` or `Emails` section
3. **Create Email Account**:
   - Click "Create Email"
   - Enter email address (e.g., `admin@yourdomain.com`, `support@yourdomain.com`)
   - Set a strong password
   - Note down the email and password

4. **Get SMTP Credentials**:
   - SMTP Host: `smtp.hostinger.com`
   - Port: `587` (TLS) or `465` (SSL)
   - Username: Your full email address
   - Password: Your email password

## Step 2: Configure Environment Variables

1. **Create `.env` file** in your project root (if not already created):
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` file** with your Hostinger credentials:
   ```env
   # Email Configuration (Hostinger SMTP)
   SMTP_HOST=smtp.hostinger.com
   EMAIL_USER=your-email@yourdomain.com
   EMAIL_PASS=your-email-password
   ADMIN_EMAIL=your-email@yourdomain.com

   # Server Configuration
   PORT=3001

   # Note: Replace placeholder values with your actual credentials
   ```

3. **Never commit `.env`** to version control - it contains sensitive information

## Step 3: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Express (backend framework)
- Nodemailer (email sending)
- CORS (cross-origin support)
- Dotenv (environment variables)

## Step 4: Test Email Configuration Locally

1. **Start the backend server**:
   ```bash
   npm run server
   ```
   
   You should see: `Server is running on port 3001`

2. **In another terminal, start the frontend**:
   ```bash
   npm run dev
   ```

3. **Test by submitting a form**:
   - Fill out the StudentRegistration or ContactUs form
   - Submit the form
   - Check your admin email for the notification

4. **If email doesn't arrive**:
   - Check server console logs for errors
   - Verify `.env` credentials are correct
   - Check spam/junk folder in email

## Step 5: Deploy to Hostinger

### Option A: Using Hostinger Node.js Hosting (Recommended)

1. **Upload Project Files**:
   - Zip your project (excluding `node_modules` and `.env`)
   - Upload via File Manager in hPanel
   - Extract in public_html or designated directory

2. **Install Node Packages**:
   ```bash
   npm install --production
   ```

3. **Create `.env` in hosting server** with your credentials

4. **Start Application**:
   - Hostinger provides methods to run Node.js apps
   - Check Hostinger documentation for your hosting type
   - Usually through Application Management

5. **Configure Domain**:
   - Point your domain to the Node.js application
   - Set up SSL certificate (usually auto-enabled)

### Option B: Using Hostinger with Subdomain for Backend

1. **Upload backend** to separate subdomain (e.g., `api.yourdomain.com`)
2. **Update fetch URLs** in frontend to use full domain:
   ```javascript
   const emailResponse = await fetch('https://api.yourdomain.com/api/send-registration-email', {
   ```

3. **Deploy frontend** separately to main domain

## Step 6: Update Fetch URLs for Production

**Important**: Change localhost URLs to your domain URLs

In `src/pages/StudentRegistration.jsx`:
```javascript
// Change from:
const emailResponse = await fetch('http://localhost:3001/api/send-registration-email', {

// To:
const emailResponse = await fetch('https://yourdomain.com/api/send-registration-email', {
```

Do the same for:
- `src/pages/MembershipRegistration.jsx`
- `src/pages/ContactUs.jsx`

## Email Features Configured

### 1. Student Registration Emails
- Triggered when student submits registration form
- Contains: Full name, mobile, email, address, education details
- Amount: ₹999

### 2. Membership Registration Emails
- Triggered when user registers for membership
- Contains: Personal info, photo filename, membership type
- Amount: ₹2499 or ₹9999 (depending on membership type)

### 3. Contact Form Emails
- Triggered when users submit contact form
- Contains: Name, email, phone, inquiry type, message
- Admin can reply directly using the "Reply-To" field

## API Endpoints

### Send Registration Email
```
POST /api/send-registration-email
Content-Type: application/json

{
  "formType": "Student Registration",
  "amount": 999,
  "formData": "{...JSON string of form data...}",
  "submissionDate": "2025-12-02T...",
  "userAgent": "Mozilla/5.0...",
  "timestamp": 1701508800000
}
```

### Send Contact Email
```
POST /api/send-contact-email
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "subject": "Query about courses",
  "message": "I want to know more...",
  "inquiryType": "general",
  "submissionDate": "2025-12-02T...",
  "userAgent": "Mozilla/5.0...",
  "timestamp": 1701508800000
}
```

## Troubleshooting

### Email Not Sending
1. **Check `.env` file**:
   - Verify EMAIL_USER and EMAIL_PASS are correct
   - Ensure SMTP_HOST is `smtp.hostinger.com`

2. **Check Email Account**:
   - Verify email account exists in Hostinger
   - Ensure account is not suspended
   - Try changing password in Hostinger panel

3. **Check Server Logs**:
   - Look for error messages in server console
   - Check if port 3001 is accessible
   - Verify CORS is properly configured

4. **Authentication Errors**:
   - If using 2FA, generate app-specific password in Hostinger
   - Use app password instead of regular password

### Form Submissions Not Reaching Backend
1. **Check Network Tab** in browser DevTools
   - Look for failed fetch requests
   - Check if server is running
   - Verify correct API URLs

2. **CORS Issues**:
   - Check if backend allows frontend domain
   - Update CORS configuration in `server.js` if needed

3. **Port Conflicts**:
   - Ensure port 3001 is available
   - Check if another application is using the port

## Security Best Practices

1. **Never commit `.env` to git**:
   ```bash
   # Already in .gitignore, but verify
   ```

2. **Use strong email passwords**
   - Enable 2FA in Hostinger for account security

3. **Regularly rotate email passwords**

4. **Monitor email account** for suspicious activity

5. **Use HTTPS only** on production

## Support and Resources

- **Hostinger Docs**: https://support.hostinger.in/
- **Nodemailer Docs**: https://nodemailer.com/
- **Express Docs**: https://expressjs.com/

## Common Issues and Solutions

### Issue: "relayhost is too restrictive"
**Solution**: This is usually a Hostinger security setting. Contact Hostinger support.

### Issue: "535 5.7.8 Error: authentication failed"
**Solution**: 
- Verify credentials are correct
- Check if 2FA is enabled (use app password)
- Wait a few minutes and retry

### Issue: CORS errors in console
**Solution**:
- Ensure backend is running
- Check frontend URL matches CORS configuration
- Verify fetch URL is correct

## Next Steps

1. Configure email templates for better styling
2. Add email verification for subscribers
3. Set up automated responses
4. Monitor delivery rates
5. Create backup email account for redundancy
