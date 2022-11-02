import { getUser } from '../../data-access/Users/get-user';
import { getUserService } from './get-user';

jest.mock('../../data-access/Users/get-user');
jest.mock('../../main');

describe('getUserService', () => {
  beforeEach(jest.resetAllMocks);

  it('should be executed without exceptions', async () => {
    (getUser as jest.Mock).mockImplementationOnce(async () => undefined);
    expect(await getUserService('213qwwqe12312')).toBe(undefined);
  });
  it('should call data access method deleteGroup', async () => {
    (getUser as jest.Mock).mockImplementationOnce(jest.fn);
    await getUserService('213qwwqe12312');
    expect(getUser).toHaveBeenCalledTimes(1);
  });
});
