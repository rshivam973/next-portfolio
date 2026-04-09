import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

export const metadata = {
  title: "Shivam Rajput — Developer",
  description: "Full-stack developer building web and blockchain products. Portfolio showcasing React, Next.js, Solidity, and React Native projects.",
  openGraph: {
    title: "Shivam Rajput — Developer",
    description: "Full-stack developer building web and blockchain products.",
    type: "website",
    url: "https://shivam-codes.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans bg-canvas text-text-primary">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
