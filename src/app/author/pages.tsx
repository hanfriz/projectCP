import { getAllAuthors } from '../../lib/contentful';

export default async function AuthorsPage() {
  const authors = await getAllAuthors();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="tsext-3xl font-bold mb-6">Authors</h1>
      <ul className="space-y-4">
        {authors.map((author: any) => (
          <li
            key={author.sys.id}
            className="p-4 bg-white rounded shadow hover:shadow-md transition"
          >
            <p className="text-xl font-semibold">{author.fields.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
