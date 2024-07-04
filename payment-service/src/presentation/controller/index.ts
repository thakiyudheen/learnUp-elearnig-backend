import { IDependecies } from "../../application/Interfases/IDependencies";
import { createPaymentController } from "./createPayment";
import { createSessinController } from "./createSession";
import { getAllPaymentController } from "./getAllPayment";

export const controller = ( Dependencies : IDependecies ) => {
    return {
        createSession : createSessinController( Dependencies ),
        createPayment : createPaymentController( Dependencies ),
        getAllPayment : getAllPaymentController( Dependencies )
    }
}