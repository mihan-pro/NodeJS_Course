"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.createUser=void 0;var _validateUser=require("./validate-user");var _createUser=require("../data-access/create-user");var _main=require("../main");const createUser=async data=>{const{error}=(0,_validateUser.validateUser)(data);if(error)return error;await(0,_createUser.createUserInDB)(_main.Users,data);return null;};exports.createUser=createUser;