import { Dependencies } from "../../_boot/dependecies";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { getAllInstructorsController } from "./getAllinstructors";
import { getAllStudentsController } from "./getAllstudents";


export const controller = ( Dependencies : IDependecies ) => {
    return {
        getAllstudents : getAllStudentsController( Dependencies ),
        getAllInstructors : getAllInstructorsController( Dependencies )
    }
}