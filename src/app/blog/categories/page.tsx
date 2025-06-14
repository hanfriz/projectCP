import Link from 'next/link';
import { getAllCategories } from '../../../lib/contentful';
import { useCategory } from '../../../context/CategoryContext';

export default async function CategoriesPage() {
  const categories = await getAllCategories();
  const { setSelectedCategory } = useCategory();

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Categories</h1>
      <ul className="space-y-4">
        {categories.map((cat: any) => (
          <li key={cat.sys.id}>
            <button
              onClick={() => setSelectedCategory(cat.fields.slug)}
              className="text-blue-600 hover:underline"
            >
              {cat.fields.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
