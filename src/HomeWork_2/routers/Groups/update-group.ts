import { NextFunction, Request, Response } from 'express';
import { updateGroupService } from '../../services/Groups/update-group';
import { logRequestData } from '../../helpers/log-request-data';

export  const updateGroupHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await updateGroupService(req.params.id, req.body.name, req.body.permissions);
    if (result[0]) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    logRequestData(req, true);
    next(err);
  }
};
