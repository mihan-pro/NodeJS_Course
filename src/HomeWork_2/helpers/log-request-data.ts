import { Request } from 'express';

export const logRequestData = (req: Request, isError = false) => {
  const logStart = isError ? '\x1b[31mERROR' : '\x1b[92mINFO';
  console.log(`${logStart}: ${req.method} ${req.url} ` +
    `params: ${(JSON.stringify(req.params))} body: ${JSON.stringify(req.body)}\x1b[0m`);
};
