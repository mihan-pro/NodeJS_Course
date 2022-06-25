"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.Users=void 0;var _express=_interopRequireDefault(require("express"));var _dotenv=_interopRequireDefault(require("dotenv"));var _openSequelizeConnection=require("./data-access/open-sequelize-connection");var _checkConnection=require("./data-access/check-connection");var _initApp=require("./services/init-app");var _getUserModel=require("./data-access/get-user-model");var _Users=require("./routers/Users");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}_dotenv.default.config();const server=(0,_express.default)();server.use(_express.default.json());const sequelize=(0,_openSequelizeConnection.openSequelizeConnection)();const Users=(0,_getUserModel.getUserModel)(sequelize);exports.Users=Users;(0,_checkConnection.checkConnection)(sequelize);server.use('/Users',_Users.UsersRouter);server.listen(process.env.PORT,()=>{(0,_initApp.initApp)();console.log(`Server started on port ${process.env.PORT}`);});