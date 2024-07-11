import { PaymentEntity } from "@/domain/entities";
import { producer } from "..";
import { Mongoose , Types} from "mongoose";

export default async (data: any ) => {
	try {
		const { userId, courseId, amount, instructorId } = data;

		await producer.connect();
		const message: any = [
			{
				topic: "user-service-topic",
				messages: [
					{
						key: "coursePurchaseSuccess",
						value: JSON.stringify({
							instructorId,
							courseId: courseId,
							amount: amount,
							userId
						}),
					},
				],
			},
			{
				topic: "course-service-topic",
				messages: [
					{
						key: "coursePurchaseSuccess",
						value: JSON.stringify({
							instructorId,
							courseId: courseId,
							amount: amount,
							userId
						}),
					},
				],
			},
			{
				topic: "auth-service-topic",
				messages: [
					{
						key: "coursePurchaseSuccess",
						value: JSON.stringify({
							instructorId,
							courseId: courseId,
							amount: amount,
							userId
						}),
					},
				],
			},
			{
				topic: "chat-service-topic",
				messages: [
					{
						key: "coursePurchaseSuccess",
						value: JSON.stringify({
							instructorId,
							courseId: courseId,
							amount: amount,
							userId
						}),
					},
				],
			},
		];

		await producer.sendBatch({ topicMessages: message });

		console.log(message, "course purchase success produced ( payment-service )--->");
	} catch (error: any) {
		console.error("kafka produce error:", error?.message);
	} finally {
		await producer.disconnect();
	}
};