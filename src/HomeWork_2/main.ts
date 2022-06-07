import express from 'express';
import { v4 as createId } from 'uuid';

const port = 3000;
const server = express();

server.use(express.json());

type User = {
  id: string;
  login: string;
  password: string;
  age: number;
  isDeleted: boolean;
};

const createUser = (login: string, pass: string, age: number): User => {
  if (!login || !pass || !age) {
    throw new Error('There is lack of params');
  }
  return {
    login,
    password: pass,
    age,
    id: createId(),
    isDeleted: false
  };
};

const userList: User[] = [];

server.get('/', (req, res) => {
  res.end(JSON.stringify(userList));
});

server.post('/create', (req, res) => {
  try {
    const { login, password, age } = req.body;
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
