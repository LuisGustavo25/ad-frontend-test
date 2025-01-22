//Game Services server side:
import {Game} from '@/app/page';

const API_BASE_URL: string = process.env.NEXT_PUBLIC_API_BASE_URL || '';

if (!API_BASE_URL) {
    throw new Error('API_BASE_URL is not defined. Please set the environment variable.');
}

export const GameService = {
    async fetchGames(genre:string|undefined, page:string|undefined ): Promise<{
        games: Game[];
        availableFilters: string[];
        totalPages: number;
        currentPage: string;
    }> {
        try {
            let url: string = `${API_BASE_URL}/games?page=${page || 1}`;

            if (!!genre) {
                url = `${API_BASE_URL}/games?genre=${genre}&page=${page || 1}`;
            }
            console.log(`Fetching url: ${url}`);
            const response = await fetch(url);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(`Failed to fetch games: ${response.statusText}`);
            }
            console.log('Response data; ',data);
            return data;
        } catch (error) {
            console.error("Error in GameService:", error);
            throw error;
        }
    },
};