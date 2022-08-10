import { Users } from '../../main';

export const getAllUsers = async () => {
  return await Users.findAll({ raw: true });
};
