import { userEntity } from "@/domain/entities/UserEntity";
import { producer } from "..";

export default async (data: userEntity ) => {
	try {
		await producer.connect();
		const message: any = [
			{
				topic: "auth-service-topic",
				messages: [
					{
						key: "updateUser",
						value: JSON.stringify(data),
					},
				],

			},
			{
				topic: "course-service-topic",
				messages: [
					{
						key: "updateUser",
						value: JSON.stringify(data),
					},
				],

			},
			{
				topic: "chat-service-topic",
				messages: [
					{
						key: "updateUser",
						value: JSON.stringify(data),
					},
				],

			},
		]


		await producer.sendBatch({topicMessages: message});

	} catch (error: any) {
		console.error("kafka produce error:", error?.message);
	} finally {
		await producer.disconnect();
	}
};