import { Dependencies } from "../../_boot/dependecies";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { getAllInstructorsController } from "./getAllinstructors";
import { getAllStudentsController } from "./getAllstudents";
import { blockUnblockController } from "./blockUnblock";;
import { verifyRequestContoller } from "./verifyRequest";
import { getRequestController } from "./getRequest";
import { rejectRequestContoller } from "./rejectRequest";



export const controller = ( Dependencies : IDependecies ) => {
    return {
        getAllstudents : getAllStudentsController( Dependencies ),
        getAllInstructors : getAllInstructorsController( Dependencies ),
        blockUnblocks : blockUnblockController( Dependencies ),
        verifyRequest : verifyRequestContoller( Dependencies ),
        getRequests : getRequestController( Dependencies ),
        rejectRequest : rejectRequestContoller( Dependencies )
    }
}