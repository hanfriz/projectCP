import '../styles/globals.css';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ClientProviders from '../components/common/ClientProviders';

export const metadata = {
  title: 'Company Profile with Blog',
  description: 'Empowering your digital presence.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          <Navbar />
          <main className="max-w-6xl mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}