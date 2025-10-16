export type ProjekCategory = 'Web' | 'Mobile' | 'Game' | 'IoT' | 'UI/UX';

export interface ProjekItem {
  id: number;
  category: ProjekCategory;
  title: string;
  participants: string;
  image: string;
}

export const projekTerbaruData: ProjekItem[] = [
  {
    id: 1,
    category: 'Game',
    title: 'Against The Invaders',
    participants: 'Aulia Tifani, Firmansyah Jaya Kusuma, dan Tasya Aulia Putri',
    image: '/beranda/project/project-game.png',
  },
  {
    id: 2,
    category: 'Web',
    title: 'UMKMku: Platform Digitalisasi Usaha Mikro di Gowa',
    participants: 'Muh. Fajri Farid, Rizky Maulana, dan Salsabila Rahma',
    image: '/beranda/project/project-game.png',
  },
  {
    id: 3,
    category: 'Mobile',
    title: 'EcoRoute: Aplikasi Pelacakan Sampah Kota Berbasis Flutter',
    participants: 'Nabila Sari, Arief Nurhalim, dan Rafiq Akbar',
    image: '/beranda/project/project-game.png',
  },
  {
    id: 4,
    category: 'IoT',
    title: 'SmartHydro: Sistem Monitoring Tanaman Hidroponik Otomatis',
    participants: 'Fathur Rahman, Indah Lestari, dan Ilham Nur Saputra',
    image: '/beranda/project/project-game.png',
  },
  {
    id: 5,
    category: 'UI/UX',
    title: 'EduPath: Redesign Aplikasi Pembelajaran Daring',
    participants: 'Nur Aisyah Rahma, Salsabila Dewi, dan Iqbal Fadillah',
    image: '/beranda/project/project-game.png',
  },
];
