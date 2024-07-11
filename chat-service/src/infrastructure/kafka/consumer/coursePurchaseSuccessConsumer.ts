
import { updateProfit } from "../../../infrastructure/database/mongodb/repositories";
import { Types } from "mongoose";

export const coursePurchaseSuccessConsumer = async (data: { 
	userId: string | Types.ObjectId;
	courseId: string;
	amount: number;
	instructorId: string; }) => {

	try {
        
        console.log('course purchase success consumer')

		await updateProfit( data )

	} catch (error: any) {

		console.log("course-purchase-consumer error: ", error?.message);

	}

};