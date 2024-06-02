import { IDependecies } from "../Interfases/IDependencies";

export const getAllInstructorUseCase = ( Deoendencies : IDependecies) => {

    const { repositories : { getAllInstructors } } = Deoendencies
    execute : ( ) => {

        try {
    
            return getAllInstructors()
    
        } catch ( error : any ) {

            throw new Error(error?.message);

        }

    }
}