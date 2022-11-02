import { validateUser } from './validate-user';
import { createUserInDB } from '../../data-access/Users/create-user';
import { createUser } from './create-user';
import resetAllMocks = jest.resetAllMocks;

jest.mock('./validate-user');
jest.mock('../../data-access/Users/create-user');
jest.mock('../../main');

describe('create-user service', () => {
  beforeEach(resetAllMocks);

  const userData = {
    login: 'userName',
    password: 'qwerty12345',
    age: 19
  };
  it('validate user data fucntion should be called', async () => {
    const error = ['something went wrong'];
    (validateUser as jest.Mock).mockImplementationOnce(() => ({ error }));
    await createUser(userData);
    expect(validateUser).toBeCalledTimes(1);
  });
  it('should return error in case of validation fail', async () => {
    const error = ['something went wrong'];
    (validateUser as jest.Mock).mockImplementationOnce(() => ({ error }));
    expect(await createUser(userData)).toEqual(error);
  });
  it('create user in DB function should be called', async () => {
    (validateUser as jest.Mock).mockImplementationOnce(() => ({ error: undefined }));
    (createUserInDB as jest.Mock).mockImplementationOnce(() => undefined);
    await createUser(userData);
    expect(createUserInDB).toBeCalledTimes(1);
  });
  it('should return null in case of correct work', async () => {
    (validateUser as jest.Mock).mockImplementationOnce(() => ({ error: undefined }));
    (createUserInDB as jest.Mock).mockImplementationOnce(() => undefined);
    expect(await createUser(userData)).toBeNull();
  });
});
