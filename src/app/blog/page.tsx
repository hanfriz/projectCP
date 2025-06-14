import { getAllPosts } from '../../lib/contentful';
import BlogClient from '../../components/BlogClient';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return <BlogClient initialPosts={posts} />;
}
