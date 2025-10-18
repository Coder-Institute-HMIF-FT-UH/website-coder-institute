import {
  profilPengurusGame,
  profilPengurusHumas,
  profilPengurusInti,
  profilPengurusIoT,
  profilPengurusKompetisi,
  profilPengurusLogistik,
  profilPengurusMobile,
  profilPengurusPubdok,
  profilPengurusUIUX,
  profilPengurusWebsite,
} from '@/data/profil/profilPengurus';

import { FilterPengurus } from './FilterPengurus';
import { HeadingPengurus } from './HeadingPengurus';
import { PengurusSectionPerDivision } from './PengurusSectionPerDivision';

const PengurusSection = () => {
  const pengurusData = [
    { title: 'Pengurus Inti', data: profilPengurusInti },
    { title: 'Divisi UI/UX', data: profilPengurusUIUX },
    { title: 'Divisi Website', data: profilPengurusWebsite },
    { title: 'Divisi Mobile', data: profilPengurusMobile },
    { title: 'Divisi Game', data: profilPengurusGame },
    { title: 'Divisi IoT', data: profilPengurusIoT },
    { title: 'Divisi Humas', data: profilPengurusHumas },
    { title: 'Divisi Publikasi dan Dokumentasi', data: profilPengurusPubdok },
    { title: 'Divisi Logistik', data: profilPengurusLogistik },
    { title: 'Divisi Kompetisi', data: profilPengurusKompetisi },
  ];

  return (
    <div className="relative mx-auto mt-10 mb-20 min-h-[80vh]">
      {/* Header */}
      <div className="flex flex-col items-center gap-10 text-center">
        <div>
          <HeadingPengurus />
        </div>
        {/* Desktop Filter - > md */}
        <div className="hidden w-full md:block">
          <FilterPengurus />
        </div>
      </div>

      {/* Sticky Mobile Filter */}
      <div className="sticky top-20 z-[5] flex justify-end px-4 pt-4 md:hidden">
        <FilterPengurus />
      </div>

      {/* Content */}
      <div className="mt-6 flex flex-col gap-20 md:mt-12">
        {pengurusData.map((pengurus, _) => (
          <PengurusSectionPerDivision
            key={pengurus.title}
            title={pengurus.title}
            data={pengurus.data}
          />
        ))}
      </div>
    </div>
  );
};

export default PengurusSection;
