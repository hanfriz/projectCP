// src/app/blog/[categorySlug]/page.tsx

import { getAllPostsByCategory } from '../../../lib/contentful';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
  params: {
    categorySlug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Posts in category: ${params.categorySlug}`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const posts = await getAllPostsByCategory(params.categorySlug);

  if (!posts || posts.length === 0) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Category: {params.categorySlug}</h1>
      <ul className="space-y-4">
        {posts.map((post: any) => (
          <li key={post.sys.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{post.fields.title}</h2>
            <p className="text-sm text-gray-600">{post.fields.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
