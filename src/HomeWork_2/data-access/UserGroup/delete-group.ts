import { UserGroups } from '../../main';

export const deleteGroupFromAssociation = (groupId: string) => {
  return UserGroups.destroy({ where: { groupId } });
};
