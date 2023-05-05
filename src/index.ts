import ServerBootstrap from "./bootstrap/Server.bootstrap";
import {app} from "./app"

const server = new ServerBootstrap(app);

(async ()=>{
    try {
        const listPromises = [server.initialize()]
        const results = await Promise.all(listPromises);
        console.log("Everything is ready");
        console.log("Server running")
    } catch (error) {
        console.log(error)
    }
})()