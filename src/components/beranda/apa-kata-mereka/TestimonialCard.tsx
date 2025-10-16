import Image from 'next/image';

interface TestimonialCardProps {
  message: string;
  name: string;
  role: string;
  avatar: string;
}

export const TestimonialCard = ({
  message,
  name,
  role,
  avatar,
}: TestimonialCardProps) => {
  return (
    <div className="flex-shrink-0 basis-full px-3 sm:basis-1/2 lg:basis-1/3">
      <div className="flex min-h-[320px] flex-col justify-between rounded-[16px] border-[2px] border-[#FFE7B7] bg-[#FFF9F1] px-7 pt-7 pb-8 md:border-[1.4px]">
        <p className="text-left text-base leading-relaxed">{message}</p>
        <div className="flex items-center gap-3">
          <Image
            src={avatar}
            alt={name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="text-left">
            <p className="font-semibold">{name}</p>
            <p className="text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
