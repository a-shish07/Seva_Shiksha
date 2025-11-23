require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// Create uploads directory if it doesn't exist
const fs = require('fs');
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Configure nodemailer with Hostinger SMTP
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com', // Replace with your Hostinger SMTP host
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER || 'your-email@yourdomain.com', // Your Hostinger email
    pass: process.env.EMAIL_PASS || 'your-email-password' // Your email password or app password
  }
});

// API endpoint to send registration email
app.post('/api/send-registration-email', upload.single('paymentScreenshot'), async (req, res) => {
  try {
    const {
      formType,
      amount,
      formData,
      submissionDate,
      userAgent,
      timestamp
    } = req.body;

    const parsedFormData = JSON.parse(formData);
    const screenshotPath = req.file ? req.file.path : null;

    // Create email content
    let emailContent = `
      <h2>New Registration Submission</h2>
      <p><strong>Form Type:</strong> ${formType}</p>
      <p><strong>Amount:</strong> ₹${amount}</p>
      <p><strong>Submission Date:</strong> ${new Date(submissionDate).toLocaleString()}</p>
      <p><strong>Timestamp:</strong> ${timestamp}</p>
      <p><strong>User Agent:</strong> ${userAgent}</p>

      <h3>Form Details:</h3>
    `;

    // Add form data to email
    Object.entries(parsedFormData).forEach(([key, value]) => {
      if (key !== 'uploadedPhoto') { // Skip file fields for now
        emailContent += `<p><strong>${key}:</strong> ${value}</p>`;
      }
    });

    emailContent += `
      <br>
      <p>Please review the attached payment screenshot and form details.</p>
      <p>Best regards,<br>SEVA SHIKSHA Registration System</p>
    `;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@yourdomain.com',
      to: process.env.ADMIN_EMAIL || 'admin@yourdomain.com', // Email where you want to receive notifications
      subject: `New ${formType} Registration - ₹${amount}`,
      html: emailContent,
      attachments: screenshotPath ? [{
        filename: `payment-screenshot-${timestamp}.jpg`,
        path: screenshotPath
      }] : []
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);

    // Clean up uploaded file after email is sent
    if (screenshotPath) {
      setTimeout(() => {
        fs.unlink(screenshotPath, (err) => {
          if (err) console.error('Error deleting file:', err);
        });
      }, 5000); // Delete after 5 seconds
    }

    res.status(200).json({
      success: true,
      message: 'Registration email sent successfully',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send registration email',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;