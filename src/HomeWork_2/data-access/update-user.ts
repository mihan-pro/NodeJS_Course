import { Model, ModelCtor } from 'sequelize';
import { UserRequestData } from '../types';

export const updateUser = async (usersModel: ModelCtor<Model<any, any>>, id: string, { login, password, age }: UserRequestData) => {
  try {
    const result = await usersModel.update({ login, password, age }, {
      where: { id }
    });
    return result[0];
  } catch (err) {
    console.log(err);
    throw err;
  }
};
