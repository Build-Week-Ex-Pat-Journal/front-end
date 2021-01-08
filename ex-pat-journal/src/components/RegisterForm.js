import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import axios from "axios";
import * as yup from "yup";
import registerschema from "../registerschema";
import styled from "styled-components";

const initialRegisterFormValues = {
  fname: "",
  lname: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const initialRegisterErrors = {
  fname: "",
  lname: "",
  email: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const initialRegisterDisabled = true;

function RegisterForm(props) {
  //////////////// STATES ////////////////
  const [registerDisabled, setRegisterDisabled] = useState(
    initialRegisterDisabled
  );
  const [registerErrors, setRegisterErrors] = useState(initialRegisterErrors);
  const [registerFormValues, setRegisterFormValues] = useState(
    initialRegisterFormValues
  );


  //////////////// EVENT HANDLERS ////////////////

//  const registerInputChange = (name, value) => {
  // // debugger
  //   setRegisterFormValues(
  //     prev => {
  //       return ({
  //         ...prev,
  //         [name]: value, // NOT AN ARRAY
  //       })
  //     }
  //   )
  //   console.log('fresh', freshState)

    

  
  //   console.log('registerInputChange: ', registerFormValues);
  // };

  const onChange = (evt) => {
   // debugger
    const { name, value } = evt.target;
    setRegisterFormValues( prev => {
      return ({
        ...prev,
        [name]: value, // NOT AN ARRAY
      })
    })

    yup
    .reach(registerschema, name)
    .validate(value) // validate this value
    .then(() => {
      console.log("reach: ",registerFormValues)
      // happy path and clear the error
      setRegisterErrors({
        ...registerErrors,
        [name]: "",
      });
    })
    // if the validation is unsuccessful, we can set the error message to the message
    // returned from yup (that we created in our schema)
    .catch((err) => {
      setRegisterErrors({
        ...registerErrors,
        // validation error from schema
        [name]: err.errors[0],
      });
     });
   // registerInputChange(name, value);
    
    console.log('onChange: ', registerFormValues)
  };

  const register = (e) => {
    e.preventDefault();

    // Because backend is not currently built to hold
    // fname, lname, and email, as of 1/4/21
    const abbreviatedRegistrationCredentials = {
      username: registerFormValues.username,
      password: registerFormValues.password,
    };
    console.log(abbreviatedRegistrationCredentials);

    axios
      .post(
        "https://expatjournal2021.herokuapp.com/api/register",
        abbreviatedRegistrationCredentials
      )
      .then((res) => {
        console.log(res);
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //////////////// SIDE EFFECTS ////////////////

  useEffect(() => {
    registerschema.isValid(registerFormValues).then((valid) => {
      setRegisterDisabled(!valid);
      valid && setRegisterErrors(initialRegisterErrors) 
      console.log('useeffect', registerFormValues)
    })
    .catch();
  }, [registerFormValues]);

  return (
    <StyledRegister>
      <div className="Form">
        <div style={{ color: "red" }} className="errors">
          {registerErrors.fname}
          <br />
          {registerErrors.lname}
          <br />
          {registerErrors.email}
          <br />
          {registerErrors.username}
          <br />
          {registerErrors.password}
          <br />
          {registerErrors.confirmPassword}
          <br />
        </div>
        <form className="form container" onSubmit={register}>
          <h1>Registration</h1>
          <label className="name">
            First Name:
            <input
              value={registerFormValues.fname}
              onChange={onChange}
              name="fname"
              type="text"
            />
          </label>

          <label className="name">
            Last Name:
            <input
              value={registerFormValues.lname}
              onChange={onChange}
              name="lname"
              type="text"
            />
          </label>

          <label className="name">
            Email:
            <input
              value={registerFormValues.email}
              onChange={onChange}
              name="email"
              type="text"
            />
          </label>

          <label className="name">
            Username:
            <input
              value={registerFormValues.username}
              onChange={onChange}
              name="username"
              type="text"
            />
          </label>

          <label className="name">
            Password:
            <input
              value={registerFormValues.password}
              onChange={onChange}
              name="password"
              type="password"
            />
          </label>

          <label className="name">
            Confirm Password:
            <input
              value={registerFormValues.confirmPassword}
              onChange={onChange}
              name="confirmPassword"
              type="password"
            />
          </label>

          <button className="loginButton" disabled={registerDisabled}>
            register
          </button>
        </form>
      </div>
    </StyledRegister>
  );
}


export default RegisterForm;

const StyledRegister = styled.div`
  background-color: ${(pr) => pr.theme.backColor};
  .container {
    color: ${(pr) => pr.theme.textColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    border: black solid 2px;
    background-color: #f0f8ff;
    width: 80%;
    margin: 0 auto;
  }
  .errors {
    text-align: center;
    text-decoration: underline;
    line-height: 20px;
    font-weight: 500;
  }
  h1 {
    text-align: center;
    text-decoration: underline;
    color: ${(pr) => pr.theme.titleColor};
    font-size: 5.5rem;
    font-family: "Permanent Marker", cursive;
    text-shadow: 2px 2.5px magenta;
  }
  .name {
    display: flex;
    justify-content: space-between;
    margin: 2% auto;
    width: 50%;
    text-align: center;
    font-size: 20px;
  }
  button {
    background-color: ${(pr) => pr.theme.btnColor};
    padding: ${(pr) => pr.theme.padding.medium};
    width: ${(pr) => pr.theme.width.small};
    margin: 1% auto;
    &:hover {
      background-color: ${(pr) => pr.theme.secondBtnColor};
    } /* hover closed */
  } /* button closed*/
`; //stylist closed
