import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const apiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL;

    if (!apiKey || !notificationEmail) {
      console.log('Email notification not configured. Skipping.');
      return NextResponse.json({ skipped: true });
    }

    // Send email via Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'WEXELO Notifications <notifications@wexelo.com>',
        to: [notificationEmail],
        subject: `New Project Request: ${body.business} (${body.package})`,
        html: `
          <h2>New Project Request</h2>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Business:</strong> ${body.business}</p>
          <p><strong>Package:</strong> ${body.package}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p>Login to the <a href="https://wexelo.com/admin">admin dashboard</a> to view full details.</p>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Resend API error:', errorData);
      return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Notification error:', err);
    return NextResponse.json({ error: 'Notification failed' }, { status: 500 });
  }
}
