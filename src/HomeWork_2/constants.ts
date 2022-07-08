import { User } from './types';
import { createUser } from './helpers/createUser';

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
