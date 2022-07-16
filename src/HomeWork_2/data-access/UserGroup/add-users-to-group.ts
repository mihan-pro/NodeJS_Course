import { sequelize } from '../../main';
import { addUserToGroup } from './add-user-to-group';

export const addUsersToGroup = (groupId: string, userIds: string[]) => {
  return sequelize.transaction(async () => {
    for await (const id of userIds) {
      await addUserToGroup(groupId, id);
    }
  });
};
