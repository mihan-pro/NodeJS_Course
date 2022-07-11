import { Users } from '../../main';

export const deleteUser = async (id: string) => {
  try {
    return await Users.destroy({
      where: { id }
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};
