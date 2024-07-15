import { Kafka, Producer, Consumer, Partitioners } from "kafkajs";

// export const kafka = new Kafka({
// 	clientId: "notification-service",
// 	brokers: ["apache-kafka-service:29092"],
// });

// export const producer: Producer = kafka.producer({
// 	createPartitioner: Partitioners.LegacyPartitioner,
// });
// export const consumer: Consumer = kafka.consumer({
// 	groupId: "notification-service-kafka-group",
// });
const kafka = new Kafka({
	clientId: 'notification-service',
	brokers: ['pkc-12576z.us-west2.gcp.confluent.cloud:9092'],
	ssl: true,
	sasl: {
	  mechanism: 'plain',
	  username: '565VQM7G6HKUMP3U',
	  password: 'Xj42CZ9Z0ojzILJgSzC8FjsfNZcV3QSrsGFEfda6V6vDYXGNwoESslruI0QFgFkd'
	},
	connectionTimeout: 30000, // 30 seconds
	authenticationTimeout: 30000, // 30 seconds
  });
  
  const producer = kafka.producer();
  const consumer = kafka.consumer({ groupId: 'notification-service-kafka-group' });
  
  export { producer, consumer };