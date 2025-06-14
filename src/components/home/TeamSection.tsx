'use client';
import { useEffect, useState } from 'react';

interface User {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  email: string;
}

export default function TeamSection() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=6')
      .then(res => res.json())
      .then(data => setUsers(data.results));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {users.map((user, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4 text-center">
          <img
            src={user.picture.large}
            alt={user.name.first}
            className="w-24 h-24 rounded-full mx-auto mb-2"
          />
          <h3 className="font-semibold">{user.name.first} {user.name.last}</h3>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      ))}
    </div>
  );
}
