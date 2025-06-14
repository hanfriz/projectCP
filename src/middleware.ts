import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;

  // Proteksi halaman /create-blog agar hanya bisa diakses jika sudah login
  if (req.nextUrl.pathname.startsWith('/create-blog') && !token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/create-blog'],
};
