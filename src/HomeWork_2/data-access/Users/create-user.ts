import { Model, ModelCtor } from 'sequelize';
import { UserRequestData } from '../../models/users';
import { createUserEntity } from '../../services/Users/create-user-entity';

export const createUserInDB = async (usersModel: ModelCtor<Model<any, any>>, { login, password, age }: UserRequestData) => {
  const userData = createUserEntity(login, password, age);
  try {
    await usersModel.create(userData);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
