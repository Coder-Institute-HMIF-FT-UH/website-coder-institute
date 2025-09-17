import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Coder Institute - Komunitas IT Mahasiswa Teknik Informatika Universitas Hasanuddin",
    template: "%s | Coder Institute",
  },
  description:
    "Website resmi Coder Institute - komunitas mahasiswa Unhas aktif di bidang teknologi, coding, dan seminar IT. Bergabunglah dengan komunitas programmer terdepan di Makassar.",
  keywords: [
    "Coder Institute",
    "komunitas IT",
    "mahasiswa teknik informatika",
    "Universitas Hasanuddin",
    "Unhas",
    "coding",
    "programming",
    "seminar IT",
    "teknologi",
    "Makassar",
  ],
  authors: [{ name: "Coder Institute HMIF FT UH" }],
  creator: "Coder Institute",
  publisher: "Coder Institute",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://coder-institute.vercel.app",
    title:
      "Coder Institute - Komunitas IT Mahasiswa Teknik Informatika Universitas Hasanuddin",
    description:
      "Website resmi Coder Institute - komunitas mahasiswa Unhas aktif di bidang teknologi, coding, dan seminar IT.",
    siteName: "Coder Institute",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Coder Institute - Komunitas IT Mahasiswa Teknik Informatika Universitas Hasanuddin",
    description:
      "Website resmi Coder Institute - komunitas mahasiswa Unhas aktif di bidang teknologi, coding, dan seminar IT.",
  },
  // for later
  // verification: {
  //   google: "your-google-verification-code", // Ganti dengan kode verifikasi Google Search Console
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="canonical" href="https://coder-institute.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
