import { producer } from '..'

export default async (data: any ) => {
	try {
		await producer.connect();

		const message = {
			topic: "course-service-topic",
			messages: [
				{
					key: "createEnrollment",
					value: JSON.stringify(data),
				},
			],
		};

		await producer.send(message);
        
	} catch (error: any) {

		console.error("kafka produce error : ", error?.message);

	} finally {

		await producer.disconnect();

	}
};