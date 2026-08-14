import { NextResponse } from 'next/server';
import { sendBookingEmail, BookingForm } from '@/utils/sendEmail';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const raw = body as Partial<BookingForm> | undefined;
    const data: BookingForm = {
      name: (raw?.name || '').toString().trim(),
      business: raw?.business ? String(raw.business).trim() : undefined,
      email: (raw?.email || '').toString().trim(),
      phone: raw?.phone ? String(raw.phone).trim() : undefined,
      service: (raw?.service as any) || 'not-sure',
      needs: Array.isArray(raw?.needs) ? raw!.needs.map(String) : [],
      website: raw?.website ? String(raw.website).trim() : undefined,
      message: (raw?.message || '').toString().trim(),
      budget: raw?.budget ? String(raw.budget).trim() : undefined,
    };

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    await sendBookingEmail(data);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('send-email error', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
