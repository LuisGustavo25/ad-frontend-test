'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

interface GenreFilterProps {
    selectedGenre?: string;
}

const genres = [
    'Action',
    'Adventure',
    'RPG',
    'Shooter',
    'Puzzle',
    'Horror',
    'Sports',
    'Racing',
    'Strategy',
    'MOBA',
    'Indie',
    'Battle Royale',
];

export function GenreFilter({ selectedGenre }: GenreFilterProps) {
    const router = useRouter();

    const handleGenreChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const genre = event.target.value;

        // Build the URL
        const newUrl = new URL(window.location.href);  // Build an object from the actual URL
        newUrl.searchParams.set('genre', genre);  // Add or update the param in the genre
        newUrl.searchParams.set('page', '1');  // Add or update the param in the page

        // Send the completed URL
        router.push(newUrl.toString());
    };

    return (
        <div className='mb-6 border-b border-gray-light'>
            <label htmlFor='genre-filter'
                   className='text-gray-dark font-bold block mb-2 text-2xl'>
                Top Sellers
            </label>
            <div className={'w-full h-[56px] px-2 py-2'}>
                <div className={'flex justify-end align-middle'}>
                    <span className={'tex-gray-dark text-[20px] font-bold'}>Genre |  </span>
                    <select
                        id='genre-filter'
                        value={selectedGenre || 'All'}
                        onChange={handleGenreChange}
                        className='w-max[237px] ml-2 rounded-md'
                    >
                        <option value=''>All</option>
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