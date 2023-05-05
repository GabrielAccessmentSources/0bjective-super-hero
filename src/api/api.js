import axios from 'axios';

export const instance = axios.create({
    baseURL: 'developer.marvel.com',
    headers: {
        Authorization: 'Bearer'
    }
});