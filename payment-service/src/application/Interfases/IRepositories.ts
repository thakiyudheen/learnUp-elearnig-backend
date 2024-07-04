import { PaymentEntity, SessionEntity } from "@/domain/entities";


export interface IRepositories {
    createSession ( data : SessionEntity ): Promise < SessionEntity >
    createPayment ( data : any ) : Promise < PaymentEntity >
    getAllPayment ( data : {userId ?: string } ) : Promise < PaymentEntity[] >
}