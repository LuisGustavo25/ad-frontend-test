//Catalog Page, this show all the items inside the catalog from the API
"use client";
import {Suspense, useEffect, useState} from 'react';
import {Header, Footer, ProductCard, Loader, GenreFilter} from '@/components';

export interface Game {
    id: string;
    genre: string;
    image: string;
    name: string;
    description: string;
    price: number;
    isNew: boolean;
}

export default function Home() {
    // List State
    const [games, setGames] = useState<Game[]>([]);
    // Loading State
    const [isLoading, setIsLoading] = useState<boolean>(true);
    // Cart State
    const [cart, setCart] = useState<Game[]>([]);
    //Params constants
    const [searchParams, setSearchParams] = useState<URLSearchParams | null>(null); // Para asegurarnos de que el código solo se ejecute en el cliente.

    // Check local storage for the cart on initial load
    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if(storedCart){
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Function to update the cart in local storage
    const updateCartInLocalStorage = (newCart: Game[]) => {
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    };

    useEffect(() => {
        // Check if it's running in the client side
        if (typeof window !== "undefined") {
            setSearchParams(new URLSearchParams(window.location.search));
        }
    }, []);

    // Only when the component it´s running in the client side
    const genre = searchParams ? searchParams.get('genre') || '' : '';
    const page = searchParams ? searchParams.get('page') || '1' : '1';

    //Get the data from the API
    useEffect(() => {
        const fetchGames = async () => {
            setIsLoading(true);
            try {
                // Simulate the call of the local API
                const response = await fetch(`/api/games?genre=${genre}&page=${page}`);
                const data = await response.json();
                // Print the information in the console
                console.log('Fetched games:', data);
                setGames(data.games);
            } catch (error) {
                console.error('Error fetching games:', error);
            } finally {
                setIsLoading(false);
            }
        };
        // Call the function to get the data.
        fetchGames().then(r=>console.log('data: ', r));
    }, [genre, page]);

    // Handle adding/removing games from the cart
    const handleCartAction = (game: Game) => {
        const updatedCart = cart.some(cartItem => cartItem.id === game.id)
            ? cart.filter(cartItem => cartItem.id !== game.id) // Remove game if already in cart
            : [...cart, game]; // Add game to the cart if not already added

        // Update the local storage
        updateCartInLocalStorage(updatedCart);
    };

  return (
      <Suspense fallback={
          <div className='flex justify-center align-middle'>
            <Loader/>
          </div>
      }>
          <main className='w-full h-full'>
              <Header />
              <div className='py-8 h-full'>
                  {/* Filter/Selector for genres */}
                  <GenreFilter selectedGenre={genre} />
                  {/* Loading */}
                  {isLoading ? (
                      <div className='flex justify-center align-middle'>
                          <Loader/>
                      </div>
                  ) : (
                      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center'>
                          {/* Map the games in the Cards */}
                          {games.map((game) => (
                              <ProductCard
                                  key={game.id}
                                  name={game.name}
                                  description={game.description}
                                  price={game.price}
                                  image={game.image}
                                  genre={game.genre}
                                  isNew={game.isNew}
                                  // Check if the game is in the cart
                                  isInCart={cart.some(cartItem => cartItem.id === game.id)}
                                  // Handle add/remove from cart
                                  onCartAction={() => handleCartAction(game)}
                              />
                          ))}
                      </div>
                  )}
              </div>
              <Footer />
          </main>
      </Suspense>
  );
}