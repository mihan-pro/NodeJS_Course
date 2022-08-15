import { deleteUser } from '../../data-access/Users/delete-user';
import { deleteUserService } from './delete-user';

jest.mock('../../data-access/Users/delete-user');

describe('', () => {
  beforeEach(jest.resetAllMocks);

  it('should be executed without exceptions', async () => {
    (deleteUser as jest.Mock).mockImplementationOnce(async () => undefined);
    expect(await deleteUserService('213qwwqe12312')).toBe(undefined);
  });
  it('should call data access method deleteGroup', async () => {
    (deleteUser as jest.Mock).mockImplementationOnce(jest.fn);
    await deleteUserService('213qwwqe12312');
    expect(deleteUser).toHaveBeenCalledTimes(1);
  });
});
