import { PaymentEntity, SessionEntity } from "../entities";

export interface ICreatePaymentUseCase{
    execute ( data : any ) : Promise < PaymentEntity >
}