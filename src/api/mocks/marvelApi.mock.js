import axios from 'axios';

jest.mock('axios');

const mockResponse = {
    data: {
        data: {
            results: [
                {
                    id: 1,
                    name: 'Iron Man',
                    thumbnail: {
                        path: 'https://...',
                        extension: 'jpg',
                    },
                },
                {
                    id: 2,
                    name: 'Spider-Man',
                    thumbnail: {
                        path: 'https://...',
                        extension: 'jpg',
                    },
                },
            ],
        },
    },
};

axios.get.mockImplementation((url, options) => {
    if (url === '/characters/1') {
        return Promise.resolve(mockResponse);
    } else {
        return Promise.reject(new Error('Invalid URL'));
    }
});