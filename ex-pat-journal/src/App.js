import './App.css';
import React,  { useState, useEffect} from 'react'; 
import Posts from './Posts';
import axios from 'axios';
import * as yup from 'yup';
import registerschema from './registerschema'
import loginschema from './loginschema'

//////////////// INITIAL STATES ////////////////
const initialLoginFormValues = {
  username: '',
  password: ''
}

const initialLoginErrors = {
  username: '',
  password: '',
}

const initialLoginDisabled = true;

const initialRegisterFormValues = {
  fname: '',
  lname: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: ''
}

const initialRegisterErrors = {
  fname: '',
  lname: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: ''
}

const initialRegisterDisabled = true;

function LoginForm() {

//////////////// STATES //////////////// 
const [loginDisabled, setLoginDisabled] = useState(initialLoginDisabled);
const [loginErrors, setLoginErrors] = useState(initialLoginErrors)
const [loginFormValues, setLoginFormValues] = useState(initialLoginFormValues)
const [user, setUser] = useState("")
//////////////// HELPERS ////////////////

//////////////// EVENT HANDLERS ////////////////
const loginInputChange = (name, value) => {
  yup
  .reach(loginschema, name)
  .validate(value) // validate this value
     .then(() => {
       // happy path and clear the error
       setLoginErrors({
         ...loginErrors,
         [name]: "",
       });
     })
     // if the validation is unsuccessful, we can set the error message to the message
     // returned from yup (that we created in our schema)
     .catch((err) => {
       setLoginErrors({
         ...loginErrors,
         // validation error from schema
         [name]: err.errors[0],
       });
     });

     setLoginFormValues({
       ...loginFormValues,
       [name]: value, // NOT AN ARRAY
     });
}

const onChange = (evt) => {
  const { name, value } = evt.target;
  loginInputChange(name, value)
}
//////////////// SIDE EFFECTS ////////////////
useEffect(() => {
  loginschema.isValid(loginFormValues).then((valid) => {
    setLoginDisabled(!valid);
  });
}, [loginFormValues]);  

  return(
  <div className= "Form">
      <div className="errors">
      {loginErrors.username}<br/>
      {loginErrors.password}<br/>
      </div>
      <form className = "form container">
        <label>
        Username: 
        <input
        value={loginFormValues.username}
        onChange={onChange}
        name="username"
        type="text"
        />
        </label>
        <label>
        Password: 
        <input
        value={loginFormValues.password}
        onChange={onChange}
        name="password"
        type="text"
        />
        </label>
        <button className="loginButton" disabled={loginDisabled}>login</button>
        {/* clicking sign-up button should trigger route to Register Form */}
        <button className="signUpButton">no account yet? click to sign up</button> 
      </form>
      <Posts />
  </div>
  )
}

function RegisterForm() {
//////////////// STATES //////////////// 
const [registerDisabled, setRegisterDisabled] = useState(initialRegisterDisabled);
const [registerErrors, setRegisterErrors] = useState(initialRegisterErrors)
const [registerFormValues, setRegisterFormValues] = useState(initialRegisterFormValues)
//////////////// HELPERS ////////////////

 //////////////// EVENT HANDLERS ////////////////

 const registerInputChange = (name, value) => {
  yup
  .reach(registerschema, name)
  .validate(value) // validate this value
     .then(() => {
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

     setRegisterFormValues({
       ...registerFormValues,
       [name]: value, // NOT AN ARRAY
     });
}

const onChange = (evt) => {
  const { name, value } = evt.target;
  registerInputChange(name, value)
}

//////////////// SIDE EFFECTS ////////////////

useEffect(() => {
  registerschema.isValid(registerFormValues).then((valid) => {
    setRegisterDisabled(!valid);
  });
}, [registerFormValues]); 
  return(
    <div className= "Form">
      <div className="errors">
      {registerErrors.fname}<br/>
      {registerErrors.lname}<br/>
      {registerErrors.email}<br/>  
      {registerErrors.username}<br/>
      {registerErrors.password}<br/>
      {registerErrors.confirmPassword}<br/>
      </div>
    <form className = "form container">
    <label>
      First Name: 
      <input
      value={registerFormValues.fname}
      onChange={onChange}
      name="fname"
      type="text"
      />
      </label>
      <label>
      Last Name: 
      <input
      value={registerFormValues.lname}
      onChange={onChange}
      name="lname"
      type="text"
      />
      </label>
      <label>
      Email: 
      <input
      value={registerFormValues.email}
      onChange={onChange}
      name="email"
      type="text"
      />
      </label>
      <label>
      Username: 
      <input
      value={registerFormValues.username}
      onChange={onChange}
      name="username"
      type="text"
      />
      </label>
      <label>
      Password: 
      <input
      value={registerFormValues.password}
      onChange={onChange}
      name="password"
      type="text"
      />
      </label>
      <label>
      Confirm Password: 
      <input
      value={registerFormValues.confirmPassword}
      onChange={onChange}
      name="confirmPassword"
      type="text"
      />
      </label>
      <button className="loginButton" disabled={registerDisabled}>register
      </button>
    </form>
</div>
  )
}

function App() {

 //////////////// STATES ////////////////  
 const [user, setUser] = useState([]);
 //////////////// HELPERS ////////////////

 //////////////// EVENT HANDLERS ////////////////

  //////////////// SIDE EFFECTS ////////////////
  return (
  <div>
  <h1>Ex-Pat Journal</h1>
  <LoginForm />
  <RegisterForm />
  </div>
  );
}

export default App;
