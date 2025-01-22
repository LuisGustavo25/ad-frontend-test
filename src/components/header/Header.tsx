//Header Component
import Link from 'next/link';
import React from 'react';
import {ShopIcon} from '@/icons';

export const Header: React.FC = () => {
    return (
        <header className='sticky top-0 z-50 flex items-center justify-between h-16 w-full px-10 bg-gray-header'>
            {/* Logo */}
            <Link href='/'>
                <h1 className='font-area text-gray-light-darker text-[24px] md:text-[24px] sm:text-[24px]
                text font-bold leading-6 tracking-wider'>
                    GamerShop
                </h1>
            </Link>

            {/* Cart Icon */}
            <Link href='/cart'>
                <ShopIcon className='w-6 h-6 text-gray-light-darker' />
            </Link>
        </header>
    );
};