//Product Card Item for Catalog Page
//name, description, price, image, genre, and display the "New" label using the isNew attribute.
import Image from 'next/image';
import React from 'react'

interface ProductCardProps {
    name: string;
    description: string;
    price: number;
    image: string;
    genre: string;
    isNew: boolean;
    isInCart: boolean;
    onCartAction: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = (
    { name, price, image, genre, isNew, isInCart, onCartAction }
) => {
    return (
        <div className='w-[380px] h-auto max-h-[456px] px-8 py-8 border border-[#8F8F8F] rounded-2xl'>
            <div className='flex flex-col'>
                {/* Product Image & IsNew label */}
                <div className='w-full h-64 relative overflow-hidden'>
                    {isNew && (
                        <div className='absolute w-[57px] h-[32px] top-3 left-3 bg-white text-center px-2 py-1 rounded
                        border border-[#8F8F8F]'>
                            <span className='font-archivo font-normal text-gray-dark text-xs leading-none'>New</span>
                        </div>
                    )}
                    <Image
                        src={image}
                        alt={name}
                        width={332}
                        height={240}
                        priority={true}
                        sizes='(max-width: 768px) 268px, (max-width: 1200px) 332px'
                        className='rounded-t-2xl'
                    />
                </div>

                {/* Product Genre */}
                <div className='font-archivo text-16 font-bold text-left uppercase text-gray-medium-darker mt-4 decoration-none'>
                    <span>{genre}</span>
                </div>

                {/* Product Title & Price */}
                <div className='flex justify-between items-center mt-2'>
                    <span className='font-archivo text-18 font-bold tracking-[0.4px]'>{name}</span>
                    <span className='font-archivo text-18 font-bold tracking-[0.4px]'>${price}</span>
                </div>

                {/* Add to Cart Button */}
                <div className='flex w-full justify-center mt-4'>
                    <button
                        onClick={onCartAction}
                        className='font-archivo w-full text-16 font-bold tracking-[0.5px]
                        text-gray-dark border border-[#3B3B3B] rounded-2xl px-4 py-2
                        transition-all hover:bg-[#3B3B3B] hover:text-white'
                    >
                        {isInCart ? 'REMOVE' : 'ADD TO CART'}
                    </button>
                </div>
            </div>
        </div>
    );
};