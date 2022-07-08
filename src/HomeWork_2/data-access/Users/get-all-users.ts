import { Model, ModelCtor } from 'sequelize';

export const getAllUsers = async (usersModel: ModelCtor<Model<any, any>>) => {
  const users = await usersModel.findAll();
  return JSON.stringify(users);
};
