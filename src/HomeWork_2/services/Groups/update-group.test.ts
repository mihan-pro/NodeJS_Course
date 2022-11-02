import { updateGroup } from '../../data-access/Groups/update-group';
import { updateGroupService } from './update-group';

jest.mock('../../data-access/Groups/update-group');

describe('updateGroupService', () => {
  beforeEach(jest.resetAllMocks);

  it('shouldn\'t throw any errors', async () => {
    (updateGroup as jest.Mock).mockImplementation(async () => undefined);
    expect(await updateGroupService('21412413sdcsds12312', 'Users', ['SHARE', 'READ'])).toBe(undefined);
  });
  it('get all user data access method should be called', async () => {
    (updateGroup as jest.Mock).mockImplementation(async () => undefined);
    await updateGroupService('21412413sdcsds12312', 'Users', ['SHARE', 'READ']);
    expect(await updateGroup).toBeCalledTimes(1);
  });
});
