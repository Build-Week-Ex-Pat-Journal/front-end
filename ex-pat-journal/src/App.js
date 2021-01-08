import "./App.css";
import React, { useState, useEffect } from "react";

import Posts from "./components/Posts";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import NavBar from "./components/NavBar";
import PrivateRoute from "./components/PrivateRoute";
import NewPostForm from "./components/NewPostForm";
import styled from "styled-components";
import axios from "axios";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MyPosts from "./components/MyPosts";

function App() {
  return (
    <StyledApp>
      <Router>
        <NavBar />
        <StyledH1>😎Expat Journal🤙 </StyledH1>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
          <PrivateRoute path="/all-posts" component={Posts} />
          <PrivateRoute path="/new-post" component={NewPostForm} />
          <PrivateRoute path="/my-posts" component={MyPosts} />
        </Switch>
      </Router>
    </StyledApp>
  );
}

export default App;

const StyledH1 = styled.h1`
  color: ${(pr) => pr.theme.titleColor};
  text-align: center;
  font-size: 8rem;
  border: 2px magenta dashed;
  padding: ${(pr) => pr.theme.padding.large};
  margin: 5% auto;
  text-shadow: 5px 2px magenta;
  text-decoration: underline;
  background-color: thistle;
  font-family: "Hanalei Fill", cursive;
  &:hover {
    text-shadow: 5px 2px ${(pr) => pr.theme.titleColor};
    color: magenta;
    border: 2px ${(pr) => pr.theme.titleColor} dashed;
    background-color: firebrick;
  }
    @media (max-width: 1000px) {
      font-size: 5rem;}
  @media (max-width: 500px) {
    font-size: 2.5rem;
  margin: 10% auto;}
`;

const StyledApp = styled.div`
  background-color: #f0f8ff;
`;
