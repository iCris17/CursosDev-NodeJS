"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.UserController=void 0;const user_create_dto_1=require("./dtos/user-create.dto"),class_validator_1=require("class-validator");class UserController{constructor(e){this.application=e}async insert(e,t){const s=e.body,r=new user_create_dto_1.UserCreateDto;r.name=s.name,r.lastname=s.lastname,r.email=s.email,r.password=s.password,r.roles=s.roles,r.photo=s.photo;const a=await(0,class_validator_1.validate)(r);if(a.length>0)return t.status(411).json(a);await this.application.create(s),t.status(201).send()}}exports.UserController=UserController;