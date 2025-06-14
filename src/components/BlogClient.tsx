'use client';

import { useState, useEffect, useContext } from 'react';
import { useCategory } from '../context/CategoryContext';
import PostList from '../components/blog/PostList';

interface BlogClientProps {
  initialPosts: any[];
}

export default function BlogClient({ initialPosts }: BlogClientProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(initialPosts);
  const { selectedCategory } = useCategory();

  useEffect(() => {
    let filtered = initialPosts;

    if (selectedCategory) {
      filtered = filtered.filter(
        (post: any) =>
          post.fields.category?.fields?.slug === selectedCategory
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((post: any) =>
        post.fields.title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory, initialPosts]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded mb-6"
      />

      <PostList posts={filteredPosts} />
    </div>
  );
}
