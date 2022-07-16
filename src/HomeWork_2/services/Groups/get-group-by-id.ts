import { getGroupById } from '../../data-access/Groups/get-group-by-id';

export const getGroupByIdService = async (id: string) => {
  return await getGroupById(id);
};
