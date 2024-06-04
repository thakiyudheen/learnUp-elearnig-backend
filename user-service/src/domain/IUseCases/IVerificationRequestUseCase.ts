

interface data {
    email : string ,
    isVerified : boolean
}

export interface IVerificationRequestUseCase {

    execute ( data : data ) : Promise < void >

}
