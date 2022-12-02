interface ChuckNorrisJokeResponse {
    value: string;
}

export const getChuckNorrisJoke = async (): Promise<ChuckNorrisJokeResponse> => (
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .catch(reason => console.log('Erro while retrieving jokes.' + reason))
)