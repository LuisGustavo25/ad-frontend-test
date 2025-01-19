//Footer Component
import Link from 'next/link';
import React from 'react';
import { LogoMark } from '@/icons';

export const Footer: React.FC = () => {
  return (
    <footer className='h-[172px] bg-gray-footer flex items-center justify-center'>
      {/* Logo */}
      <Link href='/'>
        <LogoMark className='text-gray-light-darker'/>
      </Link>
    </footer>
  );
};