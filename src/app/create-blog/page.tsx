'use client';

import { useEffect, useState } from 'react';

export default function CreateBlogPage() {
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    category: '',
  });

  useEffect(() => {
    const fetchAuthors = async () => {
      const res = await fetch('/api/authors');
      const data = await res.json();
      setAuthors(data.authors || []);
    };
    fetchAuthors();

    const fetchCategories = async () => {
      const res = await fetch('/api/categories');
      const data = await res.json();
      setCategories(data.categories || []);
    };
    fetchCategories();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('Submitting form data:', formData);
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Post created successfully!');
        setFormData({ title: '', content: '', author: '', category: '' });
      } else {
        const data = await res.json().catch(() => ({}));
        console.error('Error creating post:', data);
        alert(`Failed to create blog post: ${data.message || 'Unknown error'}`);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      alert('Unexpected error occurred');
    }
  };

  return (
    <section className="py-12 px-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Create New Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Blog Title"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Blog Content"
          className="w-full p-2 border rounded h-40"
          required
        />
        <select
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Select Author</option>
          {authors.map((author: any) => (
            <option key={author.sys.id} value={author.sys.id}>
              {author.fields.name}
            </option>
          ))}
        </select>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Select Category</option>
          {categories.map((category: any) => (
            <option key={category.sys.id} value={category.sys.id}>
              {category.fields.name}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Blog
        </button>
      </form>
    </section>
  );
}
