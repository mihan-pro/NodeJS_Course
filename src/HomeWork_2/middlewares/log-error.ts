import { Response, NextFunction } from 'express';
import { errorHandler } from '../services/error-logger';

export const logError = (err: Error, _: unknown, res: Response, next: NextFunction) => {
  res.status(500).end('internal Server Error');
  errorHandler(err);
  next();
};
