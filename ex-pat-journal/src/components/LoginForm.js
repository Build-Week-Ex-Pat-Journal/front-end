import React,  { useState, useEffect} from 'react'; 
import Posts from './Posts';
import axios from 'axios';
import * as yup from 'yup';
import loginschema from '../loginschema';

import { setCurrentUsername } from './../actions';
import { connect } from 'react-redux';

const initialLoginFormValues = {
  username: '',
  password: ''
}
  
const initialLoginErrors = {
  username: '',
  password: '',
}

  const initialLoginDisabled = true;
  

function LoginForm(props) {
    //////////////// STATES //////////////// 
    const [loginDisabled, setLoginDisabled] = useState(initialLoginDisabled);
    const [loginErrors, setLoginErrors] = useState(initialLoginErrors);
    const [loginFormValues, setLoginFormValues] = useState(initialLoginFormValues);
    
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


    const login = e => {
      e.preventDefault();

      const credentialsTest = loginFormValues;

      console.log(credentialsTest);

      axios
        .post("https://expatjournal2021.herokuapp.com/api/login", credentialsTest)
        .then((res) => {
          localStorage.setItem("token", res.data);
          props.setCurrentUsername(credentialsTest.username);

          console.log(props.currentUsername);

          props.history.push('/all-posts');
        })
        .catch(err => {
          console.log(err);
          setLoginErrors({...loginErrors, password:'You entered an incorrect username or password.'})
        });
    }
    
    useEffect(() => {
      loginschema.isValid(loginFormValues).then((valid) => {
        setLoginDisabled(!valid);
      });
    }, [loginFormValues]);  

    useEffect(() => {}
    , [loginErrors]);
    
      return(
      <div className= "Form">
          <div className="errors" style={{"color":"red"}}>
            {loginErrors.username}<br/>
            {loginErrors.password}<br/>
          </div>
          <form className = "form container" onSubmit={login}>
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
          </form>
          <div>
            <p>No account yet?</p>
            <button onClick={() => props.history.push('/register')}>Register</button>
          </div>
      </div>
      )
    }

const mapStateToProps = state => {
  return {
      currentUsername: state.currentUsername
  }
};

export default connect(mapStateToProps, {setCurrentUsername})(LoginForm);