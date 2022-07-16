import { Request, Response } from 'express';
import { createGroupService } from '../../services/Groups/create-group';

export const createUserHandler = async ({ body }: Request, res: Response) => {
  // TODO - add parameters validation
  const result = await createGroupService(body.name, JSON.parse(body.permissions));
  if (result) {
    res.status(200).end();
  } else {
    res.status(500).end();
  }
};
