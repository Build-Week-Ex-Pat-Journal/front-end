import React,  { useState, useEffect} from 'react'; 
import Posts from './Posts';
import axios from 'axios';
import * as yup from 'yup';
import loginschema from '../loginschema'

import { axiosWithAuth } from './../utils/axiosWithAuth';

import { setCurrentUsername } from './../actions';
import { connect } from 'react-redux';

//// sample data //////

const sampleUserList = [
    
    {
    fname: 'Mike',
    lname: 'Murphy',
    email: 'email@email.com',
    username: 'mike-murphy',
    password: 'password1234',
    posts:[
        {photo:"https://images.unsplash.com/photo-1609726057321-53e1f2e8acf3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", story:"This is a generic post1"},
        {photo:"https://images.unsplash.com/photo-1609726057321-53e1f2e8acf3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", story:"This is a generic post2"},
        {photo:"https://images.unsplash.com/photo-1609726057321-53e1f2e8acf3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", story:"This is a generic post3"}
    ]
  },
  {
    fname: 'Will',
    lname: 'Fletcher',
    email: 'email@gmail.com',
    username: 'will-fletcher',
    password: 'password12345',
    posts:[
            {photo:"https://images.unsplash.com/photo-1609726057321-53e1f2e8acf3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", story:"This is a generic post3"},
            {photo:"https://images.unsplash.com/photo-1609726057321-53e1f2e8acf3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", story:"This is a generic post4"},
            {photo:"https://images.unsplash.com/photo-1609726057321-53e1f2e8acf3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", story:"This is a generic post5"}
    ]
  },
  {
    fname: 'Josh',
    lname: 'Lovins',
    email: 'hotmail@hotmail.com',
    username: 'josh-lovins',
    password: 'password1234',
    posts: [
        {photo:"https://images.unsplash.com/photo-1609726057321-53e1f2e8acf3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", story:"This is a generic post7"},
        {photo:"https://images.unsplash.com/photo-1609726057321-53e1f2e8acf3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", story:"This is a generic post8"},
        {photo:"https://images.unsplash.com/photo-1609726057321-53e1f2e8acf3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", story:"This is a generic post9"}
    ]
  }
  
  ]

  const initialUser = {
    fname: '',
    lname: '',
    email: '',
    username: '',
    password: '',
    posts:[]
  }
  
  const initialPost = {
    photo:'',
    story:''
  }

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
    // const [credentials, setCredentials] = useState(initialCredentials);



    //////////////// STATES //////////////// 
    const [loginDisabled, setLoginDisabled] = useState(initialLoginDisabled);
    const [loginErrors, setLoginErrors] = useState(initialLoginErrors);
    const [loginFormValues, setLoginFormValues] = useState(initialLoginFormValues);

    // const [currentUser, setCurrentUser] = useState(initialUser);

    const [userList, setUserList] = useState(sampleUserList);

    // const [currentPost, setCurrentPost] = useState(initialPost);
    // const [posts, setPosts] = useState([]);
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


    const login = e => {
      e.preventDefault();
      axios
        .post("https://expatjournal2021.herokuapp.com/api/login", loginFormValues)
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.payload);
          setCurrentUsername(loginFormValues.username);
          props.history.push('/all-posts');
        })
        .catch(err => {
          console.log(err);
        });
    }

    //////////////// SIDE EFFECTS ////////////////
    // useEffect(() => {
    //   setUserList(sampleUserList)
    // }, []);
    
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
          {/* <button className="signUpButton">No account yet? click to sign up</button>  */}
          {/* <Posts currentUser={currentUser} setCurrentUser={setCurrentUser} currentPost={currentPost} setCurrentPost={setCurrentPost} posts={posts} setPosts={setPosts} userList={userList} setUserList={setUserList}/>  */}
          
          {/* <Posts userList={userList} setUserList={setUserList} />  */}

          {/* Mike to consider moving/revising these states */}
      </div>
      )
    }

// const mapStateToProps = state => {
//   return {
//       currentUsername: state.currentUsername
//   }
// };

export default connect(null, {setCurrentUsername})(LoginForm);

// export default LoginForm;