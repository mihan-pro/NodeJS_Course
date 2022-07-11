import { deleteUser } from '../../data-access/Users/delete-user';

export const deleteUserService = async (id: string) => {
  return deleteUser(id);
};
