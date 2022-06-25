import { deleteUser } from '../data-access/delete-user';
import { Users } from '../main';

export const deleteUserService = (id: string) => {
  return deleteUser(Users, id);
};
