import { getAllUsers } from '../../data-access/Users/get-all-users';
import { User } from '../../models/users';
import { SignJWT } from 'jose';
import { createSecretKey } from 'crypto';

export const loginService = async ({ login, password }: {login: string; password: string;}) => {
  if (!login || !password) return null;
  const allUsers = await getAllUsers() as User[];
  const result = allUsers.find((user) => user?.login === login && user?.password === password);
  if (result) {
    return await new SignJWT({})
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('1h')
      .sign(await createSecretKey(process.env.SECRET, 'utf-8'));
  }
  return null;
};
