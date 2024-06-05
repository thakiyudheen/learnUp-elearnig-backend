

interface data {
    email : string ,
    isVerified : boolean
}

export interface IRejectRequestUseCase {

    execute ( data : data ) : Promise < void >

}
