"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.RoleVO=void 0;class RoleVO{constructor(e){if(e.length<1)throw new Error("Roles must be at least 1 role");this.value=e}static create(e){return new RoleVO(e)}getValue(){return this.value}}exports.RoleVO=RoleVO;