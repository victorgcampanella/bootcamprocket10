import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (request, response) => {
  const user = await User.create({
    name: 'Victor',
    email: 'teste@gmail.com',
    password_hash: '123456',
  });

  response.json(user);
});

export default routes;
