import { useEffect, useState } from 'react';

import marvel from "../api/marvel";
import { ts, pubKey, hash } from '../helpers/secrets';


export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchHero = null) => {
        try {
            let params = {
                limit: 5,
                offset: 0
            }

            if (searchHero) {
                params.name = searchHero;
            }

            const response = await marvel.get(`characters?ts=${ts}&apikey=${pubKey}&hash=${hash}`, {
                params,
            });

            setResults(response.data.data.results);
        } catch (error) {
            setErrorMessage('Something went wrong');
        }
    };

    useEffect(() => {
        searchApi(null);
    }, []);

    return [searchApi, results, errorMessage];
};
