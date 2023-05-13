"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const winston_1=__importDefault(require("winston")),chalk_1=__importDefault(require("chalk")),winston_daily_rotate_file_1=__importDefault(require("winston-daily-rotate-file")),levels={error:chalk_1.default.red.bold,warn:chalk_1.default.yellow.bold,info:chalk_1.default.green.bold,debug:chalk_1.default.blue.bold},logFormat=winston_1.default.format.printf((({level:e,message:t,timestamp:l})=>{const a=levels[e](e.toUpperCase());return`${chalk_1.default.gray(`${l}`)} ${a}: ${chalk_1.default.cyan(`${t}`)}`})),logger=winston_1.default.createLogger({level:"info",format:winston_1.default.format.combine(winston_1.default.format.timestamp(),winston_1.default.format.errors({stack:!0}),logFormat),transports:[new winston_1.default.transports.Console,new winston_daily_rotate_file_1.default({filename:"logs/%DATE%.log",datePattern:"YYYY-MM-DD",zippedArchive:!0,maxSize:"20m",maxFiles:"14d"})]});exports.default=logger;