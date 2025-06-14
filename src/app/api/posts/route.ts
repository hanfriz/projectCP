import { NextResponse } from 'next/server';
import { createClient } from 'contentful-management';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const client = createClient({
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN!,
    });

    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID!);
    const environment = await space.getEnvironment('master');

    // Simulasi RichText format yang sesuai Contentful
    const richTextContent = {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'paragraph',
          data: {},
          content: [
            {
              nodeType: 'text',
              value: data.content || '',
              marks: [],
              data: {},
            },
          ],
        },
      ],
    };

    const entry = await environment.createEntry('blogPost', {
      fields: {
        title: { 'en-US': data.title },
        slug: { 'en-US': data.title.toLowerCase().replace(/\s+/g, '-') },
        content: { 'en-US': richTextContent },
        author: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: data.author,
            },
          },
        },
        category: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: data.category,
            },
          },
        },
      },
    });

    // Optional logging
    console.log('Entry created:', entry?.sys?.id);

    const publishedEntry = await entry.publish();

    return NextResponse.json({ message: 'Post created successfully', entry: publishedEntry });
  } catch (error: any) {
    console.error('🔥 POST /api/posts error:', error.message || error);
    return NextResponse.json(
      { message: 'Failed to create post', error: error.message || 'Unknown error' },
      { status: 500 }
    );
  }
}
