//Product Card Item for Catalog Page
//name, description, price, image, genre, and display the "New" label using the isNew attribute.
'use client';
import Image from 'next/image';
import React, {useState} from 'react'

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
    {name, price, image, genre, isNew, isInCart, onCartAction }:ProductCardProps
) => {
    const [isInCartLocale, setIsInCart] = useState(isInCart);

    const handleCartAction = () => {
        setIsInCart(!isInCartLocale);
        onCartAction(); // Update the cart in the parent component
    };
  return (
        <div className='w-[327px] h-[436px] max-h-[436px] px-8 py-8 border border-[#8F8F8F] rounded-2xl mt-4 mb-4 md:w-[380px]'>
            <div className='flex flex-col'>
                {/* Product Image & IsNew label */}
                <div className='w-full max-h-[240px] relative overflow-hidden'>
                    {isNew && (
                        <div className='absolute w-[57px] h-[32px] top-3 left-3 bg-[#F5F5F4] text-center px-2 py-1 rounded
                        border border-[#8F8F8F]'>
                            <span className='font-archivo font-normal text-gray-dark text-[16px]'>New</span>
                        </div>
                    )}
                    <Image
                        src={image}
                        alt={name}
                        width={332}
                        height={240}
                        priority={true}
                        sizes='(max-width: 768px) 279px, (max-width: 1200px) 332px'
                        className='max-h-[240px] object-cover rounded-t-2xl'
                    />
                </div>

                {/* Product Genre */}
                <span className='font-archivo text-[16px] font-bold text-left uppercase text-gray-medium-darker mt-1'>{genre}</span>

                {/* Product Title & Price */}
                <div className='flex justify-between items-center gap-2 mt-2'>
                    <span className='font-archivo text-[18px] font-bold tracking-[0.4px] max-h-[48px] overflow-hidden
                    text-ellipsis whitespace-nowrap'>{name}</span>
                    <span className='font-archivo text-[20px] text-gray-dark font-bold tracking-[0.4px]'>${price}</span>
                </div>

                {/* Add to Cart Button */}
                <div className='flex w-full justify-center mt-4'>
                    <button
                        onClick={handleCartAction}
                        className='font-archivo w-full h-[56px] text-[16px] font-bold tracking-[0.5px]
                        text-gray-dark border border-[#3B3B3B] rounded-md px-4 py-2
                        transition-all hover:bg-[#3B3B3B] hover:text-white'
                    >
                        {isInCart ? 'REMOVE' : 'ADD TO CART'}
                    </button>
                </div>
            </div>
        </div>
    );
};