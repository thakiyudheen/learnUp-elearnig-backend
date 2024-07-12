import {Producer, Kafka, Consumer, Partitioners} from 'kafkajs'

// const kafka = new Kafka ({
//     clientId: 'auth-service' ,
//     brokers: ["apache-kafka-service:29092"]
// })
const kafka = new Kafka ({
    clientId: 'auth-service',
    brokers: ["apache-kafka-service:29092"],
    // Add this to disable automatic broker discovery
    connectionTimeout: 3000,
    retry: {
        initialRetryTime: 100,
        retries: 8
    }
})

export const producer: Producer = kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner })
export const consumer:Consumer = kafka.consumer({groupId:"auth-service-kafka-group"})