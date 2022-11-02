import { getAllGroups } from '../../data-access/Groups/get-all-groups';

export const getAllGroupsService = async () => {
  return await getAllGroups();
};
