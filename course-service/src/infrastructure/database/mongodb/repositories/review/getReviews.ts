import { ReviewEntity } from "@/domain/entities";
import { Review } from "../../models";
import ErrorResponse from "../../../../../_lib/common/error/errorResponse";

interface PaginationData {
    reviews: ReviewEntity[];
    totalItems: number;

}
export const getReviews= async (data: { courseId: string, page?: number, limit?: number }):Promise<PaginationData> => {
    try {
        const {courseId}= data;
        const totalItems = await Review.countDocuments();


        const { page = 1, limit = 5 } = data;

        const pageNumber = Math.max(1, page);
        const limitNumber = Math.max(1, limit);
        // .skip((pageNumber-1)*limitNumber).limit(limitNumber)
        const result = await Review.find({courseId}).populate('courseId').populate('userId')

        if (!result) {

            throw ErrorResponse.internalError("Error while fetching the review")
        }

        return { reviews: result, totalItems }

    } catch (error: any) {
        throw ErrorResponse.internalError(error?.message)
    }
}