import { Footer } from '@/components/Footer';
import { Header } from '@/components/NavBar';
import '@/styles/globals.css';
import { type ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="" lang="en">
      <head />
      <body className="flex h-full flex-col scroll-smooth bg-gray-50 antialiased transition-colors duration-300 dark:bg-black">
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-gray-100 transition-colors duration-300  dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        <Header />
        <main className="transition-colors duration-300">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
