"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const http_1=__importDefault(require("http")),Parameters_1=require("../helpers/Parameters"),Logger_1=__importDefault(require("../helpers/Logger"));class default_1{constructor(e){this.app=e}initialize(){return new Promise(((e,t)=>{const r=http_1.default.createServer(this.app),a=Parameters_1.Parameters.PORT;r.listen(a).on("listening",(()=>{Logger_1.default.info(`Server running at http://localhost:${a}`),e(!0)})).on("error",(e=>{t(e),process.exit(1)}))}))}}exports.default=default_1;