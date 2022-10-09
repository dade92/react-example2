import { createServer, Server, Response } from 'miragejs';

const initResponse = {
    name: 'Sergio',
    surname: 'Botti'
};

const initResponseArray = {
  users: [
    {
      name: 'Sergio',
      surname: 'Botti'
    },
    {
      name: 'Elena',
      surname: 'Botti'
    },
  ]
};

const init200 = (): Response => new Response(200, {}, initResponse);
const init200Array = (): Response => new Response(200, {}, initResponseArray);

export const server: () => Server = () =>
  createServer({
    logging: true,
    routes() {
      this.get('/retrieveUser', init200);
      this.get('/retrieveUsers', init200Array);
    },
  });