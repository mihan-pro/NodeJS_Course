import { Client } from 'pg';
import { User } from '../../models/users';
import { Users } from '../../main';

export const insertListOfUsers = async (client: Client, users: User[]) => {
  try {
    const usersInTable = await Users.findAll();
    if (usersInTable.length) {
      return;
    }
    users.forEach((user) => {
      Users.create(user);
    });
  } catch (err) {
    console.log(err);
  }
};

//   users.forEach(({ id, login, password, age, is_deleted }) => {
//     client.query('INSERT INTO Users (id, login, password, age, is_deleted) VALUES ($1, $2, $3, $4, $5)', [id, login, password, age, is_deleted])
//       .then(() => console.log(`User: ${login} was successfuly added`))
//       .catch((err) => console.log(err));
//   });
// };
