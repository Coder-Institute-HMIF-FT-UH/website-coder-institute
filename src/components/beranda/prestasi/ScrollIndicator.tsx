'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * ScrollIndicatorProps
 * - scrollContainerRef: ref ke elemen container yang memiliki scroll (overflow-y-auto)
 *   Komponen ini tidak membuat container scroll sendiri, melainkan menerima referensi
 *   dari parent (`PrestasiTerbaruSection`) agar indicator tetap berada di luar
 *   elemen yang di-scroll (tidak ikut ter-scroll ketika user scroll konten).
 * - height: (opsional) tinggi track custom, default 440px
 * - className: (opsional) custom className untuk override height secara responsif
 */
interface ScrollIndicatorProps {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  height?: number;
  className?: string;
}

/**
 * ScrollIndicator
 * - Komponen visual yang menggantikan scrollbar default.
 * - Track: background (panjang penuh dari kontainer, fixed height di sini)
 * - Thumb: elemen kecil yang bergerak ke atas/bawah sebagai penanda posisi scroll
 *
 * Catatan desain / perilaku:
 * - Track tetap full height (400px) dan berada di luar elemen scrollable.
 * - Thumb memiliki tinggi tetap (20% dari track) dan hanya posisinya yang berubah.
 * - Thumb bisa di-drag (drag & drop) dan klik di track untuk jump.
 */
export const ScrollIndicator = ({
  scrollContainerRef,
  height = 440,
  className = '',
}: ScrollIndicatorProps) => {
  // Persentase posisi scroll (0 - 100). Ini yang dipakai untuk menggerakkan thumb.
  const [scrollPercent, setScrollPercent] = useState(0);

  // Flag sementara saat user sedang drag thumb. Saat drag aktif, event scroll
  // dari container tidak akan meng-override posisi thumb (menghindari jitter).
  const [isDragging, setIsDragging] = useState(false);

  // Refs untuk track dan thumb, digunakan untuk perhitungan posisi & event
  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  // Konstanta layout (dapat disesuaikan jika desain berubah)
  const trackHeight = height; // Tinggi track sesuai tinggi container (px)
  const thumbHeight = Math.round(trackHeight * 0.2); // Thumb = 20% dari track

  /**
   * Effect: dengarkan event scroll pada container yang direferensikan.
   * - Menghitung persentase scroll berdasarkan scrollTop / maxScroll
   * - Tidak mengupdate posisi ketika user sedang drag (isDragging)
   */
  useEffect(() => {
    const handleScroll = () => {
      if (isDragging) return; // Jika sedang drag, jangan override posisi

      const container = scrollContainerRef.current;
      if (!container) return; // Jika belum terpasang, keluarkan

      // Hitung persentase scroll (0 - 100)
      const scrollTop = container.scrollTop;
      const maxScroll = container.scrollHeight - container.clientHeight;
      const percent = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

      setScrollPercent(Math.min(100, Math.max(0, percent)));
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Inisialisasi posisi ketika mount

      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [isDragging, scrollContainerRef]);

  /**
   * handleMouseDown
   * - Mulai operasi drag ketika user klik dan tahan thumb.
   * - Mengikat event mousemove/mouseup di document sehingga drag tetap
   *   bekerja meski pointer keluar area track.
   * - Mengupdate scroll container berdasarkan perubahan posisi thumb.
   */
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);

    const track = trackRef.current;
    const container = scrollContainerRef.current;
    if (!track || !container) return;

    // Posisi awal saat drag dimulai
    const startY = e.clientY;
    const startScrollPercent = scrollPercent;

    const handleMouseMove = (e: MouseEvent) => {
      // Selisih Y dari awal drag
      const deltaY = e.clientY - startY;

      // Rentang gerak thumb dalam pixel (trackHeight - thumbHeight)
      const trackRange = trackHeight - thumbHeight;

      // Konversi delta pixel menjadi delta persentase
      const percentDelta = (deltaY / trackRange) * 100;
      const newPercent = Math.min(
        100,
        Math.max(0, startScrollPercent + percentDelta)
      );

      setScrollPercent(newPercent);

      // Sinkron ke container: ubah scrollTop sesuai persentase baru
      const maxScroll = container.scrollHeight - container.clientHeight;
      container.scrollTop = (newPercent / 100) * maxScroll;
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    // Pasang listener global untuk drag agar tetap responsif
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  /**
   * handleTrackClick
   * - Ketika user klik pada track (bukan thumb), langsung pindah ke posisi itu.
   * - Mengubah persentase dan sinkron ke scroll container.
   */
  const handleTrackClick = (e: React.MouseEvent) => {
    if (e.target === thumbRef.current) return; // klik pada thumb diabaikan

    const track = trackRef.current;
    const container = scrollContainerRef.current;
    if (!track || !container) return;

    const trackRect = track.getBoundingClientRect();
    const clickY = e.clientY - trackRect.top; // posisi klik relatif terhadap track
    const trackRange = trackHeight - thumbHeight;
    const newPercent = Math.min(100, Math.max(0, (clickY / trackRange) * 100));

    setScrollPercent(newPercent);

    // Sinkron ke container
    const maxScroll = container.scrollHeight - container.clientHeight;
    container.scrollTop = (newPercent / 100) * maxScroll;
  };

  // Render struktur: track (background) dan thumb (active)
  return (
    <div
      className={`absolute top-0 left-2 w-[6px] cursor-pointer rounded-[20px] bg-[#FFF7E7] select-none sm:w-[8px] ${className}`}
      style={className ? undefined : { height: `${trackHeight}px` }}
    >
      <div
        ref={trackRef}
        className="relative w-full"
        style={className ? undefined : { height: `${trackHeight}px` }}
        onClick={handleTrackClick}
      >
        <div
          ref={thumbRef}
          className="w-full cursor-grab rounded-[20px] bg-[#FFAE21] transition-all duration-150 ease-out hover:bg-[#FF9800] active:cursor-grabbing"
          style={{
            height: `${thumbHeight}px`,
            transform: `translateY(${(scrollPercent / 100) * (trackHeight - thumbHeight)}px)`,
          }}
          onMouseDown={handleMouseDown}
        />
      </div>
    </div>
  );
};
