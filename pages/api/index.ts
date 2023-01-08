import { Hono } from 'hono';
import { type NextRequest } from 'next/server';

const app = new Hono();

app.get('/api', (c) => {
  return c.json({ message: 'Hellooooo from Hooooono' });
});

export default async (request: NextRequest) => app.request(request);

export const config = {
  runtime: 'experimental-edge',
};
