import { Request, Response } from 'express';
import { addUserToGroupService } from '../../services/UserGroup/add-user-to-group';

export const addUserToGroupHandler = async ({ body }: Request, res: Response) => {
  try {
    await addUserToGroupService(body.groupId, body.userId);
    res.status(200).end();
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};
