import { addUserToGroup } from '../../data-access/UserGroup/add-user-to-group';

export const addUserToGroupService = (groupId: string, userId: string) => {
  return addUserToGroup(groupId, userId);
};
