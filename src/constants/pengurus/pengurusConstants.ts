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

interface PengurusDataItem {
  title: string;
  data: typeof profilPengurusInti;
  id: string;
  filterKey: string;
}

const PENGURUS_DATA: PengurusDataItem[] = [
  {
    title: 'Pengurus Inti',
    data: profilPengurusInti,
    id: 'inti',
    filterKey: 'Inti',
  },
  {
    title: 'Divisi UI/UX',
    data: profilPengurusUIUX,
    id: 'uiux',
    filterKey: 'UI/UX',
  },
  {
    title: 'Divisi Website',
    data: profilPengurusWebsite,
    id: 'website',
    filterKey: 'Website',
  },
  {
    title: 'Divisi Mobile',
    data: profilPengurusMobile,
    id: 'mobile',
    filterKey: 'Mobile',
  },
  {
    title: 'Divisi Game',
    data: profilPengurusGame,
    id: 'game',
    filterKey: 'Game',
  },
  {
    title: 'Divisi IoT',
    data: profilPengurusIoT,
    id: 'iot',
    filterKey: 'IoT',
  },
  {
    title: 'Divisi Humas',
    data: profilPengurusHumas,
    id: 'humas',
    filterKey: 'Humas',
  },
  {
    title: 'Divisi Publikasi dan Dokumentasi',
    data: profilPengurusPubdok,
    id: 'pubdok',
    filterKey: 'Pubdok',
  },
  {
    title: 'Divisi Logistik',
    data: profilPengurusLogistik,
    id: 'logistik',
    filterKey: 'Logistik',
  },
  {
    title: 'Divisi Kompetisi',
    data: profilPengurusKompetisi,
    id: 'kompetisi',
    filterKey: 'Kompetisi',
  },
];

const FILTER_ALL = 'Semua';

const getValidFilters = () => {
  return [FILTER_ALL, ...PENGURUS_DATA.map(d => d.filterKey)];
};

const filterList = [
  'Semua',
  'Inti',
  'UI/UX',
  'Website',
  'Mobile',
  'Game',
  'IoT',
  'Humas',
  'Pubdok',
  'Logistik',
  'Kompetisi',
];

export {
  FILTER_ALL,
  filterList,
  getValidFilters,
  PENGURUS_DATA,
  type PengurusDataItem,
};
