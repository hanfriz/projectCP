// src/app/blog/[categorySlug]/page.tsx

import { getAllPostsByCategory } from '../../../../lib/contentful';
import BlogClient from '../../../../components/BlogClient';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';

// Definisikan tipe untuk params
type CategoryPageProps = {
  params: { categorySlug: string };
};

// Fungsi generateMetadata
export async function generateMetadata(
  { params }: CategoryPageProps, // Gunakan CategoryPageProps di sini
  parent: ResolvingMetadata
): Promise<Metadata> {
  const categorySlug = params.categorySlug;

  return {
    title: `Posts in category: ${categorySlug}`,
  };
}

// Komponen halaman
export default async function CategoryPage({ params }: CategoryPageProps) { // Gunakan CategoryPageProps di sini
  const posts = await getAllPostsByCategory(params.categorySlug);

  if (!posts || posts.length === 0) {
    notFound();
  }

  return <BlogClient initialPosts={posts} />;
}

// Fungsi generateStaticParams
export async function generateStaticParams() {
 
  const categories = [{ fields: { categorySlug: 'nextjs' } }, { fields: { categorySlug: 'react' } }];


  return categories.map((cat: any) => ({
    categorySlug: cat.fields.categorySlug,
  }));
}