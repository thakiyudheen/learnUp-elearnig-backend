import { producer } from "..";
import { userEntity } from "../../../domain/entities/UserEntity";

export const createUserProducer = async ( data : userEntity ) => {

    try {

        await producer.connect();
		const message: any = {
			topic: "user-service-topic",
			messages: [
				{
					key: "userCreated",
					value: JSON.stringify(data),
				},
			],
		};

		console.log(message, "produced--->");

		await producer.send(message);
        

    } catch ( error : any ) {

        throw new Error('Error From kafka service') ;

    } finally {

        await producer.disconnect();

    }
} 