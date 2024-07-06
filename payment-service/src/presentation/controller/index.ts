import { createSubscriptionPayment } from "../../infrastructure/database/mongodb/repositories";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { createPaymentController } from "./createPayment";
import { createSessinController } from "./createSession";
import { getAllPaymentController } from "./getAllPayment";
import { createSubScriptionPaymentController } from "./createSubscriptionPayment";

export const controller = ( Dependencies : IDependecies ) => {
    return {
        createSession : createSessinController( Dependencies ),
        createPayment : createPaymentController( Dependencies ),
        getAllPayment : getAllPaymentController( Dependencies ),
        createSubscriptionPayment : createSubScriptionPaymentController( Dependencies )
    }
}