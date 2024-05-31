

export interface IcheckExistingUserNameUseCase {

    execute (username : string) : Promise < boolean | null >
}
