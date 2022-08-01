import { User } from './models/users';
import { createUser } from './services/Users/createUser';

export const ROUTES = {
  USERS: '/users',
  GROUPS: '/groups',
  USER_GROUPS: '/user-groups',
  LOGIN: '/login'
};

export const usersMock: User[] = [
  createUser('Mikhai', 'pass', 26),
  createUser('Yuriy', 'pass22', 26),
  createUser('Dmitro', 'pa2124ss', 26),
  createUser('Gypsy', 'horse212', 26),
  createUser('Adam', 'querty', 26),
  createUser('nagibator', 'pqdassq', 26),
  createUser('Olly', 'pawerts', 26),
  createUser('Zizu', '1231dev', 26),
  createUser('Aziz', 'pasqwdq__1s', 26)
];
