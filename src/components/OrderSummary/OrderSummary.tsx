//Shopping Cart Order Summary Component
import React from 'react'
import {Game} from '@/app/page';

interface OrderSummaryProps {
    ShoppingCart: Game[];
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ ShoppingCart }) => {
    //Set the total value to check out
    const orderTotal = ShoppingCart.reduce((total, game) =>
        total + game.price, 0).toFixed(2);

    return (
      <div className={'flex flex-col w-full max-w-[327px] md:max-w-[522px]'}>
          {/* Order Summary */}
          <div className={'w-full flex flex-col px-4 py-4 border border-[#8F8F8F] rounded-2xl'}>
              <h4 className={'font-archivo text-[24px] font-bold text-gray-dark'}>Order Summary</h4>
              <span className={'font-archivo text-[18px] font-medium text-gray-dark mb-4'}>
              {ShoppingCart.length === 0
                  ? '0 items'
                  : `${ShoppingCart.length} item${ShoppingCart.length > 1 ? 's' : ''}`}
              </span>

              {/* Items to check out */}
              <div className={'flex flex-col gap-4 mt-6 border-b border-[#8F8F8F] pb-4 mb-4'}>
                  {ShoppingCart.map((game) => (
                      <div key={game.id} className='flex justify-between'>
                          <span className='font-archivo text-[18px] font-medium text-gray-dark'>{game.name}</span>
                          <span className='font-archivo text-[18px] font-medium text-gray-dark'>${game.price.toFixed(2)}</span>
                      </div>
                  ))}
              </div>
              {/* Total Price */}
              <div className={'flex justify-between mt-2 mb-4'}>
                  <h4 className={'font-archivo text-[20px] font-bold text-gray-dark'}>Order Total</h4>
                  <h4 className={'font-archivo text-[20px] font-bold text-gray-dark'}>${orderTotal? orderTotal : '$000.00'}</h4>
              </div>
          </div>
          {/* Checkout Button */}
          <div className='flex w-full h-[56px] justify-center mt-4'>
              <button
                  className='font-archivo w-full text-[16px] font-bold tracking-[0.5px]
              bg-[#3B3B3B] text-white border border-[#3B3B3B]  rounded-md px-5 py-2
              transition-all hover:bg-transparent hover:text-gray-dark'
              >
                  Checkout
              </button>
          </div>
      </div>
    );
}