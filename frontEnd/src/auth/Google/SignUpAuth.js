import React from 'react';
import {GoogleLogin} from 'react-google-login';
import {CLIENT_ID} from './constants';

const LoginAuth = ({succes,failure}) => {


	return (
		<div className="p-g ">
			<GoogleLogin
				clientId={CLIENT_ID}
				onSuccess={succes}
				buttonText="Sign Up with Google"
				onFailure={failure}
				cookiePolicy={'single_host_origin'}
				style={{marginTop:'100px'}}
				isSignedIn={true}
				className="shadow log-G "
 
        
        
			/>
            
		</div>
	);
};

export default LoginAuth;
