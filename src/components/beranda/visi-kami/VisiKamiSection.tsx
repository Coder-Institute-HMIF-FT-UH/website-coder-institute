import { SectionHeading } from '../SectionHeading';

export const VisiKamiSection = () => {
  return (
    <section id="visi-kami" className="mx-auto scroll-mt-28 lg:scroll-mt-40">
      <SectionHeading title="Visi Kami" />

      <div className="relative mt-4 flex flex-col items-center gap-4 md:mt-10 md:flex-row md:items-center md:justify-center md:gap-0 xl:max-w-[1000px]">
        {/* Logo Kiri */}
        <div
          className="relative z-10 hidden flex-shrink-0 bg-center bg-no-repeat md:mt-8 md:block md:h-72 md:w-72 md:rotate-0 lg:mt-10 lg:h-62 lg:w-62 xl:mt-12 xl:h-92 xl:w-92"
          style={{
            background:
              "url('/beranda/fotbar-coder2.png') center / contain no-repeat",
            opacity: 1,
          }}
        ></div>

        {/* Kotak Kanan */}
        <div className="relative z-0 w-full md:-ml-8 lg:-ml-8 xl:-ml-6">
          <div
            className="rounded-2xl border-2 border-[#FFCB5C] px-6 py-10 sm:p-10 md:px-12 md:py-20 xl:px-18 xl:py-24"
            style={{
              background:
                'linear-gradient(104deg, #FFF7ED 9.98%, #FFFBF6 28.58%, #FFF7ED 50.19%, #FFFAF4 78.46%, #FFF7ED 97.9%)',
            }}
          >
            <p className="text-start text-sm leading-relaxed sm:text-base lg:text-lg 2xl:text-xl">
              Coder Institute HMIF FT-UH bertujuan untuk menjadi wadah
              pendidikan dan kolaborasi yang mampu melahirkan software developer
              kelas dunia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
