"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.User=void 0;const uuid_1=require("uuid");class User{constructor(t){if(this.id=(0,uuid_1.v4)(),this.active=!0,this.createdAt=new Date,Object.assign(this,t),!(0,uuid_1.validate)(this.id))throw new Error("Invalid id")}properties(){return{id:this.id,name:this.name,lastname:this.lastname,email:this.email,password:this.password,roles:this.roles,photo:this.photo,active:this.active,createdAt:this.createdAt,updatedAt:this.updatedAt,deletedAt:this.deletedAt}}}exports.User=User;