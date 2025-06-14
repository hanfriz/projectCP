import { createClient, Entry } from 'contentful';


if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
  console.error('❌ Missing Contentful environment variables');
  throw new Error('Missing Contentful ENV variables');
}

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

// Ambil semua post
export async function getAllPosts() {
  const res = await client.getEntries({
    content_type: 'blogPost',
    include: 2,
    order: ['-sys.createdAt'],
  });

  return res.items;
}
 // Ambil semua author
export async function getAllAuthors() {
  const res = await client.getEntries({
    content_type: 'author',
    order: ['fields.name'],
  });

  return res.items;
}

// Ambil post berdasarkan slug
export async function getPostBySlug(slug: string) {
  const res = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    include: 2,
  });

  return res.items[0];
}

// Ambil semua kategori
export async function getAllCategories() {
  const res = await client.getEntries({
    content_type: 'category',
  });

  return res.items;
}

// Ambil post berdasarkan kategori slug
export async function getPostsByCategorySlug(slug: string) {
  const res = await client.getEntries({
    content_type: 'category',
    'fields.slug': slug,
  });

  const category = res.items[0] as Entry<any>;

  if (!category) return [];

  const postsRes = await client.getEntries({
    content_type: 'blogPost',
    include: 2,
    order: ['-sys.createdAt'],
    'fields.category.sys.id': category.sys.id, // ✅ Ini langsung, tanpa kurung siku
  });

  
  
  return postsRes.items;
}
