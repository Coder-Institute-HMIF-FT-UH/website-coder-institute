import { Metadata } from 'next';

import PengurusSection from '@/components/pengurus/PengurusSection';

export const metadata: Metadata = {
  title: 'Pengurus',
  description:
    'Profil pengurus dan struktur organisasi Coder Institute - komunitas IT mahasiswa Teknik Informatika Universitas Hasanuddin.',
  keywords: [
    'pengurus Coder Institute',
    'struktur organisasi',
    'kepengurusan',
    'mahasiswa IT Unhas',
  ],
  openGraph: {
    title: 'Pengurus - Coder Institute',
    description:
      'Profil pengurus dan struktur organisasi Coder Institute - komunitas IT mahasiswa Teknik Informatika Universitas Hasanuddin.',
  },
};

export default function PengurusPage() {
  return (
    <div>
      <PengurusSection />
    </div>
  );
}
