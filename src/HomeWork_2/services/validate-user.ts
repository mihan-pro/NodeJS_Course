import Joi from 'joi';
import { User } from '../types';

const schema = Joi.object({
  login: Joi.string().min(3).required(),
  password: Joi.string().min(8).pattern(/^(?=.*[a-zA-Z])(?=.*\d)/).required(),
  age: Joi.number().min(4).max(130).required()
});

export const validateUser = (data: Partial<User>) => {
  return schema.validate(data);
};
