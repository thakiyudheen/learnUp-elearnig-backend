import { consumer } from '../infrastructure/kafka';
import { ISubscriber, createSubscriber } from '../infrastructure/kafka/subscriber';

export const startConsumer = async () => {
    try {
        await consumer.connect();
        await consumer.subscribe({
            topic: 'chat-service-topic',
            fromBeginning: true
        });

        const subscriber = createSubscriber();

        await consumer.run({
            eachMessage: async ({ message }) => {
                const { key, value } = message;

                const subscriberMethod = String(key) as keyof ISubscriber;

                try {
                    if (typeof subscriber[subscriberMethod] === 'function') {
                        const subscriberData = JSON.parse(String(value));
                        await subscriber[subscriberMethod](subscriberData);
                    } else {
                        throw new Error(`${subscriberMethod} is not a function`);
                    }
                } catch (error: any) {
                    console.error(`Error processing message with key ${key}: ${error?.message}`);
                }
            }
        });
    } catch (error: any) {
        console.error("Kafka Consume Error:", error?.message);
    }
}

export const stopConsumer = async () => {
    await consumer.stop();
    await consumer.disconnect();
}
