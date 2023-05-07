import { useState } from "react";

import marvel from "../api/marvel";
import { ts, pubKey, hash } from "../helpers/secrets";

export default () => {
    const [details, setDetails] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const searchDetails = async({heroId}) => {
        try {
            const response = await marvel.get(`/characters/${heroId}`, { params: {
                    ts: ts,
                    apikey: pubKey,
                    hash: hash
            }});

            setDetails(response.data.data.results[0])
        } catch (error) {
            setErrorMessage("Something went wrong")
        }
    };

    return [searchDetails, details, errorMessage];
};