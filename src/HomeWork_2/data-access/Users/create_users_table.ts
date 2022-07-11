import { Users } from '../../main';

export const createUsersTable = async () => {
  await Users.sync();
};
