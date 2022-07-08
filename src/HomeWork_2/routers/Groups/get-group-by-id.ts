import { Request, Response } from 'express';
import { getGroupByIdService } from '../../services/Groups/get-group-by-id';

export const getGroupByIdHandler = async ({ params }: Request, res: Response) => {
  try {
    const result = await getGroupByIdService(params.id);
    if (result) {
      res.status(200).end(JSON.stringify(result));
    } else {
      res.status(404).end();
    }
  } catch (err) {
    console.error(err);
    res.status(500).end();
  }
};
