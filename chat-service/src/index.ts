import server from "./presentation/server";
import database from "./_boot/database";
import socket from "./_boot/socket";
import { startConsumer } from "./_boot/consumer";

(async () => {
    try{
        server.start()

        await Promise.all([database(), startConsumer()])

    } catch ( error: any ){
        
        console.error(error?.message || 'An error occurred');
        process.exit(1);
    }
})();