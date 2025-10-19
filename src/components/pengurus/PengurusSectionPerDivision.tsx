'use client';

import { CardPengurus } from './CardPengurusComponent';

export interface PengurusItem {
  fotoUrl: string;
  nama: string;
  jabatan: string;
}

export interface PengurusSectionPerDivisionProps {
  id?: string;
  title: string;
  data: PengurusItem[];
}

export const PengurusSectionPerDivision: React.FC<
  PengurusSectionPerDivisionProps
> = ({ id, title, data }) => {
  return (
    <section className="w-full">
      <h2 className="mb-4 text-left text-[22px] font-semibold text-[#1A1A1A]">
        {title}
      </h2>

      <div className="xsm:grid-cols-2 smd:grid-cols-3 grid grid-cols-1 gap-5 lg:grid-cols-4">
        {data.map(person => (
          <CardPengurus
            key={person.nama}
            fotoUrl={person.fotoUrl}
            nama={person.nama}
            jabatan={person.jabatan}
          />
        ))}
      </div>
    </section>
  );
};
