import { PaymentEntity  } from "@/domain/entities";
import { Payment, Session } from "../models";





export const getAllPayment = async ( data:{ userId ?: string } ): Promise< PaymentEntity[] > => {
    try {

        const payment = await Payment.find(data)
        .populate('courseId')
        .populate('userId');
        console.log(payment)

        if (!payment ) {
           throw new Error('error while fetching Data');            
        }
        return payment

    } catch (error: any) {


        throw new Error(error?.message);

    }
}