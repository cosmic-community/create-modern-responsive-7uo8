import { NextRequest, NextResponse } from 'next/server';
import { submitJoinRequest } from '@/lib/cosmic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { full_name, phone, email, skill_level, message } = body;

    if (!full_name || !phone || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await submitJoinRequest({
      full_name,
      phone,
      email,
      skill_level: skill_level || 'Beginner',
      message: message || '',
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Join request error:', error);
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
}