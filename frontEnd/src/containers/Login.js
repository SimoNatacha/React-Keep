import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import GoggleKepp from '../assets/images/logo-google-keep.png';
import LandingLogin from '../assets/images/undraw_Login_re_4vu2.svg';
import { Link, useHistory } from 'react-router-dom';
import LabelInput from '../components/ui/label-input';
import { isEmptyOrNull, toastError } from '../utils/core.utils';
import { useDispatch } from 'react-redux';
import { LoginU } from '../redux/actions/user';
import DefaultButton from '../components/ui/default-Button';
import LoginAuth from '../auth/Google/LoginAuth';
// import LoginOutAuth from "../auth/Google/SignOutAuth";
const LoginForm = () => {
	const history = useHistory();
	const [visibility, setVisisbility] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		sessionStorage.clear();
	});

	const [state, setState] = useState({
		email: '',
		password: '',
		emailError: null,
	});

	const handleInput = (evt) => {
		const value = evt.target.value;

		setState({
			...state,
			[evt.target.name]: value,
		});
		if (!visibility) {
			setVisisbility(!visibility);
		}
	};

	const validate = () => {
		const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
		if (!state.email || reg.test(state.email) === false) {
			toastError('Email Field is Invalid');
			return false;
		}
		if (isEmptyOrNull(state.password) || isEmptyOrNull(state.email)) {
			return false;
		} else {
			return true;
		}
	};
	const validator = async () => {
		if (validate()) {
			await dispatch(LoginU(state));

			if (sessionStorage.getItem('Token') === null) {
				sessionStorage.clear();
				history.push('/');
			} else {
				history.push('/dashboard');
			}
		}
	};

	const handleSubmittG = async (res) => {
		console.log('[Login Sucess] currentUser: ', res.profileObj);

		await dispatch(LoginU(res.profileObj));

		if (sessionStorage.getItem('Token') === null) {

			toastError('Error no token');
			sessionStorage.clear();
			history.push('/login');
		} else {
			history.push('/dashboard');
		}
	};
	const onFailure = (res) => {
		console.log('[Login Failed] res: ', res);
	};

	const handleSubmitt = (event) => {
		event.preventDefault();
		validator();
		if (sessionStorage.getItem('Token') === null) {
			sessionStorage.clear();
			history.push('/login');
		} else {
			history.push('/dashboard');
		}
	};
	return (
		<div id="Signup" className="shadow  row ">
			<div className="column " style={{ width: '50%', height: '100%' }}>
				<div className="logo-description ">
					<img src={GoggleKepp} alt="" srcSet="" />
					<h1>Welcome Back! </h1>
				</div>

				<br />
				<br />
				<br />
				<br />
				<form
					action=""
					className="sign-auth add-user add-users "
					onSubmit={handleSubmittG}
				>
					{' '}
					<LoginAuth succes={handleSubmittG} failure={onFailure} />
					<br />
					<div className="seperator">
						<h1>OR</h1>
					</div>
				</form>

				<form
					action=""
					className=" signup-form add-user add-users "
					onSubmit={handleSubmitt}
				>
					<div className="row">
						<LabelInput
							visible={visibility.toString()}
							onChange={handleInput}
							type="text"
							className="br-5 "
							placeholder="Email"
							name="email"
							value={state.email}
						/>
					</div>
					<br />
					<div className="row">
						<LabelInput
							visible={visibility.toString()}
							onChange={handleInput}
							className="br-5 "
							placeholder="Password"
							name="password"
							type="password"
							autoComplete="password"
							value={state.password}
						/>
					</div>

					<br />
					<DefaultButton name={'Login'} />
					<br />
					<div className="already-have-account">
						<div className="sub-to-Signup">
							<Link style={{ fontWeight: '300' }} to="/signup">
                Not yet registered? Signup Here!!
							</Link>
						</div>
					</div>
				</form>
			</div>
			<div
				className="column side-landing "
				style={{ width: '50%', height: '100%' }}
			>
				<div className=" side-landing-img">
					<div className="intro-landing ">
						<h2>
              Let's Help You <span>Keep ,Create ,Share and Collaborate </span>
              your note list
						</h2>
					</div>
					<img src={LandingLogin} alt="" />
				</div>
			</div>
		</div>
	);
};

export default LoginForm;
