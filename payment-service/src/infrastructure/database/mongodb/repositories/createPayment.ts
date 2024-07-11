import { PaymentEntity  } from "@/domain/entities";
import { Payment, Session } from "../models";
import ErrorResponse from '../../../../_lib/common/error/errorResponse'




export const createPayment = async ( data: any ): Promise<PaymentEntity> => {
    try {

        const payment = await Payment.findOne({
            userId: data.userId,
            courseId: data.courseId,
            status: data.status
        });

        if (payment ) {
            return payment;            
        }

        const newPayment = await Payment.create(data)

        if(!newPayment){
            throw ErrorResponse.internalError("Payment creation failed!");
        }

        return newPayment;

    } catch (error: any) {


        throw new Error(error?.message);

    }
}