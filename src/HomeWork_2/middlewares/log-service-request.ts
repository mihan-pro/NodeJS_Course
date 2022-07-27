import { NextFunction, Request } from 'express';
import { logRequestData } from '../helpers/log-request-data';

export const logServiceRequest = (req: Request, _: unknown, next: NextFunction) => {
  logRequestData(req);
  next();
};
