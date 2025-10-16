import '@/styles/beranda.css';
import { ApaKataMerekaSection } from './apa-kata-mereka/ApaKataMerekaSection';
import { FAQSection } from './FAQ/FAQSection';
import { HeroSection } from './hero/HeroSection';
import { MisiKamiSection } from './misi-kami/MisiKamiSection';
import { TentangKamiSection } from './tentang-kami/TentangKamiSection';

const BerandaSection = () => {
  return (
    <div className="mb-20 flex min-h-[80vh] flex-col items-center justify-center gap-24 text-center sm:gap-28 md:gap-32 lg:gap-40 xl:gap-48">
      <HeroSection />
      <TentangKamiSection />
      {/* visi kami section */}
      <MisiKamiSection />
      {/* prestasi terbaru section */}
      {/* project terbaru section */}
      <ApaKataMerekaSection />
      <FAQSection />
      {/* <UnderConstruction /> */}
    </div>
  );
};

export default BerandaSection;
