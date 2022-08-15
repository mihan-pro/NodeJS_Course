import { createGroupService } from './create-group';
import { createGroup } from '../../data-access/Groups/create-group';

jest.mock('../../data-access/Groups/create-group');

describe('create group', () => {
  beforeEach(jest.resetAllMocks);
  it('should be executed without exceptions', async () => {
    (createGroup as jest.Mock).mockImplementationOnce(async () => undefined);
    expect(await createGroupService('Admins', ['READ', 'SHARE'])).toBe(undefined);
  });
  it('should call data access method createGroup', async () => {
    (createGroup as jest.Mock).mockImplementationOnce(jest.fn);
    await createGroupService('Admins', ['READ', 'SHARE']);
    expect(createGroup).toHaveBeenCalledTimes(1);
  });
});
