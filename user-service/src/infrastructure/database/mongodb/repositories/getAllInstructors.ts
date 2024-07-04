import { userEntity } from "../../../../domain/entities/UserEntity";
import { User } from "../models";

interface PaginationData {
    instructors: userEntity[];
    totalItems: number;
}

interface PaginationInput {
    page?: number;
    limit?: number;
}

export const getAllInstructors = async ({ page = 1, limit = 10 }: PaginationInput): Promise<PaginationData | null> => {
    try {
        
        const pageNumber = Math.max(1, page);
        const limitNumber = Math.max(1, limit);

        
        const totalItems = await User.countDocuments({ role: 'instructor', isVerified: true });

        
        const instructors = await User.find({ role: 'instructor', isVerified: true })
            .skip((pageNumber - 1) * limitNumber)
            .limit(limitNumber);

        if (!instructors) {
            throw new Error('Error finding instructors');
        }

       

        return {
            instructors,
            totalItems,
        };
    } catch (error: any) {
        throw new Error(error?.message);
    }
};
