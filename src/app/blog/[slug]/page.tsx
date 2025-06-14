import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { getPostBySlug, getAllPosts } from '../../../lib/contentful';

// ✅ Generate Static Params (WAJIB untuk App Router dengan dynamic route)
export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post: any) => ({
    slug: post.fields.slug,
  }));
}

// ✅ Blog detail page
export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return notFound();

  const { title, content, image, category, author } = post.fields as any;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">{title}</h1>

      {image && (
        <img
          src={image.fields.file.url}
          alt={title}
          className="w-full h-auto mb-6 rounded shadow"
        />
      )}

      <p className="text-sm text-gray-500 mb-4">
        {category?.fields?.name && <>📂 <strong>Category:</strong> {category.fields.name}</>}<br />
        {author?.fields?.name && <>✍️ <strong>Author:</strong> {author.fields.name}</>}
      </p>

      <div className="prose max-w-none">
        {documentToReactComponents(content)}
      </div>
    </div>
  );
}
