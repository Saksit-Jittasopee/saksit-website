import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import ScrollToTopButton from '../components/ScrollToTopButton';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you want to use
  variable: '--font-roboto', // Optional: for use with CSS variables
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
    <html lang="en" className={roboto.className}>
      <body>      
        <ScrollToTopButton/>
        {children}
      </body>
    </html>
  );
}
