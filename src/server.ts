import {createServer, Response, Server} from 'miragejs';

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

const createCustomerResponse = {
    code: '666'
}

const init200 = (): Response => new Response(200, {}, initResponse);
const chuckNorris200 = (): Response => new Response(200, {}, chuckNorrisResponse);
const init200Array = (): Response => new Response(200, {}, initResponseArray);
export const init500Array = (): Response => new Response(500, {}, {});
const createCustomer200 = (): Response => new Response(200, {}, createCustomerResponse);
const createCustomer400 = (): Response => new Response(400, {}, {});

export const server: () => Server = () =>
    createServer({
        logging: true,
        routes() {
            this.get('/find', init200);
            this.get('/retrieveUsers', init200Array);
            this.post('/createCustomer', createCustomer200, {timing: 5000});
            this.get('https://api.chucknorris.io/jokes/random', chuckNorris200);
        },
    });