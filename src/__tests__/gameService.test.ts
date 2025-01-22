// __tests__/gameService.test.ts
import { GameService } from '@/services';
// Mock the global fetch API;
// this simple test show a mock connection and a failed connection to the local API.
global.fetch = jest.fn();

describe('GameService', () => {

    beforeAll(() => {
        process.env.NEXT_PUBLIC_API_BASE_URL = 'http://localhost:3001/api';
    });

    afterEach(() => {
        jest.clearAllMocks(); // Clear fetch mocks after each test
    });

    //Test for 200 API response
    it('should fetch games correctly from the API', async () => {
        const mockData = {
            games: [{
                id: '1', name: 'Test Game', genre: 'Action', image: '', description: '', price: 0, isNew: false,
            }],
            availableFilters: ['Action', 'Adventure'],
            totalPages: 1,
            currentPage: '1',
        };

        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        });

        const response = await GameService.fetchGames('action', '1');

        expect(response).toEqual(mockData);
        expect(fetch).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_API_BASE_URL}/games?genre=action&page=1`);
    });

    //Test for error at API response
    it('should throw an error if the API response is not OK', async () => {
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            statusText: 'Not Found',
            json: async () => ({}),
        });

        await expect(GameService.fetchGames('action', '1')).rejects.toThrow('Failed to fetch games: Not Found');
    });
});
