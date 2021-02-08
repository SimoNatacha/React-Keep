import React, { useState } from "react";
import GoggleKepp from "../assets/images/logo-google-keep.png";
import LandingLogin from "../assets/images/undraw_Login_re_4vu2.svg";
import { Link } from "react-router-dom";
import LabelInput from "../components/ui/label-input";
import { isEmptyOrNull } from "../utils/core.utils";
import DefaultButton from "../components/ui/default-Button";
import ErrorDiv from "../components/ui/error-Div";
import SuccessDiv from "../components/ui/success-Div";

export default function Login() {
  const [visibility, setVisisbility] = useState(false);
  const [errorSet, setErrorSet] = useState({
    errorM: "",
    headerM: "",
  });
  const [ successM, setSuccessM] = useState('');
  const [success, setSuccess] = useState(false);

  const [error, setError] = useState(false);
  const [state, setState] = useState({
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

  const validate = () => {
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!state.email || reg.test(state.email) === false) {
      setErrorSet({
        errorM: "Email Field is Invalid",
      });
      setError(true);

      return false;
    }

    if (state.confirm_password !== state.password) {
      setErrorSet({
        errorM: "Passwords Don't Match!!!",
      });
      setError(true);
      return;
    }

    if (/[^a-zA-Z]/.test(state.first_name)) {
      console.log(JSON.stringify(state), "=> invalid");
    }
    return true;
  };

  const handleSubmitt = (event) => {
    event.preventDefault();

    if (
      isEmptyOrNull(state.confirm_password) &&
      isEmptyOrNull(state.email) &&
      isEmptyOrNull(state.password)
    ) {
      setErrorSet({
        errorM: "All Fields are Empty",
      });
      setError(true);
      return;
    }
    if (
      isEmptyOrNull(state.password) ||
      isEmptyOrNull(state.confirm_password) ||
      isEmptyOrNull(state.email)
    ) {
      setErrorSet({
        errorM: "Not all fields are filled",
      });
      setError(true);
      return;
    }

    if (validate()) {

      setSuccessM("Submitted");
      setSuccess(true);

    }
  };
  return (
    <div id="Signup" className="row">
      <div className="column " style={{ width: "50%", height: "100%" }}>
        <div className="">
          <div className="logo-description ">
            <img src={GoggleKepp} alt="" srcSet="" />
            <h1>Welcome Back! </h1>
          </div>

          <br />
          <form
            action=""
            className="signup-form add-user add-users "
            onSubmit={handleSubmitt}
          >
            {error ? (
              <ErrorDiv header={errorSet.headerM} error={errorSet.errorM} />
            ) : 
             success? <SuccessDiv successM={successM}/> : ''
            }
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
                value={state.confirm_password}
              />
            </div>
            <br />
            <DefaultButton name={"Login"} />
            <br />
            <div className="already-have-account">
              <div className="sub-to-Signup">
                <Link style={{ fontWeight: "300" }} to="">
                  Not yet registered? Signup Here!!
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        className="column side-landing"
        style={{ width: "50%", height: "100%" }}
      >
        <div className="side-landing-img">
          <h2>
            Let's Help You <span>Keep ,Create ,Share and Collaborate </span>your
            note list
          </h2>
          <img src={LandingLogin} alt="" />
        </div>
      </div>
    </div>
  );
}
