import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import dynamic from 'next/dynamic'

import "./globals.css";

const ScrollToTop = dynamic(
  () => import('../components/ScrollToTop/ScrollToTop'),
  { ssr: false }
)


const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 400 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 400 900",
});

export const metadata: Metadata = {
  title: "DotDager",
  description: "Full-stack senior y contador serial de chistes de mierda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider attribute="class">
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
