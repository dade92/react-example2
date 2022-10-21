import { createServer, Server, Response } from 'miragejs';

const initResponse = {
    name: 'Sergio',
    surname: 'Botti'
};

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
  ]
};

const createCustomerResponse = {
  code: '666'
}

const init200 = (): Response => new Response(200, {}, initResponse);
const init200Array = (): Response => new Response(200, {}, initResponseArray);
const createCustomer200 = (): Response => new Response(200, {}, createCustomerResponse);

export const server: () => Server = () =>
  createServer({
    logging: true,
    routes() {
      this.urlPrefix='http://localhost:8081';
      this.get('/retrieveUser', init200);
      this.get('/retrieveUsers', init200Array);
      this.post('/createCustomer', createCustomer200);
    },
  });