import { User } from './models/users';
import { createUserEntity } from './services/Users/create-user-entity';

export const ROUTES = {
  USERS: '/users',
  GROUPS: '/groups',
  USER_GROUPS: '/user-groups',
  LOGIN: '/login'
};

export const usersMock: User[] = [
  createUserEntity('Mikhai', 'pass', 26),
  createUserEntity('Yuriy', 'pass22', 26),
  createUserEntity('Dmitro', 'pa2124ss', 26),
  createUserEntity('Gypsy', 'horse212', 26),
  createUserEntity('Adam', 'querty', 26),
  createUserEntity('nagibator', 'pqdassq', 26),
  createUserEntity('Olly', 'pawerts', 26),
  createUserEntity('Zizu', '1231dev', 26),
  createUserEntity('Aziz', 'pasqwdq__1s', 26)
];
