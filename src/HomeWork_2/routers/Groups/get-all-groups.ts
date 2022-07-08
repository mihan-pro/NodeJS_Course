import { Request, Response } from 'express';
import { getAllGroupsService } from '../../services/Groups/get-all-grops';

export const getAllUsersHandler = async (req: Request, res: Response) => {
  try {
    const data = await getAllGroupsService();
    if (data) {
      res.status(200).end(JSON.stringify(data));
    }
  } catch (err) {
    res.status(500).end(err);
  }
};
