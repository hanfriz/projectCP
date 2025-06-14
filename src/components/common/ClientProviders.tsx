'use client';
import { ReactNode } from 'react';
import { CategoryProvider } from '../../context/CategoryContext';

export default function ClientProviders({ children }: { children: ReactNode }) {
  return <CategoryProvider>{children}</CategoryProvider>;
}
