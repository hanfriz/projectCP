import { getAllPostsByCategory } from '../../../lib/contentful';
import { notFound } from 'next/navigation';

// Define the type for props expected by this page
interface CategoryPageProps {
  params: {
    categorySlug: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const posts = await getAllPostsByCategory(params.categorySlug);

  if (!posts || posts.length === 0) {
    notFound();
  }

  return (
    <section className="px-4 py-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        Posts in “{params.categorySlug}”
      </h1>
      <ul className="space-y-4">
        {posts.map((post: any) => (
          <li key={post.sys.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{post.fields.title}</h2>
            <p>{post.fields.excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`);
  const data = await res.json();

  return data.categories.map((category: any) => ({
    categorySlug: category.fields.slug,
  }));
}
