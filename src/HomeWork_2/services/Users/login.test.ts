import { getAllUsers } from '../../data-access/Users/get-all-users';
import { SignJWT } from 'jose';
import { loginService } from './login';

jest.mock('../../data-access/Users/get-all-users');
jest.mock('jose');
jest.mock('crypto');

describe('loginService', () => {
  beforeEach(jest.resetAllMocks);
  const users = [
    { login: 'userName', password: '12345' },
    { login: 'nameOfperson', password: '231241' },
    { login: 'anything', password: '23dq211dqw' }
  ];

  it('it should return null in case of lack of params ', async () => {
    expect(await loginService({ login: '', password: 'qwerty12345' })).toBeNull();
    expect(await loginService({ login: 'UserName', password: '' })).toBeNull();
  });

  it('should return null if requested users haven\'t been found', async () => {
    (getAllUsers as jest.Mock).mockImplementationOnce(() => users);
    expect(await loginService({ login: 'Stiven', password: 'qwerty12345' })).toBeNull();
    (getAllUsers as jest.Mock).mockImplementationOnce(() => []);
    expect(await loginService({ login: 'Stiven', password: 'qwerty12345' })).toBeNull();
    expect(getAllUsers).toBeCalledTimes(2);
  });

  it('should return jwt token in successful case', async () => {
    const JWT = 'jwtTokenWhichIsEncoded';
    (getAllUsers as jest.Mock).mockImplementationOnce(() => users);
    (SignJWT as jest.Mock).mockImplementation(function () {
      this.setProtectedHeader = function () {
        return this;
      };
      this.setExpirationTime = function () {
        return this;
      };
      this.sign = function () {
        return JWT;
      };
    });
    expect(await loginService({ login: 'userName', password: '12345' })).toBe(JWT);
  });
});
