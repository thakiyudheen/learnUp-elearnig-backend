import { Dependencies } from "../../_boot/dependecies";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { createPaymentController } from "./createPayment";
import { createSessinController } from "./createSession";

export const controller = ( Dependencies : IDependecies ) => {
    return {
        createSession : createSessinController( Dependencies ),
        createPayment : createPaymentController( Dependencies )
    }
}