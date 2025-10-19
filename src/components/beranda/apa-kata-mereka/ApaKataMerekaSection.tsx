'use client';

import { apaKataMerekaData } from '@/data/beranda/apaKataMerekaData';
import { useTestimonialCarousel } from '@/hooks/beranda/useTestimonialCarousel';

import { SectionHeading } from '../SectionHeading';

import { CarouselControls } from './CarouselControls';
import { PaginationDots } from './PaginationDots';
import { TestimonialCard } from './TestimonialCard';

export const ApaKataMerekaSection = () => {
  const {
    emblaRef,
    selectedIndex,
    scrollSnaps,
    scrollTo,
    scrollPrev,
    scrollNext,
  } = useTestimonialCarousel();

  return (
    <section
      id="apa-kata-mereka"
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-4"
    >
      <SectionHeading title="Apa Kata Mereka Tentang Coder Institute?" />

      <div className="relative mt-10">
        {/* Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {apaKataMerekaData.map(item => (
              <TestimonialCard
                key={item.id}
                message={item.message}
                name={item.name}
                role={item.role}
                avatar={item.avatar}
              />
            ))}
          </div>
        </div>

        {/* Controls */}
        <CarouselControls onPrev={scrollPrev} onNext={scrollNext} />
      </div>

      {/* Pagination */}
      <PaginationDots
        scrollSnaps={scrollSnaps}
        selectedIndex={selectedIndex}
        onDotClick={scrollTo}
      />
    </section>
  );
};
