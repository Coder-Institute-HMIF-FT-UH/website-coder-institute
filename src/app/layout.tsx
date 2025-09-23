import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';

export const metadata: Metadata = {
  title: {
    default:
      'Coder Institute - Komunitas IT Mahasiswa Teknik Informatika Universitas Hasanuddin',
    template: '%s | Coder Institute',
  },
  description:
    'Website resmi Coder Institute - komunitas mahasiswa Unhas aktif di bidang teknologi, coding, dan seminar IT. Bergabunglah dengan komunitas programmer terdepan di Makassar.',
  keywords: [
    'Coder Institute',
    'komunitas IT',
    'mahasiswa teknik informatika',
    'Universitas Hasanuddin',
    'Unhas',
    'coding',
    'programming',
    'seminar IT',
    'teknologi',
    'Makassar',
  ],
  authors: [{ name: 'Coder Institute HMIF FT UH' }],
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
  creator: 'Coder Institute',
  publisher: 'Coder Institute',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://www.coderinstitute.id',
    title:
      'Coder Institute - Komunitas IT Mahasiswa Teknik Informatika Universitas Hasanuddin',
    description:
      'Website resmi Coder Institute - komunitas mahasiswa Unhas aktif di bidang teknologi, coding, dan seminar IT.',
    siteName: 'Coder Institute',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Coder Institute - Komunitas IT Mahasiswa Teknik Informatika Universitas Hasanuddin',
    description:
      'Website resmi Coder Institute - komunitas mahasiswa Unhas aktif di bidang teknologi, coding, dan seminar IT.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="canonical" href="https://www.coderinstitute.id" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="D14OGZUUn701dQ1i9rHjPsmGjknD1QNfb3Eg9hAj2J8"
        />
      </head>
      <body>
        <Navbar />
        <main className="pt-20 md:pt-24">{children}</main>
        <Footer />

        {/* vercel */}
        <Analytics />
        <SpeedInsights />

        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7GQ4YDBC50"
          strategy="afterInteractive"
        ></Script>
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7GQ4YDBC50');`}
        </Script>
      </body>
    </html>
  );
}
