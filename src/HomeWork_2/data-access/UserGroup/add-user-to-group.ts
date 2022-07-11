import { UserGroups } from '../../main';

export const addUserToGroup = (groupId: string, userId: string) => {
  return UserGroups.create({ groupId, userId });
};
