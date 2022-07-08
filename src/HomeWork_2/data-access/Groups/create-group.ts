import { v4 as createId } from 'uuid';
import { Groups } from '../../main';
import { GroupPermissions } from '../../models/groups';

export const createGroup =  (name: string, permissions: GroupPermissions[]) => {
  return Groups.create({
    id: createId(),
    name,
    permissions
  });
};
