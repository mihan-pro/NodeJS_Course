"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.insertListOfUsers=void 0;const insertListOfUsers=(client,users)=>{users.forEach(({id,login,password,age,is_deleted})=>{client.query('INSERT INTO Users (id, login, password, age, is_deleted) VALUES ($1, $2, $3, $4, $5)',[id,login,password,age,is_deleted]).then(()=>console.log(`User: ${login} was successfuly added`)).catch(err=>console.log(err));});};exports.insertListOfUsers=insertListOfUsers;