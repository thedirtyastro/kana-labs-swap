import type { Metadata } from "next";
import { Urbanist, Manrope } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kana Labs",
  description: "kana labs app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${manrope.variable} antialiased font-mono bg-[#0C0C0D]`}>
        {children}
      </body>
    </html>
  );
}
