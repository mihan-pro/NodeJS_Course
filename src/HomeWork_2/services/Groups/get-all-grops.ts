import { getAllGroups } from '../../data-access/Groups/get-all-groups';

export const getAllGroupsService = async () => {
  try {
    const data = await getAllGroups();
    console.log('data = ', data);
    return data;
  } catch (err) {
    console.error(err);
  }
};
