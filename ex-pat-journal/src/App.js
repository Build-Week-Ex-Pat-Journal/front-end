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
//////////////// HELPERS ////////////////

//////////////// EVENT HANDLERS ////////////////

//////////////// SIDE EFFECTS ////////////////  

  return(
  <div className= "Form">
      <form className = "form container">
        <label>
        Username: 
        <input
        value="#"
        onChange="#"
        name="username"
        type="text"
        />
        </label>
        <label>
        Password: 
        <input
        value="#"
        onChange="#"
        name="password"
        type="text"
        />
        </label>
        <button className="loginButton" disabled='{disabled}'>login</button>
        <button className="signUpButton" disabled='{disabled}'>no account yet? click to sign up</button>
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

 const inputChange = (name, value) => {
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
         [name]: err.registerErrors[0],
       });
     });

     setRegisterFormValues({
       ...registerFormValues,
       [name]: value, // NOT AN ARRAY
     });
}

//////////////// SIDE EFFECTS ////////////////
  return(
    <div className= "Form">
    <form className = "form container">
    <label>
      First Name: 
      <input
      value="#"
      onChange="#"
      name="fname"
      type="text"
      />
      </label>
      <label>
      Last Name: 
      <input
      value="#"
      onChange="#"
      name="lname"
      type="text"
      />
      </label>
      <label>
      Email: 
      <input
      value="#"
      onChange="#"
      name="email"
      type="text"
      />
      </label>
      <label>
      Username: 
      <input
      value="#"
      onChange="#"
      name="username"
      type="text"
      />
      </label>
      <label>
      Password: 
      <input
      value="#"
      onChange="#"
      name="password"
      type="text"
      />
      </label>
      <label>
      Confirm Password: 
      <input
      value="#"
      onChange="#"
      name="confirmPassword"
      type="text"
      />
      </label>
      <button className="loginButton" disabled='{disabled}'>register
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
