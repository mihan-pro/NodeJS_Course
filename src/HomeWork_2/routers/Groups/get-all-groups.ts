import { NextFunction, Request, Response } from 'express';
import { getAllGroupsService } from '../../services/Groups/get-all-grops';
import { logRequestData } from '../../helpers/log-request-data';

export const getAllUsersHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await getAllGroupsService();
    if (data) {
      res.status(200).end(JSON.stringify(data));
    }
  } catch (err) {
    logRequestData(req, true);
    next(err);
  }
};
