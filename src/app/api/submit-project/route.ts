import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Basic validation
    const required = ['full_name', 'business_name', 'industry', 'selected_package', 'website_type', 'whatsapp_number', 'email', 'launch_timeline'];
    if (JSON.stringify(body).length > 10000) {
      return NextResponse.json({ error: 'Request too large.' }, { status: 413 });
    }

    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field.replace(/_/g, ' ')}` },
          { status: 400 }
        );
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const supabase = createAdminClient();
    const { error } = await supabase.from('leads').insert({
      full_name: body.full_name,
      business_name: body.business_name,
      industry: body.industry,
      selected_package: body.selected_package,
      website_type: body.website_type,
      has_existing_website: body.has_existing_website || false,
      existing_website_url: body.existing_website_url || null,
      whatsapp_number: body.whatsapp_number,
      email: body.email,
      launch_timeline: body.launch_timeline,
      project_requirement: body.project_requirement || null,
      status: 'New',
    });

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { error: 'Failed to submit project request. Please try again.' },
        { status: 500 }
      );
    }

    // Trigger email notification (optional - if configured)
    try {
      if (process.env.RESEND_API_KEY) {
        await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/notify`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: body.full_name,
            business: body.business_name,
            package: body.selected_package,
            email: body.email,
          }),
        });
      }
    } catch (emailError) {
      // Don't fail the submission if email notification fails
      console.error('Email notification error:', emailError);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Submit project error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
