import { producer } from "..";

export const resetPasswordProducer = async (data:{email : string , password : string}) => {

	try {

		await producer.connect();
		const message: any = [
			{
				topic: "user-service-topic",
				messages: [
					{
						key: "resetPassword",
						value: JSON.stringify(data),
					},
				],
			},
			{
				topic: "course-service-topic",
				messages: [
					{
						key: "resetPassword",
						value: JSON.stringify(data),
					},
				],
			},
		]

		console.log(message, "produced--->");

		await producer.sendBatch({topicMessages: message});



	} catch (error: any) {

		throw new Error('Error From kafka service');

	} finally {

		await producer.disconnect();

	}
} 