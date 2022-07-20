import { NextFunction, Request, Response } from 'express';
import { deleteGroupService } from '../../services/Groups/delete-group';
import { logRequestData } from '../../helpers/log-request-data';

export const deleteGroupHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await deleteGroupService(req.params?.id ?? '');
    if (result) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    logRequestData(req, true);
    next(err);
  }
};
