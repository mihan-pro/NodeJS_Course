import { getUser } from '../data-access/get-user';
import { Users } from '../main';

export const getUserService = (id: string) => {
  return getUser(Users, id);
};
