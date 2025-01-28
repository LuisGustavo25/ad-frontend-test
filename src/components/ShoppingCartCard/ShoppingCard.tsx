import Image from 'next/image';
import React from 'react';
import { CancelIcon } from "@/icons";

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
        <div className={'w-full h-full px-2 py-2 border-b border-gray-light'}>
            <div className={'flex flex-col sm:flex-row gap-8 h-full'}>
                {/* Shopping Cart Product Image */}
                <div className={'max-w-[256px] max-h-[136px] md:max-h-[156px] overflow-hidden'}>
                    <Image
                        src={image}
                        alt={name}
                        width={256}
                        height={156}
                        priority={true}
                        sizes='(max-width: 768px) 186px, (max-width: 1024px) 256px'
                        className='object-cover w-full h-full aspect-auto'
                    />
                </div>

                {/* Shopping Cart Product Information */}
                <div className="flex flex-col flex-1 min-w-0 h-full justify-between">
                    {/* Genre and Cancel Button */}
                    <div className='flex justify-between items-start mb-3'>
                    <span className={'font-archivo text-sm lg:text-[16px] font-bold text-left uppercase text-gray-medium-darker'}>
                        {genre}
                    </span>
                        <button
                            onClick={() => { onCartAction() }}
                            className={'flex-shrink-0'}>
                            <CancelIcon />
                        </button>
                    </div>

                    {/* Product Information */}
                    <div className={'flex flex-col w-full h-full justify-between'}>
                        <div className={'flex flex-col md:flex-row gap-1'}>
                            <span className='font-archivo text-sm lg:text-[18px] font-bold tracking-[0.4px] max-h-[48px] overflow-hidden text-ellipsis'>
                                {name}
                            </span>
                                <span className='font-archivo text-sm lg:text-[16px] font-normal tracking-[0.4px] overflow-hidden text-ellipsis'>
                                {description}
                            </span>
                        </div>
                        <span className='font-archivo text-sm lg:text-[20px] font-bold text-gray-dark tracking-[0.4px] text-end mt-2'>
                        ${price}
                    </span>
                    </div>
                </div>
            </div>
        </div>
    );
};