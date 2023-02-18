import React, {FC, useEffect, useState} from "react";
import {Typography} from "@mui/material";
import {RestClient} from "./RestClient";

interface ChuckNorrisJokeResponse {
    value: string;
}

export const ChuckNorrisJoke: FC = () => {
    const restClient = new RestClient();
    const [joke, setJoke] = useState<string>('')

    useEffect(() => {
        restClient.get<ChuckNorrisJokeResponse>(
            'https://api.chucknorris.io/jokes/random'
        ).then(joke => setJoke(joke.value))
    }, []);

    return <Typography data-testid={'joke'} variant="body1" gutterBottom>{joke}</Typography>
}