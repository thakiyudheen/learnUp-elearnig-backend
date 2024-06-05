import { producer } from "..";

export default async (data: { email : string; isVerified: boolean }) => {
  try {
    await producer.connect();

    // Message for auth service
    const authServiceMessage = {
      topic: "auth-service-topic",
      messages: [
        {
          key: "rejectRequest",
          value: JSON.stringify(data),
        },
      ],
    };

    
    const newServiceMessage = {
      topic: "notification-service-topic",
      messages: [
        {
          key: "rejectRequestMail",
          value: JSON.stringify(data.email),
        },
      ],
    };

    
    await producer.send(authServiceMessage);
    await producer.send(newServiceMessage);

  } catch (error: any) {
    console.error("kafka produce error:", error?.message);
  } finally {
    await producer.disconnect();
  }
};
