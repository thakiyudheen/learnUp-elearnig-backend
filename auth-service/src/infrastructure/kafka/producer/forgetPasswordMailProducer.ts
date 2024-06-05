import { producer } from "..";

export const forgetPasswordMailProducer = async ( data : {email : string , token : string }) => {

    try {

        await producer.connect();
		const message: any = {
			topic: "notification-service-topic",
			messages: [
				{
					key: "forgetPassword",
					value: JSON.stringify( data ),
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