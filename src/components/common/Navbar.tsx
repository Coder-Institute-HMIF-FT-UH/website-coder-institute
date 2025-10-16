'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  const navLinks = [
    { label: 'Beranda', href: '/' },
    { label: 'Pengurus', href: '/pengurus' },
    { label: 'Projek', href: '/projek' },
    { label: 'Prestasi', href: '/prestasi' },
    { label: 'Blog', href: '/blog' },
  ];

  // logika untuk menutup menu saat klik di luar area navbar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 z-99 w-full bg-white/80 py-2 shadow-[0_4px_20px_0_rgba(51,51,51,0.06)] backdrop-blur-[4px] transition-all md:py-3"
    >
      <div className="mx-auto max-w-7xl px-8 sm:px-10 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Bagian Kiri: Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo-coder.png"
              alt="Logo CODER Institute"
              width={45}
              height={45}
              priority
              className="h-[40px] w-[40px] sm:h-[45px] sm:w-[45px]"
            />
            <div className="hidden leading-tight md:block">
              <span className="text-[24px] font-bold text-[#FFB300]">
                CODER
              </span>{' '}
              <span className="text-[24px] font-semibold text-[#151515]">
                Institute
              </span>
              <p className="text-[12px] font-medium text-[#151515]">
                HMIF FT-UH 2025
              </p>
            </div>
          </Link>

          {/* Bagian Tengah: Menu (Desktop Only) */}
          <div className="hidden items-center space-x-8 lg:flex">
            {navLinks.map(link => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative pb-[5px] text-base font-medium hover:text-[#FFB300]"
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-[4px] w-[125%] -translate-x-1/2 rounded-full bg-[#FFB300] transition-all"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Bagian Kanan: Kontak (Desktop) + Hamburger (Mobile) */}
          <div className="flex items-center">
            <Link
              href="https://www.instagram.com/coderinstitute/"
              className="hidden lg:inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="cursor-pointer rounded-xl border border-[#FFC343] bg-[#FFC343] px-5 py-2 font-semibold text-[#333333] transition">
                Kontak Kami
              </button>
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative ml-3 flex h-8 w-8 flex-col justify-center focus:outline-none lg:hidden"
            >
              <span
                className={`block h-[3px] w-full rounded-full bg-[#FFC343] transition-all duration-300 ease-in-out ${
                  isOpen ? 'absolute rotate-45' : 'mb-1.5'
                }`}
              ></span>
              <span
                className={`block h-[3px] w-full rounded-full bg-[#FFC343] transition-all duration-300 ease-in-out ${
                  isOpen ? 'scale-0 opacity-0' : 'mb-1.5 scale-100 opacity-100'
                }`}
              ></span>
              <span
                className={`block h-[3px] w-full rounded-full bg-[#FFC343] transition-all duration-300 ease-in-out ${
                  isOpen ? 'absolute -rotate-45' : ''
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full overflow-hidden border-t border-b border-gray-200 bg-[#FFFBF0] transition-all duration-300 ease-in-out lg:hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-4 px-6 pt-6 pb-4">
          {navLinks.map((link, index) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-center font-medium transition-all duration-200 hover:text-[#FFB300] ${
                  isActive ? 'text-[#FFB300]' : ''
                } ${
                  isOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 h-[3px] w-[120%] -translate-x-1/2 rounded-full bg-[#FFB300] transition-all"></span>
                )}
              </Link>
            );
          })}
          <Link
            href="https://www.instagram.com/coderinstitute/"
            className={`w-full rounded-xl border border-[#FFC343] bg-[#FFC343] px-8 py-3 text-center font-semibold text-[#333333] transition-all duration-200 hover:border-[#FFB300] hover:bg-[#FFB300] ${
              isOpen
                ? 'translate-y-0 scale-100 opacity-100'
                : 'translate-y-4 scale-95 opacity-0'
            }`}
            style={{
              transitionDelay: isOpen ? `${navLinks.length * 50}ms` : '0ms',
            }}
            onClick={() => setIsOpen(false)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Kontak Kami
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
