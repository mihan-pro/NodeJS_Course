import { GroupPermissions } from '../../models/groups';
import { updateGroup } from '../../data-access/Groups/update-group';

export const updateGroupService = async (id: string, name: string, permissions: GroupPermissions[]) => {
  // TODO add input validation
  return await updateGroup(id, name, permissions);
};
