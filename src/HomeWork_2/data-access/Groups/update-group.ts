import { Groups } from '../../main';
import { GroupPermissions } from '../../models/groups';

export const updateGroup = async (id: string, name: string, permissions: Array<GroupPermissions>) => {
  return Groups.update({ name, permissions }, { where: { id } });
};
