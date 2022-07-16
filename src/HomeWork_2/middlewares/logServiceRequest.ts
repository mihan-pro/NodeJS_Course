import { NextFunction, Request } from 'express';

export const logServiceRequest = (req: Request, _: unknown, next: NextFunction) => {
  console.log(`\x1b[92mINFO: ${req.method} ${req.url} ` +
    `params: ${(JSON.stringify(req.params))} body: ${JSON.stringify(req.body)}\x1b[0m`);
  next();
};
