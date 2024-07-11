import { PaymentEntity, } from "../entities";

export interface ICreateSubscriptionPaymentUseCase{
    execute ( data : any ) : Promise < PaymentEntity >
}