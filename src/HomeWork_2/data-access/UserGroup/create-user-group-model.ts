import { DataTypes, ModelAttributes, Sequelize } from 'sequelize';
import { Groups, Users } from '../../main';

export const userGroupModel: ModelAttributes = {
  // TODO error appears when make userIds as array type, don't understand why
  userId: {
    type: DataTypes.UUID,
    references: {
      model: Users,
      key: 'id'
    }
  },
  groupId: {
    type: DataTypes.UUID,
    references: {
      model: Groups,
      key: 'id'
    }
  }
};

export const getUserGroupModel = (sequelize: Sequelize) => {
  return sequelize.define('UserGroups', userGroupModel, { updatedAt: false, createdAt: false });
};
