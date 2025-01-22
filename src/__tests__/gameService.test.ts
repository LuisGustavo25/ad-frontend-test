// __tests__/gameService.test.ts
import { GameService } from '@/services';
// Mock the global fetch API;
// this simple test show a mock connection and a failed connection to the local API.
global.fetch = jest.fn();

describe('GameService', () => {

    //Test for 200 API response
    it('should fetch games correctly from the API', async () => {
        // Mock the API response
        const mockData = {
            games: [{
                id: '1', name: 'Test Game', genre: 'Action', image: '', description: '', price: 0, isNew: false
            }],
            availableFilters: ['Action', 'Adventure'],
            totalPages: 1,
            currentPage: '1',
        };

        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        });

        // Call the service to fetch games
        const response = await GameService.fetchGames('action', '1');

        expect(response).toEqual(mockData); // Ensure the response matches the mock data
        expect(fetch).toHaveBeenCalledWith('http://localhost:3000/api/games?genre=action&page=1');
    });

    //Test for error at API response
    it('should throw an error if the API response is not OK', async () => {
        // Simulate an error response
        (fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            statusText: 'Not Found',
            json: async () => ({}),
        });

        await expect(GameService.fetchGames('action', '1')).rejects.toThrow('Failed to fetch games: Not Found');
    });
});
