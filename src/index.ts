import "reflect-metadata"

import ServerBootstrap from "./bootstrap/Server.bootstrap";
import {app} from "./app"
import DatabaseBootstrap from "./bootstrap/Database.bootstrap";
import logger from "./helpers/Logger";
import { User, UserProperties } from "./modules/user/domain/user";
import { UserFactory } from "./modules/user/domain/user.factory";

const server = new ServerBootstrap(app);
const database = new DatabaseBootstrap();

const userProperties: UserProperties = {
    name: "John",
    lastname: "Doe",
    email: "correo@correo.com",
    password: "12345678",
    roles: ["admin"],
    photo: "https//www.google.com",
};

const user = UserFactory.create(userProperties);
console.log(user.properties());

(async ()=>{
    try {
        logger.log("info", "Starting server...");
        const listPromises = [server.initialize(), database.initialize()]
        await Promise.all(listPromises);
        logger.info("Database is ready");
    } catch (error) {
        logger.info(error)
        database.close();
        process.exit(1);
    }
})()