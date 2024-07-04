import { PaymentEntity, } from "../entities";

export interface IGetAllPaymentUseCase{
    execute ( data : { userId ?: string } ) : Promise < PaymentEntity[] >
}