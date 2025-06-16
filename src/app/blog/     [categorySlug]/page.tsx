
import { getAllPostsByCategory } from '../../../../lib/contentful';
import BlogClient from '../../../../components/BlogClient';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { categorySlug: string }
};

// coba pakai generate metadata =P
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: `Posts in category: ${params.categorySlug}`,
  };
}

// Render page
export default async function CategoryPage({ params }: Props) {
  const posts = await getAllPostsByCategory(params.categorySlug);

  if (!posts || posts.length === 0) {
    notFound();
  }

  return <BlogClient initialPosts={posts} />;
}

// static parameters
export async function generateStaticParams() {
  const res = await fetch('https://your-api-or-static-category-source'); // ganti dengan getAllCategories()
  const categories = await res.json(); // jika pakai fetch, atau langsung panggil getAllCategories()

  return categories.map((cat: any) => ({
    categorySlug: cat.fields.slug,
  }));
}