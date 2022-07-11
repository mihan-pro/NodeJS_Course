import { Response, Request } from 'express';
import { addUsersToGroupService } from '../../services/UserGroup/add-users-to-group';

export const addUsersToGroupHandler = async ({ body }: Request, res: Response) => {
  try {
    await addUsersToGroupService(body.groupId, body.userIds);
    res.status(200).end();
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};
