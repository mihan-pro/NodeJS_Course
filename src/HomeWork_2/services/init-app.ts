import { connectToDatabase } from '../data-access/connect-to-database';
import { DB_Client } from '../data-access/connection-client';
import { createUsersTable } from '../data-access/Users/create_users_table';
import { insertListOfUsers } from '../data-access/Users/insert_list_of_users';
import { usersMock } from '../constants';
import { createGroupsTable } from '../data-access/Groups/create-groups-table';
import { createAssociation } from '../data-access/UserGroup/create-association';

export const initApp = async () => {
  try {
    connectToDatabase(DB_Client);
    await createUsersTable();
    await insertListOfUsers(DB_Client, usersMock);
    await createGroupsTable();
    await createAssociation();
  } catch (err) {
    console.error(err);
  }
};
