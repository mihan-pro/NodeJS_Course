import { Groups, UserGroups, Users } from '../../main';

export const createAssociation = async () => {
  try {
    await Users.belongsToMany(Groups, { through: UserGroups, uniqueKey: 'id', onDelete: 'CASCADE' });
    await Groups.belongsToMany(Users, { through: UserGroups, uniqueKey: 'id', onDelete: 'CASCADE' });
    await UserGroups.sync();
  } catch (err) {
    console.log(err);
  }
};
