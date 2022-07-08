import { Model, ModelCtor } from 'sequelize';

export const deleteUser = async (usersModel: ModelCtor<Model<any, any>>, id: string) => {
  try {
    return await usersModel.destroy({
      where: { id }
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};
