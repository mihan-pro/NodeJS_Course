import { Request, Response } from 'express';
import { deleteGroupService } from '../../services/Groups/delete-group';

export const deleteGroupHandler = async ({ params }: Request, res: Response) => {
  try {
    const result = await deleteGroupService(params?.id ?? '');
    if (result) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).end(err.toString());
  }
};
