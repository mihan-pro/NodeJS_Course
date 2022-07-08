import { Groups } from '../../main';

export const getAllGroups = () => {
  return Groups.findAll();
};
