import React from 'react';
import {GoogleLogout} from 'react-google-login';
import { useHistory } from 'react-router-dom';
import Icons from '../../assets/Icons';
import {CLIENT_ID} from './constants';

const SignOutAuth = () => {
	const history = useHistory();
	const onSuccess = () => {
		sessionStorage.clear(); 
		history.push('/');

	};

	return (
		<div>
			<GoogleLogout
				clientId={CLIENT_ID}
				icon={false}
				onLogoutSuccess={onSuccess}
       
			>
				<div  className="dp-f outG">
				<div className='ic'><Icons focusable="false" name="Out"   className="side-icon" /></div>

					
					<span>Logout</span></div>
			</GoogleLogout>
		</div>
	);
};

export default SignOutAuth;
