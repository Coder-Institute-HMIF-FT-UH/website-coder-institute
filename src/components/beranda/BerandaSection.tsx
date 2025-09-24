import '@/styles/beranda.css';
import { FAQSection } from './FAQ/FAQSection';
import { HeroSection } from './hero/HeroSection';
import { TentangKamiSection } from './tentang-kami/TentangKamiSection';

const BerandaSection = () => {
  return (
    <div className="mb-20 flex min-h-[80vh] flex-col items-center justify-center gap-20 text-center">
      <HeroSection />
      <TentangKamiSection />
      {/* visi kami section */}
      {/* misi kami section */}
      {/* prestasi terbaru section */}
      {/* project terbaru section */}
      {/* apa kata mereka section */}
      <FAQSection />
      {/* <UnderConstruction /> */}
    </div>
  );
};

export default BerandaSection;
