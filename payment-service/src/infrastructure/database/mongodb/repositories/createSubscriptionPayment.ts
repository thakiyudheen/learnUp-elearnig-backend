import { PaymentEntity  } from "@/domain/entities";
import { Payment} from "../models";
import ErrorResponse from '../../../../_lib/common/error/errorResponse'




export const createSubscriptionPayment = async ( data: any ): Promise<PaymentEntity> => {
    try {

        const newPayment = await Payment.create(data)

        if(!newPayment){
            throw ErrorResponse.internalError("Payment creation failed!");
        }

        return newPayment;

    } catch (error: any) {


        throw new Error(error?.message);

    }
}