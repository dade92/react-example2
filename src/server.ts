import {createServer, Response, Server} from 'miragejs';

const translationsResponse = {
    translations: {
        'appflow.customerData.hi': 'Hi',
        'appflow.customerData.t_and_c': 'Accept t&c',
    }
}

const initResponse = {
    name: 'Sergio',
    surname: 'Botti'
};

const chuckNorrisResponse = {
    value: 'This is a joke'
}

const initResponseArray = {
    users: [
        {
            name: 'Sergio',
            surname: 'Botti',
            data: {
                profile: 'test'
            }
        },
        {
            name: 'Elena',
            surname: 'Botti',
            data: {
                profile: 'test2'
            }
        },
        {
            name: 'Paola',
            surname: 'Meroni',
            data: {
                profile: 'test3'
            }
        },
    ]
};


const init200 = (): Response => new Response(200, {}, initResponse);
const translations200 = (): Response => new Response(200, {}, translationsResponse);
const chuckNorris200 = (): Response => new Response(200, {}, chuckNorrisResponse);
const init200Array = (): Response => new Response(200, {}, initResponseArray);
export const init500Array = (): Response => new Response(500, {}, {});
const createCustomer204 = (): Response => new Response(204);
const createCustomer400 = (): Response => new Response(400, {}, {});

export const server: () => Server = () =>
    createServer({
        logging: true,
        routes() {
            this.get('/find', init200);
            this.get('/translations', translations200);
            this.get('/retrieveUsers', init200Array);
            this.post('/insert', createCustomer204, {timing: 5000});
            this.get('https://api.chucknorris.io/jokes/random', chuckNorris200);
        },
    });