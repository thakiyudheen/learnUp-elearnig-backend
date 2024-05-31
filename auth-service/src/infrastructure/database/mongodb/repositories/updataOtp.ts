import { User, Otp } from '../models'

export const updateOtp = async (email: string, otp: string): Promise<boolean> => {
    try {
        const isUpdated = await Otp.findOneAndUpdate(
            { email },
            { otp },
            { new: true, upsert: true }
        );

        if (!isUpdated) {
            return false;
        }

        return true;

    } catch (error: any) {
        throw new Error(error?.message);
    }
};
