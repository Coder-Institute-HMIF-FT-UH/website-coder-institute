interface SectionHeadingProps {
  title: string;
}

export const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <div className="relative inline-block">
      <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">{title}</h2>
      <span className="absolute -bottom-3 left-1/2 h-[3px] w-[95%] -translate-x-1/2 rounded-full bg-[#FFB300] transition-all"></span>
    </div>
  );
};
