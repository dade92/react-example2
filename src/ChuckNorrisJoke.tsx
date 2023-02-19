import React, {FC, useEffect, useState} from "react";
import {Typography} from "@mui/material";
import { useRestClientConfiguration } from "./RestClientConfiguration";

interface ChuckNorrisJokeResponse {
    value: string;
}

export const ChuckNorrisJoke: FC = () => {
    const restClient = useRestClientConfiguration();
    const [joke, setJoke] = useState<string>('')

    useEffect(() => {
        restClient.get<ChuckNorrisJokeResponse>(
            'https://api.chucknorris.io/jokes/random'
        ).then(joke => setJoke(joke.value))
    }, []);

    return <Typography data-testid={'joke'} variant="body1" gutterBottom>{joke}</Typography>
}