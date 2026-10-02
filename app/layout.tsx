import "./globals.css";
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ChatWidget from '../components/ChatWidget';
import { Providers } from "../components/providers";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Saksit Jittasopee - Portfolio",
  description: "Personal portfolio of Saksit Jittasopee: Projects, Certificates, Education, and Activities in Data Science & Software Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0b1120] dark:text-slate-100 transition-colors antialiased">
        <Providers>
          {children}
          <ChatWidget />
          <div className="fixed bottom-5 right-5 z-[9998]">
            <ScrollToTopButton />
          </div>
        </Providers>
      </body>
    </html>
  );
}
