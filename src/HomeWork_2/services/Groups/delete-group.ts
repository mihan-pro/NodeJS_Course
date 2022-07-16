import { deleteGroup } from '../../data-access/Groups/delete-group';

export const deleteGroupService = async (id: string) => {
  return await deleteGroup(id);
};
