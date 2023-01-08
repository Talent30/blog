import { Hono } from 'hono';

const app = new Hono();

app.get('/api/chart', (c) => {
  return c.json({ message: 'Hellooooo from Hooooono' });
});

export default async (request: Request) => app.request(request);

export const config = {
  runtime: 'experimental-edge',
};
