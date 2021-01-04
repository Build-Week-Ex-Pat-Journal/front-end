import './App.css';
import React,  { useState, useEffect} from 'react'; 
import Posts from './components/Posts';
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import axios from 'axios';



//////////////// INITIAL STATES ////////////////







function App() {

 //////////////// STATES ////////////////  

 //////////////// HELPERS ////////////////

 //////////////// EVENT HANDLERS ////////////////

  //////////////// SIDE EFFECTS ////////////////
  return (
  <div>
  <h1>Ex-Pat Journal</h1>
  <LoginForm />
  <RegisterForm />
  {/* <Posts /> */}
  </div>
  );
}

export default App;
