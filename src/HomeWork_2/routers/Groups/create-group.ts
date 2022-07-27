import { NextFunction, Request, Response } from 'express';
import { createGroupService } from '../../services/Groups/create-group';
import { logRequestData } from '../../helpers/log-request-data';

export const createUserHandler = async (req: Request, res: Response, next: NextFunction) => {
  // TODO - add parameters validation
  try {
    await createGroupService(req.body.name, JSON.parse(req.body.permissions));
    res.status(200).end();
  } catch (err) {
    logRequestData(req, true);
    next(err);
  }
};
