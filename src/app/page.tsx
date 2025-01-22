//Catalog Page, this show all the items inside the catalog from the API (Server Client)
import {Suspense} from 'react';
import {Products, GenreFilter, Loader} from '@/components';
import {GameService} from '@/services';

export interface Game {
    id: string;
    genre: string;
    image: string;
    name: string;
    description: string;
    price: number;
    isNew: boolean;
}

export default async function Home({ searchParams }:any) {
    //States
    const currentGenre: string | undefined = searchParams?.genre || undefined;
    const currentPage: string | undefined = searchParams?.page || undefined;
    // Load the data from the Service
    const response:{
        games: Game[];
        availableFilters: string[];
        totalPages: number;
        currentPage: string;
    } = await GameService.fetchGames(currentGenre, currentPage)

    return (
            <div className='w-full h-full'>
                <div className='py-8 h-full'>
                    {/* Filter/Selector for genres */}
                    <GenreFilter currentGenre={currentGenre} currentPage={currentPage} />
                    {/* Products */}
                    <Suspense fallback={<Loader/>}>
                        <Products
                            initialGames={response.games}
                            initialGenre={currentGenre}
                            initialPage={response.currentPage}
                            totalPages={response.totalPages}
                        />
                    </Suspense>
                </div>
            </div>
    );
}