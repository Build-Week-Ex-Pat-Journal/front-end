import React,  { useState, useEffect} from 'react'; 
import Posts from './Posts';
import axios from 'axios';
import * as yup from 'yup';
import registerschema from '../registerschema'

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


function RegisterForm(props) {
    //////////////// STATES //////////////// 
    const [registerDisabled, setRegisterDisabled] = useState(initialRegisterDisabled);
    const [registerErrors, setRegisterErrors] = useState(initialRegisterErrors)
    const [registerFormValues, setRegisterFormValues] = useState(initialRegisterFormValues)
    //////////////// HELPERS ////////////////

    console.log(props);
    
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

    const register = e => {
      e.preventDefault();

      // Because backend is not currently built to hold
      // fname, lname, and email, as of 1/4/21
      const abbreviatedRegistrationCredentials = {
        username: registerFormValues.username,
        password: registerFormValues.password
      }
      console.log(abbreviatedRegistrationCredentials);

      axios
        .post("https://expatjournal2021.herokuapp.com/api/register", abbreviatedRegistrationCredentials)
        .then((res) => {
          console.log(res);
          props.history.push('/');
        })
        .catch(err => {
          console.log(err);
        });
    }
    
    //////////////// SIDE EFFECTS ////////////////
    
    useEffect(() => {
      registerschema.isValid(registerFormValues).then((valid) => {
        setRegisterDisabled(!valid);
      });
    }, [registerFormValues]);

      return(
        <div className= "Form">
          <div style={{"color": "red"}} className="errors">
            {registerErrors.fname}<br/>
            {registerErrors.lname}<br/>
            {registerErrors.email}<br/>  
            {registerErrors.username}<br/>
            {registerErrors.password}<br/>
            {registerErrors.confirmPassword}<br/>
          </div>
          <form className="form container" onSubmit={register}>
            <label>
              First Name: 
              <input
                value={registerFormValues.fname}
                onChange={onChange}
                name="fname"
                type="text"
              />
            </label>
            <br />

            <label>
              Last Name: 
              <input
                value={registerFormValues.lname}
                onChange={onChange}
                name="lname"
                type="text"
              />
            </label>
            <br />

            <label>
              Email: 
              <input
                value={registerFormValues.email}
                onChange={onChange}
                name="email"
                type="text"
              />
            </label>
            <br />

            <label>
              Username: 
              <input
                value={registerFormValues.username}
                onChange={onChange}
                name="username"
                type="text"
              />
            </label>
            <br />
            <label>
              Password: 
              <input
                value={registerFormValues.password}
                onChange={onChange}
                name="password"
                type="text"
              />
            </label>
            <br />

            <label>
              Confirm Password: 
              <input
                value={registerFormValues.confirmPassword}
                onChange={onChange}
                name="confirmPassword"
                type="text"
              />
            </label>
            <br />

            <button className="loginButton" disabled={registerDisabled}>register
            </button>
          </form>
      </div>
      )
    }

    export default RegisterForm;