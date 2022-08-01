import { NextFunction, Request, Response } from 'express';
import { jwtVerify } from 'jose';
import { createSecretKey } from 'crypto';

export const checkAuthorisation = async ({ headers }: Request, res: Response, next: NextFunction) => {
  if (!headers.authorization) {
    res.status(401).end();
    return;
  }
  try {
    await jwtVerify(headers.authorization, await createSecretKey(process.env.SECRET, 'utf-8'));
  } catch (err) {
    res.status(403).end();
    return;
  }
  next();
};
