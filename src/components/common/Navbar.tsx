'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const hasToken = document.cookie.includes('token=');
    setIsLoggedIn(hasToken);
  }, []);

  const handleLogout = async () => {
    await fetch('/api/logout');
    window.location.href = '/login';
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h3 className="text-1xl font-bold text-blue-500">abc@digital.com</h3>
        <h1 className="text-2xl font-bold text-blue-700">ABC Digital</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 text-base font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/teams">Teams</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          {isLoggedIn && <li><Link href="/create-blog">Create Blog</Link></li>}
          {!isLoggedIn ? (
            <li><Link href="/login">Login</Link></li>
          ) : (
            <li><button onClick={handleLogout} className="text-red-600">Logout</button></li>
          )}
        </ul>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          <ul className="flex flex-col space-y-2 text-gray-700 text-base font-medium">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link href="/teams" onClick={() => setIsOpen(false)}>Teams</Link></li>
            <li><Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
            {isLoggedIn && (
              <li><Link href="/create-blog" onClick={() => setIsOpen(false)}>Create Blog</Link></li>
            )}
            {!isLoggedIn ? (
              <li><Link href="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
            ) : (
              <li><button onClick={handleLogout} className="text-red-600">Logout</button></li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
