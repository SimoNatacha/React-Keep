import React from 'react'
import {GoogleLogin} from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addUser } from '../../redux/actions/user';
import {CLIENT_ID} from './constants';

const LoginAuth = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const onSuccess = (res) => {
        console.log('[SignUp Sucess] currentUser: ', res.profileObj );

        dispatch(addUser(res.profileObj));
        if (sessionStorage.getItem("Token") === null){

            sessionStorage.clear();
            history.push("/");
        
    
          }else{
         
            history.push("/dashboard");
    
         }
    }

    const onFailure = (res) => {
        console.log('[Login Failed] res: ', res );
    };

    return (
        <div className="p-g ">
        <GoogleLogin
        clientId={CLIENT_ID}
        onSuccess={onSuccess}
      buttonText="Sign Up with Google"
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{marginTop:'100px'}}
        isSignedIn={true}
        className="shadow log-G "
 
        
        
        />
            
        </div>
    )
}

export default LoginAuth
