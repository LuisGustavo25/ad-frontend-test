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
        <div className={'max-w-[1280px] flex flex-col justify-center self-center'}>
            {/* Header option */}
            <Link href='/'>
            <div className={'flex gap-1 h-[72px] px-5 py-5 align-middle'}>
                    <ArrowLeft/>
                    <span className={'font-archivo text-16 font-normal text-gray-dark'}>Back to Catalog</span>
                </div>
            </Link>
            {/* Cart items */}
            <div>
                <h2>Your Cart</h2>
                <span className={'font-archivo text-16 font-medium text-gray-dark'}>{ShoppingCart.length} items</span>

                <div className={'flex gap-4'}>
                    <div className={'flex flex-col'}>
                        {/* Map the Shopping cart items */}
                        {ShoppingCart.map((game) => (
                            <ShoppingCard
                                key={game.id}
                                name={game.name}
                                description={game.description}
                                price={game.price}
                                image={game.image}
                                genre={game.genre}
                                onCartAction={() => onRemove(game)}
                            />
                        ))}
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