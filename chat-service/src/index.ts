import server from "./presentation/server";
import database from "./_boot/database";
import socket from "./_boot/socket";

(async () => {
    try{
        server.start()

        database()
        

    } catch ( error: any ){
        
        console.error(error?.message || 'An error occurred');
        process.exit(1);
    }
})();