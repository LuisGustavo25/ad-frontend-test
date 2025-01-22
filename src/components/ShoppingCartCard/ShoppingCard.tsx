//Shopping Cart Card for Shopping Page
import Image from 'next/image';
import React from 'react';
import {CancelIcon} from "@/icons";

interface ShoppingCardProps {
    name: string;
    description: string;
    price: number;
    image: string;
    genre: string;
    onCartAction: () => void;
}

export const ShoppingCard: React.FC<ShoppingCardProps> = (
    { name, description, price, image, genre, onCartAction }
) => {
  return (
    <div className={'w-full max-w-[678px] h-full md:max-h-[196px] sm:max-h-[196px] px-4 py-4 mb-6 border-b border-gray-light'}>
        <div className={'flex flex-col md:flex-row sm:flex-row gap-8 pb-4'}>
            {/* Shopping Cart Product Image */}
            <div className={'w-[256px] h-[136px] md:h-[156px] sm:h-[156px] overflow-hidden'}>
                <Image
                    src={image}
                    alt={name}
                    width={256}
                    height={156}
                    priority={true}
                    sizes='(max-width: 768px) 186px, (max-width: 1200px) 256px'
                    className='object-cover w-full h-full aspect-auto'
                />
            </div>
            {/* Shopping Cart Product Information */}
            <div>
                <div className='flex justify-between mb-3'>
                    <span className={'font-archivo text-[16px] font-bold text-left uppercase text-gray-medium-darker'}>
                        {genre}
                    </span>
                    <button
                        onClick={()=> {onCartAction()}}
                        className={''}>
                        <CancelIcon />
                    </button>
                </div>
                {/* Product Information */}
                <div className={'flex flex-col'}>
                    <span className='font-archivo text-[18px] font-bold tracking-[0.4px] max-h-[48px] overflow-hidden
                    text-ellipsis whitespace-nowrap'>{name}</span>
                    <span className='font-archivo text-[16px] font-normal tracking-[0.4px]'>{description}</span>
                    <span className='font-archivo text-[20px] font-bold text-gray-dark tracking-[0.4px] text-end mt-6'>
                        ${price}
                    </span>
                </div>
            </div>
        </div>
    </div>
  );
};