import { getPostsByCategory } from '../../../lib/contentful';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    categorySlug: string;
  };
};

export default async function CategoryPage({ params }: Props) {
  const { categorySlug } = params;

  const posts = await getPostsByCategory(categorySlug);

  if (!posts || posts.length === 0) {
    notFound();
  }

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 capitalize">{categorySlug} Posts</h1>
      <ul className="space-y-6">
        {posts.map((post: any) => (
          <li key={post.sys.id} className="border rounded p-4 shadow hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">{post.fields.title}</h2>
            <p className="text-gray-700">{post.fields.excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
