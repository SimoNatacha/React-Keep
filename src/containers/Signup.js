import React, { useState } from "react";
import GoggleKepp from "../assets/images/logo-google-keep.png";
import LandingSignup from "../assets/images/undraw_completing_6bhr.svg";
import { Link } from "react-router-dom";
import LabelInput from "../components/ui/label-input";
import { isEmptyOrNull } from "../utils/core.utils";
import DefaultButton from "../components/ui/default-Button";
import ErrorDiv from '../components/ui/error-Div';
import SuccessDiv from "../components/ui/success-Div";

export default function Signup() {
  const [visibility, setVisisbility] = useState(false);
  const [errorSet, setErrorSet]= useState({
    errorM:'',
    headerM:''
  })
  const [ successM, setSuccessM] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
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
     
      setErrorSet({
        errorM:"Email Field is Invalid"
      })
      setError(true)

      return false;
    }
    if (/[^a-zA-Z]/.test(state.first_name)) {
      console.log(JSON.stringify(state), "=> invalid");
    }
    return true;
  };

  const handleSubmitt = (event) => {
    event.preventDefault();

    if (
      isEmptyOrNull(state.first_name) &&
      isEmptyOrNull(state.last_name) &&
      isEmptyOrNull(state.email) &&
      isEmptyOrNull(state.password)
    ) {
  
      setErrorSet({
        errorM:"All Fields are Empty"
      })
      setError(true)
      return;
    }
    if (
      isEmptyOrNull(state.password) ||
      isEmptyOrNull(state.last_name) ||
      isEmptyOrNull(state.first_name) ||
      isEmptyOrNull(state.email)
    ) {
     
      setErrorSet({
        errorM:"Not all fields are filled"
      })
      setError(true)
      return;
    }

    if (!(state.password.length > 8)) {
      setErrorSet({
        headerM:"Password too short!!",
        errorM:"Password should be greater than 8"
      })
      setError(true)
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
            <h1>Create Your Account Here! </h1>
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
          <br/>
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
<br/>
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
<br/>
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
<br/>
            <DefaultButton name={"Sign Up"} />
<br/>
            <div className="already-have-account">
              <div className="sub-to-Signup">
                <Link style={{fontWeight:'300'}} to=''>
                  Already Have an Account? Login Here!!
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="column side-landing" style={{ width: "50%", height: "100%" }}>
        <div className="side-landing-img">
          <h2>
            Let's Help You <span>Keep ,Create ,Share and Collaborate </span>your
            note list
          </h2>
          <img src={LandingSignup} alt="" />
        </div>
      </div>
    </div>
  );
}
