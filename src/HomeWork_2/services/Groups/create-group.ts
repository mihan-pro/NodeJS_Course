import { GroupPermissions } from '../../models/groups';
import { createGroup } from '../../data-access/Groups/create-group';

export const createGroupService = async (name: string, permissions: GroupPermissions[]) => {
  return await createGroup(name, permissions);
};
