import { DataTypes, Sequelize } from 'sequelize';

const userModel = {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
};

export const getUserModel = (sequelize: Sequelize) => {
  return sequelize.define('users', userModel, { updatedAt: false, createdAt: false });
};
