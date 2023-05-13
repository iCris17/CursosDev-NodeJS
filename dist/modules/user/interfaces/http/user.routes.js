"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.userRoutes=void 0;const express_1=require("express"),user_controller_1=require("./user.controller"),user_application_1=require("../../application/user.application"),user_infrastructure_1=require("../../infrastructure/user.infrastructure"),userInfrastructure=new user_infrastructure_1.UserInfrastructure,userApplication=new user_application_1.UserApplication(userInfrastructure),userController=new user_controller_1.UserController(userApplication);class UserRoutes{constructor(){this.router=(0,express_1.Router)(),this.addRoutes()}addRoutes(){this.router.post("/",userController.insert.bind(userController))}}exports.userRoutes=(new UserRoutes).router;