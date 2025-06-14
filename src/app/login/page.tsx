'use client';

import { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple dummy authentication
    if (username === 'admin' && password === 'password') {
      Cookies.set('token', 'abc123', { expires: 1 }); // Simpan cookie selama 1 hari
      router.push('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <section className="py-12 px-4 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </section>
  );
}
