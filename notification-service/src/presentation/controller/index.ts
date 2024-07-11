import { Dependencies } from "../../_boot/dependecies";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { sendVerificationMailController } from "./sendVerificationMailController";

export const controller = ( Dependencies : IDependecies ) => {
    return {
        sendMail : sendVerificationMailController( Dependencies )
    }
}