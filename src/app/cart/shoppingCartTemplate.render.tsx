//Shopping Cart Template
import Link from 'next/link';
import {Game} from '@/app/page';
import {ShoppingCard, OrderSummary} from '@/components';
import {ArrowLeft} from '@/icons';

interface ShoppingCartPageTemplateProps {
    ShoppingCart: Game[];
    onRemove: (game: Game) => void;
}

export const shoppingCartPageTemplate  =
    ({ ShoppingCart, onRemove }: ShoppingCartPageTemplateProps) => {
    return (
    <div className={'w-full flex flex-col justify-center'}>
        <div className={'px-10 mb-6'}>
            {/* Header option */}
            <Link href='/'>
            <div className={'flex gap-1 h-[72px] py-4 align-middle my-2'}>
                    <ArrowLeft/>
                    <span className={'font-archivo text-[16px] font-regular text-gray-dark'}>Back to Catalog</span>
                </div>
            </Link>
            {/* Cart items */}
            <div>
                <h2 className={'font-archivo font-bold text-[36px] md:text-[24px] sm:text-[24px]'}>
                    Your Cart
                </h2>
                <span className={'font-archivo text-[24px] font-normal text-gray-dark'}>
                    {ShoppingCart.length === 0
                        ? '0 items'
                        : `${ShoppingCart.length} item${ShoppingCart.length > 1 ? 's' : ''}`}
                </span>

                <div className={'flex flex-col sm:flex-row gap-6 justify-between'}>
                    <div className={'flex flex-col justify-between w-full sm:w-auto'}>
                        {ShoppingCart.length > 0 ? (
                            /* Map the Shopping cart items */
                            ShoppingCart.map((game) => (
                                <ShoppingCard
                                    key={game.id}
                                    name={game.name}
                                    description={game.description}
                                    price={game.price}
                                    image={game.image}
                                    genre={game.genre}
                                    onCartAction={() => onRemove(game)}
                                />
                            ))
                        ) : (
                            <div className='flex justify-center align-middle'>
                                <span className='font-area text-gray-light-darker text-[24px] md:text-[24px] sm:text-[24px]
                                text font-bold leading-6 tracking-wider'>
                                    No Games in the Shopping Cart.
                                </span>
                            </div>
                        )}
                    </div>
                    <div>
                        <OrderSummary ShoppingCart={ShoppingCart} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};