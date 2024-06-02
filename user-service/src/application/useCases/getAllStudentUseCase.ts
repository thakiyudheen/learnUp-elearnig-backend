import { IDependecies } from "../Interfases/IDependencies";

export const getAllStudentUseCase = ( Deoendencies : IDependecies) => {

    const { repositories : { getAllStudents } } = Deoendencies
    execute : ( ) => {

        try {
    
            return getAllStudents()
    
        } catch ( error : any ) {

            throw new Error(error?.message);

        }

    }
}