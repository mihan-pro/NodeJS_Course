import { UserGroups } from '../../main';

export const deleteUserFromGroup = (userId: string) => {
  return UserGroups.destroy({ where: { userId } });
};
