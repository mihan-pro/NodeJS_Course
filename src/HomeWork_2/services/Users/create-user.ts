import { UserRequestData } from '../../models/users';
import { validateUser } from './validate-user';
import { createUserInDB } from '../../data-access/Users/create-user';
import { Users } from '../../main';


export const createUser = async (data: UserRequestData) => {
  const { error } = validateUser(data);
  if (error) return error;
  await createUserInDB(Users, data);
  return null;
};
