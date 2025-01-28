'use client';
import {useSearchParams} from "next/navigation";
import React, { useEffect, useState} from 'react';
import { Game } from "@/app/page";
import { Loader, ProductCard } from "@/components";
import {GameService} from '@/services';

interface ProductsProps {
    initialGames: Game[];
    initialGenre: string | undefined;
    initialPage: string;
    totalPages: number;
}

export function Products({ initialGames, initialPage, totalPages }: ProductsProps) {
    //States
    const [games, setGames] = useState<Game[]>(initialGames);
    const [currentPage, setCurrentPage] = useState<number>(parseInt(initialPage, 10));
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [cart, setCart] = useState<Game[]>([]);
    const searchParams = useSearchParams();
    const currentGenre = searchParams?.get('genre') || undefined;
    const page = searchParams?.get('page') || '1';

    // Check local storage for the cart on initial load
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if(storedCart){
            setCart(JSON.parse(storedCart));
        }
        setIsLoading(false);
    }, []);

    // Function to update the cart in local storage
    const updateCartInLocalStorage = (newCart: Game[]):void => {
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    // Handle adding/removing games from the cart
    const handleCartAction = (game: Game):void => {
        const updatedCart:Game[] = cart.some(cartItem => cartItem.id === game.id)
            ? cart.filter(cartItem => cartItem.id !== game.id) // Remove game if already in cart
            : [...cart, game]; // Add game to the cart if not already added

        // Update the local storage
        updateCartInLocalStorage(updatedCart);
    };

    // Update games when the genre or page changes
    useEffect(() => {
        const fetchGames = async () => {
            setIsLoading(true);
            try {
                const response = await GameService.fetchGames(currentGenre, page);
                setGames(response.games);
                setCurrentPage(parseInt(response.currentPage, 10));
            } catch (error) {
                console.error('Error fetching games:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGames();
    }, [currentGenre, page]);

    const fetchMoreGames = async () => {
        if (currentPage >= totalPages || isLoading) return;

        setIsLoading(true);
        try {
            const response = await GameService.fetchGames(currentGenre, (currentPage + 1).toString());
            setGames((prevGames) => [...prevGames, ...response.games]);
            setCurrentPage(parseInt(response.currentPage, 10));
        } catch (error) {
            console.error('Error fetching more games:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            {isLoading ? (
                <div className='flex justify-center align-middle'>
                    <Loader />
                </div>
            ) : (
                <div className='flex flex-col min-h-screen max-w-[1280px] mr-auto ml-auto'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 place-items-center'>
                        {/* Map the games in the Cards */}
                        {games.length > 0 ? (
                            games.map((game) => (
                                <ProductCard
                                    key={game.id}
                                    {...game}
                                    // Check if the game is in the cart
                                    isInCart={cart.some((cartItem) => cartItem.id === game.id)}
                                    // Handle add/remove from cart
                                    onCartAction={() => handleCartAction(game)}
                                />
                            ))
                        ) : (
                            <div className='flex justify-center align-middle'>
                                <span className='font-area text-gray-light-darker text-[24px] md:text-[24px] sm:text-[24px]
                text font-bold leading-6 tracking-wider'>
                                    No Games found.
                                </span>
                            </div> // Show message if no games are found
                        )}
                    </div>
                    {currentPage < totalPages && (
                        <div className="flex w-full justify-start mt-4">
                            <button
                                onClick={fetchMoreGames}
                                className={`font-archivo w-[137px] text-[16px] font-bold tracking-[0.5px]
                                bg-[#3B3B3B] text-white border border-[#3B3B3B] rounded-md ml-2 px-5 py-2
                                transition-all hover:bg-transparent hover:text-gray-dark ${
                                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                                disabled={isLoading || currentPage >= totalPages}
                            >
                                {isLoading ? "Loading..." : "SEE MORE"}
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
