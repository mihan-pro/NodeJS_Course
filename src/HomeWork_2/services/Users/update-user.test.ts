import { validateUser } from './validate-user';
import { updateUser } from '../../data-access/Users/update-user';
import { updateUserService } from './update-user';

jest.mock('./validate-user');
jest.mock('../../main');
jest.mock('../../data-access/Users/update-user');

describe('updateUserService',  () => {
  beforeEach(jest.resetAllMocks);
  it('should return null in positive update scenario', async () => {
    const userDataMock = { login: 'name', password: 'qwerty', age: 18 };
    (validateUser as jest.Mock).mockImplementationOnce(() => ({ error: null }));
    (updateUser as jest.Mock).mockImplementationOnce(() => true);
    expect(await updateUserService('1232131', userDataMock)).toBeNull();
  });
  it('should return error with status 400 if validation error appeared', async () => {
    const errorMock = { error: { message: 'smth went wrong' } };
    const userDataMock = { login: 'name', password: 'qwerty', age: 18 };
    const expectedResult = {
      message: 'smth went wrong',
      status: 400
    };
    (validateUser as jest.Mock).mockImplementationOnce(() => errorMock);
    (updateUser as jest.Mock).mockImplementationOnce(() => true);
    expect(await updateUserService('1231231', userDataMock)).toEqual(expectedResult);
  });
  it('should return {message: \'The user havn\'t been found\',  status: 404}', async () => {
    const userDataMock = { login: 'name', password: 'qwerty', age: 18 };
    const expectedResult = {
      message: 'The user havn\'t been found',
      status: 404
    };
    (validateUser as jest.Mock).mockImplementationOnce(() => ({ error: null }));
    (updateUser as jest.Mock).mockImplementation(() => undefined);
    expect(await updateUserService('23213121', userDataMock)).toEqual(expectedResult);
  });
});
