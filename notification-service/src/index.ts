import server from "./presentation/server";
import database from "./_boot/database";

(async () => {
    try{
        
        server.start()

    } catch ( error: any ){
        
        console.error(error?.message || 'An error occurred');
        process.exit(1);
    }
})();