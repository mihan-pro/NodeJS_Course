import { addUsersToGroup } from '../../data-access/UserGroup/add-users-to-group';

export const addUsersToGroupService = (groupId: string, userIds: string[]) => {
  return addUsersToGroup(groupId, userIds);
};
