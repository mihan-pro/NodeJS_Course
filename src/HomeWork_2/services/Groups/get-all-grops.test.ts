import { getAllGroups } from '../../data-access/Groups/get-all-groups';
import { getAllGroupsService } from './get-all-grops';

jest.mock('../../data-access/Groups/get-all-groups');

describe('getAllGroupsService', () => {
  beforeEach(jest.resetAllMocks);

  const mockGroups = [{
    id: '21412413sdcsds12312',
    name: 'Users',
    permissions: ['READ', 'SHARE']
  }];

  it('shouldn\'t throw any errors', async () => {
    (getAllGroups as jest.Mock).mockImplementation(async () => mockGroups);
    expect(await getAllGroupsService()).toEqual(mockGroups);
  });
  it('get all user data access method should be called', async () => {
    (getAllGroups as jest.Mock).mockImplementation(async () => mockGroups);
    await getAllGroupsService();
    expect(getAllGroups).toBeCalledTimes(1);
  });
});
