import { Groups } from '../../main';

export const deleteGroup = (id: string) => {
  return Groups.destroy({
    where: { id }
  });
};
