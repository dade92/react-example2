interface ChuckNorrisJokeResponse {
    value: string;
}

export const getChuckNorrisJoke = async (): Promise<ChuckNorrisJokeResponse> => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');

    if(response.ok) {
        return (await response.json()) as ChuckNorrisJokeResponse;
    } else {
        console.log("Something went wrong while calling Chuck Norris API");
        return {value: ''};
    }
}