import { NextResponse } from 'next/server';
import { client } from '../../../lib/contentful';

export async function GET() {
  try {
    const res = await client.getEntries({ content_type: 'category' });
    return NextResponse.json({ categories: res.items });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
  }
}
