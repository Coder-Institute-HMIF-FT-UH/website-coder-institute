import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://coder-institute.my.id"),
  title: "Coder Institute - Komunitas Mahasiswa Teknik Informatika Unhas",
  description:
    "Website resmi Coder Institute - komunitas mahasiswa Unhas aktif di bidang teknologi, coding, dan seminar IT.",
  openGraph: {
    title: "Coder Institute - Komunitas IT Mahasiswa Unhas",
    description:
      "Gabung komunitas coding Unhas! Pelatihan, seminar, dan proyek teknologi untuk mahasiswa TI.",
    url: "https://coder-institute.my.id",
    siteName: "Coder Institute",
    images: [
      {
        url: "/logo-coder.png", // ✅ sekarang ini akan dikonversi jadi absolut
        width: 1200,
        height: 630,
        alt: "Coder Institute Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Coder Institute",
              url: "https://coder-institute.my.id",
              sameAs: [
                "https://www.instagram.com/coderinstitute",
                "https://www.linkedin.com/company/coder-institute",
                "https://github.com/Coder-Institute-HMIF-FT-UH",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
