import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maksim Karpau | Motion Designer & 3D Generalist",
  description: "3D Motion Designer with 5+ years of experience. Specializing in product animation, video explainers, and motion graphics for brands and agencies.",
  metadataBase: new URL("https://karpau.work"),
  openGraph: {
    title: "Maksim Karpau | Motion Designer & 3D Generalist",
    description: "3D Motion Designer with 5+ years of experience. Specializing in product animation, video explainers, and motion graphics for brands and agencies.",
    url: "https://karpau.work",
    siteName: "Maksim Karpau Portfolio",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Maksim Karpau — Motion Designer" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maksim Karpau | Motion Designer & 3D Generalist",
    description: "3D Motion Designer with 5+ years of experience. Specializing in product animation, video explainers, and motion graphics for brands and agencies.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Maksim Karpau", url: "https://karpau.work" }],
  creator: "Maksim Karpau",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}