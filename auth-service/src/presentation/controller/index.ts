import { resetPasswordUseCase } from "@/application/useCases";
import { Dependencies } from "../../_boot/dependecies";
import { IDependecies } from "../../application/Interfases/IDependencies";
import { checkExistingUserNameController } from "./checkExistingUserNameController";
import { findByUserEmailController } from "./findUserByEmail";
import { forgetPasswordController } from "./forgetPassword";
import { getUserDataController } from "./getUserDataController";
import { googleAuth } from "./googleAuth";
import { loginController } from "./loginController";
import { signupController } from "./signupController";
import { verifyOtpController } from "./verifyOtpController";
import { resetPasswordController } from "./resetPassword";

export const controller = ( Dependencies : IDependecies ) => {
    
    return {
         checkExistingUserName  : checkExistingUserNameController( Dependencies ),
         findUserByEmail : findByUserEmailController (Dependencies ),
         login : loginController( Dependencies ),
         signup : signupController( Dependencies ),
         verifyOtp : verifyOtpController( Dependencies ),
         googleAuth : googleAuth( Dependencies ),
         getUser : getUserDataController( Dependencies ),
         logout : loginController( Dependencies ),
         forgetPassword : forgetPasswordController( Dependencies ),
         resetPassword : resetPasswordController( Dependencies )
    }
}