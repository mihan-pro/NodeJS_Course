import express from 'express';
import Joi from 'joi';
import { createUser } from './helpers/createUser';
import { User } from './types';
import {Client} from 'pg';
import { DataTypes, Sequelize } from "sequelize";

const usersMock: User[] = [
  createUser('Mikhai', 'pass', 26),
  createUser('Yuriy', 'pass22', 26),
  createUser('Dmitro', 'pa2124ss', 26),
  createUser('Gypsy', 'horse212', 26),
  createUser('Adam', 'querty', 26),
  createUser('nagibator', 'pqdassq', 26),
  createUser('Olly', 'pawerts', 26),
  createUser('Zizu', '1231dev', 26),
  createUser('Aziz', 'pasqwdq__1s', 26),
];

const client =  new Client({
  port: 5432,
  host: 'localhost',
  database: 'postgres',
  user: 'postgres',
});

client.connect()
  .then(() => console.log('success'))
  .catch(err => console.log(err));

client.query("CREATE TABLE IF NOT EXISTS Users(id UUID, login TEXT, password TEXT, age INTEGER, is_deleted BOOL)")
  .then(() => console.log('Users table is ready to use'))
  .catch(err => console.log(err));

client.query("DELETE FROM Users")
  .then(() => console.log("Users table was cleared"))
  .catch((err => console.log(err)
));

usersMock.forEach(({id, login, password, age, is_deleted}) => {
  client.query("INSERT INTO Users (id, login, password, age, is_deleted) VALUES ($1, $2, $3, $4, $5)", [id, login, password, age, is_deleted])
    .then(() => console.log(`User: ${login} was successfuly added`))
    .catch((err) => console.log(err));
})

const sequelize = new Sequelize('postgres://localhost:5432/postgres');
sequelize.authenticate().then(() => console.log('Sequelize success')).catch((err) => console.log(err));
const Users = sequelize.define('users', {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
}, {updatedAt: false, createdAt: false});

Users.create(createUser('Joseph', 'NewYork4', 88)).then(() => console.log('was added successfully')).catch((err) => console.log(err));


const port = 3000;
const server = express();

server.use(express.json());

const schema = Joi.object({
  login: Joi.string().min(3).required(),
  password: Joi.string().min(8).pattern(/^(?=.*[a-zA-Z])(?=.*\d)/).required(),
  age: Joi.number().min(4).max(130).required()
});

server.get('/getAllUsers', async (req, res) => {
  const users = await Users.findAll();
  res.end(JSON.stringify(users));
});
server.post('/create', async (req, res) => {
  try {
    const { login, password, age } = req.body;
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400);
      res.end(JSON.stringify(error.message, null, 2));
      return;
    }
    await Users.create(createUser(login, password, age))
    res.status(200);
    res.end('ok');
  } catch (err) {
    res.status(400);
    res.end(err);
  }
});
server.get('/getUser/:id', async (req, res) => {
  try {
    const { id: requestedId } = req.params;
    console.log(requestedId);
    const user = await Users.findOne({
      where: {
        id: requestedId,
      }
    })
    console.log(user);
    if(user) {
      res.status(200);
      res.end(JSON.stringify(user));
    } else {
      res.status(404);
      res.end('The user hadn\'t been found');
    }
  } catch (err) {
    res.status(500);
    res.end(err);
  }
});
server.patch('/updateUser/:id', async (req, res) => {
  try {
    const { id: requestedId } = req.params;
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400);
      res.end(JSON.stringify(error.message, null, 2));
      return;
    }

    const {login, password, age} = req.body;

    const result = await Users.update({login, password, age}, {
      where: {
        id: requestedId,
      }
    })
    if(result[0]) {
      res.status(200);
      res.send('ok');
      res.end();
    } else {
        res.status(404);
        res.end('The user hadn\'t been found');
    }
  } catch (err) {
    res.status(500);
    res.end(err);
  }
});
server.delete('/deleteUser/:id', async (req, res) => {
  try {
    const { id: requestedId } = req.params;
    const result = await Users.destroy({
      where: {
        id: requestedId,
      }
    })
    if (result) {
      res.status(200);
      res.end();
    } else {
      res.status(404);
      res.end('The user hadn\'t been found');
    }
  } catch (err) {
    res.status(500);
    res.end(err);
  }
});

server.listen(port, () => {
  console.log(`Server started on port ${3000}`);
});
