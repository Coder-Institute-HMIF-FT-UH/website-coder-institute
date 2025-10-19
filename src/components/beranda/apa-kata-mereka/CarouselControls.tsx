import Image from 'next/image';

interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

export const CarouselControls = ({ onPrev, onNext }: CarouselControlsProps) => {
  return (
    <>
      <button
        onClick={onPrev}
        className="absolute top-1/2 left-[-16px] z-10 -translate-y-1/2 cursor-pointer rounded-full bg-[#FFC343] p-3 transition hover:bg-[#FFCB5C] sm:left-[-12px]"
        aria-label="Previous slide"
      >
        <Image
          src="/icons/arrow-left.svg"
          alt="icon arrow left"
          width={16}
          height={16}
          className="h-3 w-3 sm:h-4 sm:w-4"
        />
      </button>

      <button
        onClick={onNext}
        className="absolute top-1/2 right-[-16px] z-10 -translate-y-1/2 cursor-pointer rounded-full bg-[#FFC343] p-3 transition hover:bg-[#FFCB5C] sm:right-[-12px]"
        aria-label="Next slide"
      >
        <Image
          src="/icons/arrow-right.svg"
          alt="icon arrow right"
          width={16}
          height={16}
          className="h-3 w-3 sm:h-4 sm:w-4"
        />
      </button>
    </>
  );
};
