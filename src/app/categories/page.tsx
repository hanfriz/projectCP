import Link from 'next/link';
import { getAllCategories } from '../../lib/contentful';

export default async function CategoriesPage() {
  const categories = await getAllCategories();

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Categories</h1>
      <ul className="space-y-4">
        {categories.map((cat: any) => (
          <li key={cat.sys.id}>
            <Link
              href={`/blog/categories/${cat.fields.slug}`}
              className="text-blue-600 hover:underline"
            >
              {cat.fields.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
