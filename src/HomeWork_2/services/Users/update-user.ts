import { validateUser } from './validate-user';
import { UserRequestData } from '../../models/users';
import { Users } from '../../main';
import { updateUser } from '../../data-access/Users/update-user';

export const updateUserService = async (id: string, data: UserRequestData) => {
  const { error } = validateUser(data);
  if (error) {
    return {
      message: error.message,
      status: 400
    };
  }
  const result = await updateUser(Users, id, data);
  if (!result) {
    return {
      message: 'The user havn\'t been found',
      status: 404
    };
  }
  return null;
};
