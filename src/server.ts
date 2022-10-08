import { createServer, Server, Response } from 'miragejs';

const initResponse = {
    name: 'Davide',
    surname: 'Botti'
};

const init200 = (): Response => new Response(200, {}, initResponse);

export const server: () => Server = () =>
  createServer({
    logging: true,
    routes() {
      this.get('/init', init200);
    },
  });