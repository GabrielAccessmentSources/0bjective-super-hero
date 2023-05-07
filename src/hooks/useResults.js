import { useEffect, useState } from "react";

import marvel from "../api/marvel";
import { ts, pubKey, hash } from "../helpers/secrets";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async ({ searchHero = null, page }) => {
        try {
            let params = {
                limit: 5,
                offset: page
            };

            if (searchHero) {
                params.name = searchHero;
            }

            console.log("Ive fetched")

            const response = await marvel.get(`characters?ts=${ts}&apikey=${pubKey}&hash=${hash}`, {
                params,
            });

            setResults(response.data.data.results);
        } catch (error) {
            console.log(error)
            setErrorMessage("Something went wrong");
        }
    };

    useEffect(() => {
        searchApi({ searchHero: null, page: 0 });
    }, []);

    return [searchApi, results, errorMessage ];
};
