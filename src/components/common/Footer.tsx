export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-10">
      <p>&copy; {new Date().getFullYear()} CompanyBlog. All rights reserved.</p>
    </footer>
  );
}