import { v4 as createId } from 'uuid';
import { User } from '../../models/users';

export const createUser = (login: string, pass: string, age: number): User => {
  if (!login || !pass || !age) {
    throw new Error('There is a lack of params');
  }
  return {
    login,
    password: pass,
    age,
    id: createId(),
    is_deleted: false
  };
};
