import mongoose from "mongoose";
import { config } from "dotenv";
config();


export default async () => {
    try{
        const mongo_url = process.env.MONGO_URI ;
        
        if (!mongo_url) {
			throw new Error(
				"MongoDB connection string not provided in environment variables"
			);
		}

        await mongoose.connect(mongo_url.trim())

        console.log("🍃 MongoDB connected successfully ---> chat-service 🍃");
        


    } catch ( error : any ) {
        
        console.error(`❌ Database Connection failed❌`);
		console.error(error.message);
		process.exit(1);
    }
}