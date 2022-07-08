import { Model, ModelCtor } from "sequelize";

export const getUser = (usersModel: ModelCtor<Model<any, any>>, id: string) => {
  try {
    return  usersModel.findOne({
      where: { id }
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};
