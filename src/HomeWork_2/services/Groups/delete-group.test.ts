import { deleteGroupService } from './delete-group';
import { deleteGroup } from '../../data-access/Groups/delete-group';

jest.mock('../../data-access/Groups/delete-group');

describe('delete group', () => {
  beforeEach(jest.resetAllMocks);

  it('should be executed without exceptions', async () => {
    (deleteGroup as jest.Mock).mockImplementationOnce(async () => undefined);
    expect(await deleteGroupService('Admins')).toBe(undefined);
  });
  it('should call data access method deleteGroup', async () => {
    (deleteGroup as jest.Mock).mockImplementationOnce(jest.fn);
    await deleteGroupService('Admins');
    expect(deleteGroup).toHaveBeenCalledTimes(1);
  });
});
