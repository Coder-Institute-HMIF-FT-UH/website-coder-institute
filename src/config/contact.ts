import { ComponentType, SVGProps } from 'react';

import { EmailIcon, InstagramIcon, LinkedinIcon } from '@/components/icons';

interface ContactItem {
  href: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  iconClass?: string;
  platform: string;
}

export const contacts: ContactItem[] = [
  {
    href: 'https://instagram.com/coderinstitute',
    label: 'coderinstitute',
    icon: InstagramIcon,
    iconClass: 'h-6 w-6',
    platform: 'Instagram',
  },
  {
    href: 'https://linkedin.com/company/coder-institute',
    label: 'Coder Institute',
    icon: LinkedinIcon,
    iconClass: 'h-6 w-6',
    platform: 'LinkedIn',
  },
  {
    href: 'mailto:coderinstutute@gmail.com',
    label: 'coderinstutute@gmail.com',
    icon: EmailIcon,
    iconClass: 'h-5 w-6',
    platform: 'Gmail',
  },
];
