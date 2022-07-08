import { connectToDatabase } from '../data-access/connect-to-database';
import { DB_Client } from '../data-access/connection-client';
import { createUsersTable } from '../data-access/Users/create_users_table';
import { clearUserTable } from '../data-access/Users/clear_user_table';
import { insertListOfUsers } from '../data-access/Users/insert_list_of_users';
import { usersMock } from '../constants';
import { createGroupsTable } from '../data-access/Groups/create-groups-table';

export const initApp = async () => {
  try {
    connectToDatabase(DB_Client);
    createUsersTable(DB_Client);
    clearUserTable(DB_Client);
    insertListOfUsers(DB_Client, usersMock);
    await createGroupsTable();
  } catch (err) {
    console.error(err);
  }
};
