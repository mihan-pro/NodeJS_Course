import { deleteGroup } from '../../data-access/Groups/delete-group';

export const deleteGroupService = (id: string) => {
  return deleteGroup(id);
};
