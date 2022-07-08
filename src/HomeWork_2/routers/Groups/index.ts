import { Router } from 'express';
import { getAllUsersHandler } from './get-all-groups';
import { createUserHandler } from './create-group';
import { getGroupByIdHandler } from './get-group-by-id';
import { updateGroupHandler } from './update-group';
import { deleteGroupHandler } from './delete-group';

export const GroupsRouter = Router();

GroupsRouter
  .get('/', getAllUsersHandler)
  .post('/', createUserHandler)
  .get('/:id', getGroupByIdHandler)
  .patch('/:id', updateGroupHandler)
  .delete('/:id', deleteGroupHandler);
