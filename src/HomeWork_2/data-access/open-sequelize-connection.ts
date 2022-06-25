import { Sequelize } from "sequelize";

export const openSequelizeConnection = () => {
  return new Sequelize('postgres://localhost:5432/postgres');
};
