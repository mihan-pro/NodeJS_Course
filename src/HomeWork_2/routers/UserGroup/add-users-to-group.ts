import { Response, Request, NextFunction } from 'express';
import { addUsersToGroupService } from '../../services/UserGroup/add-users-to-group';
import { logRequestData } from '../../helpers/log-request-data';

export const addUsersToGroupHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await addUsersToGroupService(req.body.groupId, req.body.userIds);
    res.status(200).end();
  } catch (err) {
    logRequestData(req, true);
    next(err);
  }
};
