import "./globals.css";
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ChatWidget from '../components/ChatWidget';
import { Providers } from "../components/providers"
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Home - Saksit Jittasopee",
  description: "Saksit Jittasopee's Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={inter.className} suppressHydrationWarning>
      <body>
        <div>
        <div className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end gap-3">
            <ChatWidget />
            <ScrollToTopButton />
          </div>
        <Providers>
        {children}
        </Providers>
        </div>
      </body>
    </html>
  );
}
