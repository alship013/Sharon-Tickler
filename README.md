# Random Fact Email Sender

A simple web application that sends random interesting facts via email to sj@genco-oil.com.

## Setup Instructions

### 1. Configure EmailJS
The app uses EmailJS to send emails directly from the browser. Follow these steps:

1. **Sign up for EmailJS**: Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account.

2. **Create an Email Service**:
   - In EmailJS dashboard, go to "Email Services"
   - Add your email service (Gmail, Outlook, etc.)
   - Follow the instructions to connect your email account

3. **Create an Email Template**:
   - Go to "Email Templates"
   - Create a new template with these parameters:
   ```
   To: {{to_email}}
   Subject: {{subject}}
   Content:
   
   Hi there!
   
   Here's an interesting random fact for you:
   
   {{fact}}
   
   Best regards,
   {{from_name}}
   ```

4. **Get Your Credentials**:
   - Note your **Service ID**, **Template ID**, and **Public Key** from the EmailJS dashboard

### 2. Update the JavaScript
Open `script.js` and replace these placeholder values:
- Replace `YOUR_PUBLIC_KEY_HERE` with your EmailJS public key
- Replace `YOUR_SERVICE_ID` with your service ID
- Replace `YOUR_TEMPLATE_ID` with your template ID

### 3. Run the Application
Simply open `index.html` in your web browser. No server required!

## Features
- **30 Random Facts**: Collection of interesting and educational facts
- **Preview**: See the fact before sending
- **Modern UI**: Clean, responsive design with gradient backgrounds
- **Status Messages**: Clear feedback on email sending status
- **Mobile Friendly**: Works on all devices

## How to Use
1. Click "Generate Fact" to see a random fact
2. Click "Send Email" to send the current fact to sj@genco-oil.com
3. Wait for the confirmation message

## File Structure
```
├── index.html    # Main HTML file
├── script.js     # JavaScript functionality
├── style.css     # Styling
└── README.md     # This file
```

## Security Notes
- EmailJS handles the email sending securely without exposing your email credentials
- The recipient email is hardcoded as requested
- No server-side code required - everything runs in the browser

## Troubleshooting
- If emails don't send, check your EmailJS configuration
- Ensure your email service is properly connected in EmailJS
- Verify the template parameters match the code
- Check browser console for any error messages