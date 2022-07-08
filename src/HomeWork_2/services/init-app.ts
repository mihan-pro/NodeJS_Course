import { connectToDatabase } from '../data-access/connect-to-database';
import { DB_Client } from '../data-access/connection-client';
import { createUsersTable } from '../data-access/create_users_table';
import { clearUserTable } from '../data-access/clear_user_table';
import { insertListOfUsers } from '../data-access/insert_list_of_users';
import { usersMock } from '../constants';

export const initApp = () => {
  connectToDatabase(DB_Client);
  createUsersTable(DB_Client);
  clearUserTable(DB_Client);
  insertListOfUsers(DB_Client, usersMock);
};
