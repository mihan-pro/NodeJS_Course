"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.DB_Client=void 0;var _pg=require("pg");const DB_Client=new _pg.Client({port:5432,host:'localhost',database:'postgres',user:'postgres'});exports.DB_Client=DB_Client;