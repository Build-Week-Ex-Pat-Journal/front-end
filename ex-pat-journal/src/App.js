import './App.css';
import React from 'react' 
import Posts from './Posts'

function LoginForm() {
  return(
  <div>
    <h2>Login Form</h2>
    <Posts />
  </div>
  )
}

function RegisterForm() {
  return(
  <div>
    <h2>Register Form</h2>
  </div>
  )
}

function App() {
  return (
  <div>
  <h1>Ex-Pat Journal</h1>
  <LoginForm />
  <RegisterForm />
  </div>
  );
}

export default App;
