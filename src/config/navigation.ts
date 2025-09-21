interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Pengurus', href: '/pengurus' },
  { label: 'Projek', href: '/projek' },
  { label: 'Prestasi', href: '/prestasi' },
  { label: 'Blog', href: '/blog' },
];
