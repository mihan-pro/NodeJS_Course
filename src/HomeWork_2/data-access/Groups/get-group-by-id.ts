import { Groups } from '../../main';

export const getGroupById = (id: string) => {
  return Groups.findOne({
    where: { id }
  });
};
