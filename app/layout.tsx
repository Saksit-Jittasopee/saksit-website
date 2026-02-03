import "./globals.css";
import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { Providers } from "../components/providers"

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
        <ScrollToTopButton/>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
