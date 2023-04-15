import ServerBootstrap from "./bootstrap/Server.bootstrap";
import {app} from "./app"

const server = new ServerBootstrap(app);

(async ()=>{
    try {
        const listPromises = [server.initialize()]
        const results = await Promise.all(listPromises);  
    } catch (error) {
        console.log(error)
    }
})()