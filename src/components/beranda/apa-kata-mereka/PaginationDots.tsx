interface PaginationDotsProps {
  scrollSnaps: number[];
  selectedIndex: number;
  onDotClick: (index: number) => void;
}

export const PaginationDots = ({
  scrollSnaps,
  selectedIndex,
  onDotClick,
}: PaginationDotsProps) => {
  return (
    <div className="mt-10 flex justify-center gap-2">
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`h-3 w-3 rounded-full transition ${
            index === selectedIndex
              ? 'bg-[#FFAE21]'
              : 'border border-[#FFAE21] bg-transparent'
          }`}
          aria-label={`Go to slide ${index + 1}`}
          aria-current={index === selectedIndex ? 'page' : undefined}
        />
      ))}
    </div>
  );
};
