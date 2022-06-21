import express from 'express';
import Joi from 'joi';
import { createUser } from './helpers/createUser';
import { User } from './types';
import {Client} from 'pg';

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
  .then(res => console.log('success'))
  .catch(err => console.log("err"));

client.query("CREATE TABLE IF NOT EXISTS Users(id UUID, login TEXT, password TEXT, age INTEGER, isDeleted BOOL)")
  .then(() => console.log('Users table is ready to use'))
  .catch(err => console.log(err));

client.query("DELETE FROM Users")
  .then(() => console.log("Users table was cleared"))
  .catch((err => console.log(err)
));

usersMock.forEach(({id, login, password, age, isDeleted}) => {
  client.query("INSERT INTO Users (id, login, password, age, isDeleted) VALUES ($1, $2, $3, $4, $5)", [id, login, password, age, isDeleted])
    .then(() => console.log(`User: ${login} was successfuly added`))
    .catch((err) => console.log(err));
})

const port = 3000;
const server = express();

server.use(express.json());

const userList: User[] = [];

const schema = Joi.object({
  login: Joi.string().min(3).required(),
  password: Joi.string().min(8).pattern(/^(?=.*[a-zA-Z])(?=.*\d)/).required(),
  age: Joi.number().min(4).max(130).required()
});

server.get('/getAllUsers', (req, res) => {
  res.end(JSON.stringify(userList));
});
server.post('/create', (req, res) => {
  try {
    const { login, password, age } = req.body;
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400);
      res.end(JSON.stringify(error.message, null, 2));
      return;
    }
    userList.push(createUser(login, password, age));
    res.status(200);
    res.end('ok');
  } catch (err) {
    res.status(400);
    res.end(err);
  }
});
server.get('/getUser/:id', (req, res) => {
  try {
    const { id } = req.params;
    const user = userList.find((item) => item.id === id) || null;
    res.end(JSON.stringify(user));
  } catch (err) {
    res.status(500);
    res.end(err);
  }
});
server.patch('/updateUser/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400);
      res.end(JSON.stringify(error.message, null, 2));
      return;
    }
    const userIndex = userList.findIndex((item) => item.id === id);
    if (userIndex >= 0) {
      req.body.age && (userList[userIndex].age = req.body.age);
      req.body.login && (userList[userIndex].login = req.body.login);
      req.body.password && (userList[userIndex].password = req.body.password);
      res.status(200);
      res.send(JSON.stringify(userList[userIndex], null, 2));
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
server.delete('/deleteUser/:id', (req, res) => {
  try {
    const { id } = req.params;
    const userIndex = userList.findIndex((item) => item.id === id);
    if (userIndex >= 0) {
      userList[userIndex].isDeleted = true;
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
