import React, { useState } from "react";
import GoggleKepp from "../assets/images/logo-google-keep.png";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions/user";
import LandingSignup from "../assets/images/undraw_completing_6bhr.svg";
import { Link, useHistory } from "react-router-dom";
import LabelInput from "../components/ui/label-input";
import { isEmptyOrNull, toastError } from "../utils/core.utils";
import DefaultButton from "../components/ui/default-Button";
import SignUpAuth from "../auth/Google/SignUpAuth";

export default function Signup() {
  const [visibility, setVisisbility] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
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

  const handleInputName = (evt) => {
    const value = evt.target.value;

    if (/[^a-zA-Z]/.test(value)) {
      console.log(JSON.stringify(value), "=> invalid");
    } else {
      setState({
        ...state,
        [evt.target.name]: value,
      });
      if (!visibility) {
        setVisisbility(!visibility);
      }
    }
  };

  const validate = () => {
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!state.email || reg.test(state.email) === false) {
      toastError("Email Field is Invalid");
      return false;
    }
    if (/[^a-zA-Z]/.test(state.first_name)) {
      toastError("Name Field is Invalid");
      return false;
    }
    if (
      isEmptyOrNull(state.first_name) &&
      isEmptyOrNull(state.last_name) &&
      isEmptyOrNull(state.email) &&
      isEmptyOrNull(state.password)
    ) {
      toastError("All Fields are Empty");
      return false;
    }
    if (
      isEmptyOrNull(state.password) ||
      isEmptyOrNull(state.last_name) ||
      isEmptyOrNull(state.first_name) ||
      isEmptyOrNull(state.email)
    ) {
      toastError("Not all fields are filled");

      return false;
    }
    if (state.confirm_password !== state.password) {
      toastError("Passwords Don't Match!!!");
      return false;
    }

    if (!(state.password.length > 8)) {
      toastError("Password should be greater than 8", "Password too short!!");
      return false;
    } else {
      return true;
    }
  };

  const validator = async () => {
    if (validate()) {
      await dispatch(addUser(state));

      if (sessionStorage.getItem("Token") === null) {
        sessionStorage.clear();
        // history.push("/signup");
      } else {
        history.push("/dashboard");
      }
    }
  };
  // const onSignIn=(googleUser)=> {
  //   var profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // }

  const handleSubmittG = async ( res) => {

    console.log("[SignUp Sucess] currentUser: ", res.profileObj);

    await dispatch(addUser(res.profileObj));
    
    if (sessionStorage.getItem("Token") === null) {
      sessionStorage.clear();
      history.push("/");
    } else {
      history.push("/dashboard");
    }
  };
  const onFailure = (res) => {
    console.log("[Login Failed] res: ", res);
  };
  const handleSubmitt = async (event) => {
    event.preventDefault();
    await validator();

    await setState({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      emailError: null,
    });
    console.log("user after", state);
  };
  return (
    <div id="Signup" className="shadow row">
      <div className="column " style={{ width: "50%", height: "100%" }}>
        <div className="">
          <div className="logo-description ">
            <img src={GoggleKepp} alt="" srcSet="" />
            <h1>Create Your Account Here! </h1>
          </div>
          <br />
          <br />

          <form
            action=""
            className="sign-auth add-user add-users "
            onSubmit={handleSubmittG}
          >
            {" "}
            <SignUpAuth succes={handleSubmittG} failure={onFailure} />
            <br />
            <div className="seperator">
              <h1>OR</h1>
            </div>
          </form>

          <form
            action=""
            className="signup-form add-user add-users "
            onSubmit={handleSubmitt}
          >
            <div className="row dp-f">
              <LabelInput
                visible={visibility.toString()}
                onChange={handleInputName}
                type="text"
                className="br-5 "
                placeholder="First Name"
                name="first_name"
                value={state.first_name}
              />

              <LabelInput
                visible={visibility.toString()}
                onChange={handleInputName}
                type="text"
                className="br-5 "
                placeholder="Last Name"
                name="last_name"
                value={state.last_name}
              />
            </div>
            <br />

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

            <div className="row">
              <LabelInput
                visible={visibility.toString()}
                onChange={handleInput}
                className="br-5 "
                placeholder="Confirm Password"
                name="confirm_password"
                type="password"
                autoComplete="confirm_password"
                value={state.confirm_password}
              />
            </div>
            <br />
            <DefaultButton name={"Sign Up"} />

            <div className="already-have-account">
              <div className="sub-to-Signup">
                <br />
                <Link style={{ fontWeight: "300" }} to="/login">
                  Already Have an Account? Login Here!!
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div
        className="column side-landing "
        style={{ width: "50%", height: "100%" }}
      >
        <div className=" side-landing-img">
          <div className="intro-landing ">
            <h2>
              Let's Help You <span>Keep ,Create ,Share and Collaborate </span>
              your note list
            </h2>
          </div>

          <img
            src={LandingSignup}
            alt=""
            style={{ width: "80%", marginLeft: "30px" }}
          />
        </div>
      </div>
    </div>
  );
}
