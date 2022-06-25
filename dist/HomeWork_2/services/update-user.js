"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.updateUserService=void 0;var _validateUser=require("./validate-user");var _main=require("../main");var _updateUser=require("../data-access/update-user");const updateUserService=async(id,data)=>{const{error}=(0,_validateUser.validateUser)(data);if(error){return{message:error.message,status:400};}const result=await(0,_updateUser.updateUser)(_main.Users,id,data);if(!result){return{message:'The user havn\'t been found',status:404};}return null;};exports.updateUserService=updateUserService;