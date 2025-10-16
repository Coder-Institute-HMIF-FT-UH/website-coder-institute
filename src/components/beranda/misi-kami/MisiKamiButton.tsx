'use client';

import clsx from 'clsx';
import React from 'react';

interface MisiKamiButtonProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export const MisiKamiButton: React.FC<MisiKamiButtonProps> = ({
  label,
  active = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'text- w-full rounded-2xl px-4 py-3 text-base font-medium transition-all duration-200',
        'flex cursor-pointer items-center justify-center font-medium',
        active
          ? 'bg-[#FFCB5C]'
          : 'border-[1.2px] border-[#FFE7B7] bg-[#FFF7ED] hover:bg-[#FFECB1]'
      )}
    >
      {label}
    </button>
  );
};
