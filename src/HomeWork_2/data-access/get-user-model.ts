import { Sequelize } from 'sequelize';
import { userModel } from '../models/users';

export const getUserModel = (sequelize: Sequelize) => {
  return sequelize.define('users', userModel, { updatedAt: false, createdAt: false });
};
