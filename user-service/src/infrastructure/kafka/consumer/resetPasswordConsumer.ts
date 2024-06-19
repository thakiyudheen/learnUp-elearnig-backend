import { resetPassword } from "@/infrastructure/database/mongodb/repositories";

export const resetPasswordConsumer = async (data: { email: string, password: string }) => {

    try {
        console.log('the resetPassword kafka working', data)
        await resetPassword(data)

    } catch (error: any) {
        throw new Error("Kafka Consume Error : " + error?.message);
    }
} 