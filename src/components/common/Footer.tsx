'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { contacts } from '@/config/contact';
import { navLinks } from '@/config/navigation';

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer>
      <div className="footer mx-auto max-w-[1400px] border-t-[1.2px] border-[#FFCB5C] pt-14 pb-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {/* Logo & Alamat */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo-coder.png"
                alt="Coder Institute Logo"
                width={50}
                height={50}
                className="h-auto w-auto"
              />
              <div>
                <h2 className="text-xl font-bold">
                  <span className="text-[#FFB300]">CODER</span> Institute
                </h2>
                <p className="text-sm font-medium">HMIF FT-UH 2025</p>
              </div>
            </div>
            <div className="xs:text-sm mt-6 flex items-start gap-2 text-xs">
              <Image
                src="/icons/location.svg"
                alt="Location icon"
                width={26}
                height={26}
                className="mt-0.5"
              />
              <p className="xs:block hidden">
                Gedung Student Center Lt. 1 Fakultas Teknik <br />
                Universitas Hasanuddin, Gowa 92171
              </p>

              <p className="xs:hidden block">
                Gedung Student Center Lt. 1 Fakultas Teknik Universitas
                Hasanuddin, Gowa 92171
              </p>
            </div>
          </div>

          {/* Tautan Cepat */}
          <nav aria-label="Footer Navigation">
            <h3 className="mb-3 text-lg font-semibold">Tautan Cepat</h3>
            <ul className="space-y-2 text-base">
              {navLinks.map(link => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="relative pb-1 transition-colors hover:text-[#FFB300]"
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-[#FFB300]"></span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Kontak */}
          <div>
            <h3 className="mb-3 text-lg font-semibold">Kontak</h3>
            <ul className="space-y-3 text-base">
              {contacts.map(
                ({ href, label, icon: Icon, iconClass, platform }, i) => (
                  <li key={i}>
                    <Link
                      href={href}
                      aria-label={`Buka ${label} di ${platform}, tab baru`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 transition-colors hover:text-[#FFB300]"
                    >
                      <Icon
                        className={`${iconClass} flex-shrink-0 text-black transition-colors group-hover:text-[#FFB300]`}
                      />
                      {label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-4 text-center">
          <small className="text-base">
            &copy; {new Date().getFullYear()} Coder Institute HMIF FT-UH
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
