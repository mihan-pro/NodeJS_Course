import { DataTypes, ModelAttributes, Sequelize } from 'sequelize';

export const groupModel: ModelAttributes = {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  permissions: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  }
};

export const getGroupsModel = (sequelize: Sequelize) => {
  return sequelize.define('groups', groupModel, { updatedAt: false, createdAt: false });
};
