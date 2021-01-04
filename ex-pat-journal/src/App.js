import './App.css';
import React,  { useState, useEffect} from 'react'; 


import Posts from './components/Posts';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import NavBar from './components/NavBar';
import PrivateRoute from "./components/PrivateRoute";
import NewPostForm from "./components/NewPostForm";

import axios from 'axios';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {

  return (
  <div>
    <h1>Ex-Pat Journal</h1>
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
        <PrivateRoute exact path="/all-posts" component={Posts} />
        <PrivateRoute exact path="/new-post" component={NewPostForm} />
      </Switch>
    </Router>
  </div>
  );
}

export default App;
