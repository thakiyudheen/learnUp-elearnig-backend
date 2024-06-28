
import { Types } from "mongoose";
import { User } from "../../models";

export const updateProfit = async (data: {
    userId: string | Types.ObjectId;
    courseId: string;
    amount: number;
    instructorId: string;
}): Promise<void> => {
    try {
        const { amount, instructorId } = data;

        // Calculate the profit shares
        const instructorShare = amount * 0.7;
        const adminShare = amount * 0.3;

        // Update instructor's profit
        await User.findByIdAndUpdate(
            instructorId,
            { $inc: { profit: instructorShare } },
            { new: true }
        );

        // Update admin's profit
        await User.updateOne(
            { role: 'admin' },
            { $inc: { profit: adminShare } }
        );

        return;
    } catch (error: any) {
        throw new Error(error?.message);
    }
}
