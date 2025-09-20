import { Metadata } from 'next';

import PrestasiSection from '@/components/prestasi/PrestasiSection';

export const metadata: Metadata = {
  title: 'Prestasi',
  description:
    'Prestasi dan penghargaan yang telah diraih oleh anggota Coder Institute dalam berbagai kompetisi IT dan programming.',
  keywords: [
    'prestasi Coder Institute',
    'kompetisi programming',
    'hackathon',
    'lomba IT',
    'penghargaan mahasiswa',
  ],
  openGraph: {
    title: 'Prestasi - Coder Institute',
    description:
      'Prestasi dan penghargaan yang telah diraih oleh anggota Coder Institute dalam berbagai kompetisi IT dan programming.',
  },
};

export default function PrestasiPage() {
  return (
    <div>
      <PrestasiSection />
    </div>
  );
}
