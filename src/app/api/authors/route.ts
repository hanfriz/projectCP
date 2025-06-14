
import { NextResponse } from 'next/server';
import { client } from '../../../lib/contentful';

export async function GET() {
  try {
    const res = await client.getEntries({
      content_type: 'author',
    });

    return NextResponse.json({ authors: res.items });
  } catch (error) {
    console.error('Error fetching authors:', error);
    return new NextResponse('Failed to fetch authors', { status: 500 });
  }
}
