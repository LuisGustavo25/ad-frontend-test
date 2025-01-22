'use client'
import {useRouter, useSearchParams} from 'next/navigation';
import React from 'react';

const genres: string[] = [
    'Action', 'Adventure', 'RPG', 'Shooter', 'Puzzle', 'Horror',
    'Sports', 'Racing', 'Strategy', 'MOBA', 'Indie', 'Battle Royale',
];

interface GenreFilterProps {
    currentGenre: string | undefined;
    currentPage: string | undefined;
}

export function GenreFilter({ currentGenre }: GenreFilterProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const genre = event.target.value || undefined;

        const newParams = new URLSearchParams(searchParams?.toString());
        if (genre) {
            newParams.set('genre', genre);
        } else {
            newParams.delete('genre');
        }
        newParams.set('page', '1'); // Reset to the first page
        router.push(`?${newParams}`);
    };
    return (
        <div className='px-10 mb-6 border-b border-gray-light'>
            {/* Label */}
            <label htmlFor='genre-filter'
                   className=' font-archivo text-gray-light-darker font-bold block mb-2 text-[36px]
                   md:text-[36px] sm:text-[24px]'>
                Top Sellers
            </label>
            <div className={'w-full h-[56px] px-2 py-2'}>
                {/* Filter for Genre */}
                <div className={'flex justify-start md:justify-end align-middle'}>
                    <span className={'font-archivo tex-gray-dark text-[20px] md:text-[20px] sm:text-[20px] font-bold mr-5'}>
                        Genre</span>
                    <span className={'font-archivo tex-gray-dark text-[20px] md:text-[20px] sm:text-[20px] font-normal'}>|</span>
                    <select
                        id='genre-filter'
                        value={currentGenre}
                        onChange={handleGenreChange}
                        className='w-max[237px] ml-2 rounded-md flex items-center'
                    >
                        <option className={'font-archivo font-normal text-[20px] md:text-[20px] sm:text-[20px] self-center pt-2'}
                            value=''>All</option>
                        {genres.map((g) => (
                            <option key={g} value={g}>
                                {g}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}