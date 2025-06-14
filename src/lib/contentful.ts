import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export default client;

export async function getAllPosts() {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    order: ['-sys.createdAt'],
    include: 2,
  });
  return entries.items;
}

export async function getAllCategories() {
  const entries = await client.getEntries({
    content_type: 'category',
    order: ['fields.name'],
  });
  return entries.items;
}

export async function getAllAuthors() {
  const entries = await client.getEntries({
    content_type: 'author',
    order: ['fields.name'],
  });
  return entries.items;
}

export async function getAllPostsByCategory(categorySlug: string) {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    'fields.category.fields.slug': categorySlug,
    include: 2,
    order: ['-sys.createdAt'],
  });
  return entries.items;
}

export async function getPostBySlug(slug: string) {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    include: 2,
    limit: 1,
  });

  return entries.items[0];
}
