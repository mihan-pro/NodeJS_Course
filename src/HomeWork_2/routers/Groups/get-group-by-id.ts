import { NextFunction, Request, Response } from 'express';
import { getGroupByIdService } from '../../services/Groups/get-group-by-id';
import { logRequestData } from '../../helpers/log-request-data';

export const getGroupByIdHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await getGroupByIdService(req.params.id);
    if (result) {
      res.status(200).end(JSON.stringify(result));
    } else {
      res.status(404).end();
    }
  } catch (err) {
    logRequestData(req, true);
    next(err);
  }
};
