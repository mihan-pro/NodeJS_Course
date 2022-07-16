import { Model, ModelCtor } from 'sequelize';
import { UserRequestData } from '../../models/users';
import { createUser } from '../../services/Users/createUser';

export const createUserInDB = async (usersModel: ModelCtor<Model<any, any>>, { login, password, age }: UserRequestData) => {
  const userData = createUser(login, password, age);
  try {
    await usersModel.create(userData);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
