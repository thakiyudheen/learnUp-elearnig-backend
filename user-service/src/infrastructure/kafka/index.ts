import { Kafka, Producer, Consumer, Partitioners } from "kafkajs";

export const kafka = new Kafka({
	clientId: "user-service",
	brokers: ["apache-kafka-service:29092"],
});

export const producer: Producer = kafka.producer({
	createPartitioner: Partitioners.LegacyPartitioner,
});
export const consumer: Consumer = kafka.consumer({
	groupId: "user-service-kafka-group",
});