"use strict";Object.defineProperty(exports,"__esModule",{value:true});Object.defineProperty(exports,"Router",{enumerable:true,get:function(){return _express.Router;}});exports.getUsersRouter=void 0;var _getAllUsers=require("../data-access/get-all-users");var _main=require("../main.js");var _express=require("express");const getUsersRouter=(0,_express.Router)();exports.getUsersRouter=getUsersRouter;getUsersRouter.get('/getAllUsers',async(req,res)=>{const users=await(0,_getAllUsers.getAllUsers)(_main.Users);res.end(users);});