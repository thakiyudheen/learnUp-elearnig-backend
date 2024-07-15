import {Producer, Kafka, Consumer, Partitioners} from 'kafkajs'

// const kafka = new Kafka ({
//     clientId: 'auth-service' ,
//     brokers: ["apache-kafka-service:29092"]
// })
// const kafka = new Kafka ({
//     clientId: 'auth-service',
//     brokers: ["apache-kafka-service:29092"],
//     // Add this to disable automatic broker discovery
//     connectionTimeout: 3000,
//     retry: {
//         initialRetryTime: 100,
//         retries: 8
//     }
// })
// kafka.js



const kafka = new Kafka({
  clientId: 'auth-service',
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
const consumer = kafka.consumer({ groupId: 'auth-service-kafka-group' });

export { producer, consumer };
