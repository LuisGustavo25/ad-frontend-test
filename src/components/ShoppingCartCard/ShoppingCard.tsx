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
    <div className={'w-full max-w-[678px] max-h-[196px] px-8 py-8 mb-6 border-b border-gray-light'}>
        <div className={'flex gap-8'}>
            {/* Shopping Cart Product Image */}
            <div className={'w-[256px] h-[156px] overflow-hidden'}>
                <Image
                    src={image}
                    alt={name}
                    width={256}
                    height={156}
                    priority={true}
                    sizes='(max-width: 768px) 186px, (max-width: 1200px) 256px'
                    className='object-cover w-full h-full'
                />
            </div>
            {/* Shopping Cart Product Information */}
            <div>
                <div className='flex justify-between font-archivo text-16 font-bold text-left uppercase text-gray-medium-darker mt-4'>
                    <span>{genre}</span>
                    <button
                        onClick={()=> {onCartAction()}}
                        className={''}>
                        <CancelIcon />
                    </button>
                </div>
                {/* Product Information */}
                <div className={'flex flex-col'}>
                    <span className='font-archivo text-18 font-bold tracking-[0.4px]'>{name}</span>
                    <span className='font-archivo text-18 font-normal tracking-[0.4px]'>{description}</span>
                    <span className='font-archivo text-18 font-bold tracking-[0.4px] text-end mt-6'>${price}</span>
                </div>
            </div>
        </div>
    </div>
  );
};