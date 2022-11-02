import { getGroupById } from '../../data-access/Groups/get-group-by-id';
import { getGroupByIdService } from './get-group-by-id';

jest.mock('../../data-access/Groups/get-group-by-id');

describe('getGroupByIdService', () => {
  beforeEach(jest.resetAllMocks);

  const mockGroup = {
    id: '21412413sdcsds12312',
    name: 'Users',
    permissions: ['READ', 'SHARE']
  };

  it('shouldn\'t throw any errors', async () => {
    (getGroupById as jest.Mock).mockImplementation(async () => mockGroup);
    expect(await getGroupByIdService('21412413sdcsds12312')).toEqual(mockGroup);
  });
  it('get all user data access method should be called', async () => {
    (getGroupById as jest.Mock).mockImplementation(async () => mockGroup);
    await getGroupByIdService('21412413sdcsds12312');
    expect(getGroupById).toBeCalledTimes(1);
  });
});
