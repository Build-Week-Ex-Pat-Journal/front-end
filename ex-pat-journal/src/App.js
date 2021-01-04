import './App.css';
import React,  { useState, useEffect} from 'react'; 


import Posts from './components/Posts';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import NavBar from './components/NavBar';
import PrivateRoute from "./components/PrivateRoute";

import axios from 'axios';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



//////////////// INITIAL STATES ////////////////







function App() {

 //////////////// STATES ////////////////  

 //////////////// HELPERS ////////////////

 //////////////// EVENT HANDLERS ////////////////

  //////////////// SIDE EFFECTS ////////////////
  return (
  <div>
    <h1>Ex-Pat Journal</h1>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
        <PrivateRoute exact path="/network-posts" component={Posts} />
        {/* <LoginForm />
        <RegisterForm /> */}
      </Switch>
    </Router>
  </div>
  );
}

export default App;
