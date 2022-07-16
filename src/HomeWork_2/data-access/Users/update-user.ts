import { Model, ModelCtor } from 'sequelize';
import { UserRequestData } from '../../models/users';

export const updateUser = async (usersModel: ModelCtor<Model<any, any>>, id: string, { login, password, age }: UserRequestData) => {
  try {
    const result = await usersModel.update({ login, password, age }, {
      where: { id }
    });
    console.clear();
    return result[0];
  } catch (err) {
    console.log(err);
    throw err;
  }
};
