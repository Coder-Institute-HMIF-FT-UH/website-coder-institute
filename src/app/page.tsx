import BerandaSection from "@/components/beranda/BerandaSection";
import JsonLd from "@/components/common/JsonLd";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Coder Institute",
  description:
    "Komunitas mahasiswa Teknik Informatika Universitas Hasanuddin yang aktif di bidang teknologi, coding, dan seminar IT",
  url: "https://coder-institute.vercel.app",
  logo: "https://coder-institute.vercel.app/logo.png",
  sameAs: [
    "https://instagram.com/coder_institute",
    "https://github.com/Coder-Institute-HMIF-FT-UH",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "general",
    email: "contact@coder-institute.org",
  },
  location: {
    "@type": "Place",
    name: "Universitas Hasanuddin",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Makassar",
      addressRegion: "Sulawesi Selatan",
      addressCountry: "Indonesia",
    },
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <div>
        <BerandaSection />
      </div>
    </>
  );
}
