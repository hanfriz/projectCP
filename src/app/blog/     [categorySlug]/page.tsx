import Link from 'next/link';
import { getPostsByCategorySlug } from '../../../lib/contentful';

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const posts = await getPostsByCategorySlug(params.slug);

  if (!posts || posts.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold">No posts found in this category.</h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-8">Posts in Category</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post: any) => (
          <div key={post.sys.id} className="border p-4 rounded shadow bg-white">
            {post.fields.image?.fields?.file?.url && (
              <img
                src={post.fields.image.fields.file.url}
                alt={post.fields.title || 'Blog Image'}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <h2 className="text-xl font-semibold mb-2">{post.fields.title}</h2>
            <Link href={`/blog/${post.fields.slug}`} className="text-blue-600 hover:underline">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
