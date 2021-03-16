
import {getAllUsers,createUser,login} from '../api/user.api'
import { toastError, toastSuccess } from '../utils/core.utils';

 class User {

    constructor() {
        this.respond = {
            success: false,
            response: null,
            message: 'An error occured while connecting to the server!'
        };
    }

  setResponse = data => {
    this.respond = data;
};

getResponse = () => {
    return this.respond;
};

addUser = async user => {

    await createUser(user).then(( result ) => {
        console.log("results from add", result)
        const { data } = result;
        console.log("user data to add", data)
           const { success, message, response } = data;
           console.log(success,message)
           if (success) {
console.log("success")
            toastSuccess(message)

               console.log("response",response)
               this.setResponse(response);
           } else {

            toastError(message)
            
               this.setResponse([]);
               console.log(message);
            
           }
    });
};

LoginUser = async user => {
    await login(user).then(( result ) => {


        const { data } = result;

           const { success, message } = data;

           if (success) {

            toastSuccess(message)

               this.setResponse(data);
           } else {

            toastError(message)
               this.setResponse([]);


           }
    });
};

getUsers = async () => {

    await getAllUsers().then(( result ) => {
        const { data } = result;
        const {success,response,message}=data;

        if (success) {
            toastSuccess(message)
            this.setResponse(response);
        } else {
            toastError(message)
            console.log(message);
        }
    });
};
}
export default new User();