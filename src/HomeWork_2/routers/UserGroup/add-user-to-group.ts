import { NextFunction, Request, Response } from 'express';
import { addUserToGroupService } from '../../services/UserGroup/add-user-to-group';
import { logRequestData } from '../../helpers/log-request-data';

export const addUserToGroupHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await addUserToGroupService(req.body.groupId, req.body.userId);
    res.status(200).end();
  } catch (err) {
    logRequestData(req, true);
    next(err);
  }
};
