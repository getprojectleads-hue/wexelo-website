/**
 * Email notification utility for WEXELO.
 * 
 * This module supports sending email notifications when new project requests are received.
 * 
 * ## Setup Instructions:
 * 
 * ### Option A: Resend (Recommended)
 * 1. Sign up at https://resend.com
 * 2. Get your API key from the dashboard
 * 3. Verify your domain (or use the sandbox for testing)
 * 4. Set environment variables:
 *    - RESEND_API_KEY=re_your_api_key
 *    - NOTIFICATION_EMAIL=admin@wexelo.com
 * 
 * ### Option B: Custom SMTP
 * Modify the /api/notify route to use nodemailer or similar.
 * Install: npm install nodemailer
 * Set: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
 * 
 * ### Option C: Webhook
 * Set up a webhook to Zapier/Make for email forwarding.
 * Modify /api/notify to POST to your webhook URL.
 */

export interface NotificationPayload {
  name: string;
  business: string;
  package: string;
  email: string;
  whatsapp?: string;
}

export async function sendNotification(payload: NotificationPayload): Promise<boolean> {
  try {
    const response = await fetch('/api/notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return response.ok;
  } catch {
    return false;
  }
}
