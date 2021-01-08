import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from '@material-ui/core/Typography'
// import { ThemeProvider, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
// import { border, palette } from '@material-ui/system';
import styled from "styled-components";

const NavBar = (props) => {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUsernameLocalStorage");
  };

  return (
    <StyledNavi>
      <AppBar
        className="nav-bar"
        display="flex"
        position="fixed"
        style={{
          backgroundColor: "#f0f8ff",
        }}
      >
        <Toolbar>
          <Grid justify="space-around" container spacing={24}>
            <Grid item style={{ width: "12%" }}>
              <Link className="navi" to="/" color="inherit">
                Log in
              </Link>
            </Grid>
            <Grid item style={{ width: "12%" }}>
              <Link className="navi" to="/all-posts" color="inherit">
                All Posts
              </Link>
            </Grid>
            <Grid item style={{ width: "12%" }}>
              <Link className="navi" to="/my-posts" color="inherit">
                My Posts
              </Link>
            </Grid>
            <Grid item style={{ width: "12%" }}>
              <Link className="navi" to="/new-post" color="inherit">
                New Post
              </Link>
            </Grid>
            <Grid item style={{ width: "12%" }}>
              {/* to="/new-post" */}
              <Link className="navi" to="/" onClick={logout} color="inherit">
                Log out
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </StyledNavi>
  );
};
export default NavBar;

const StyledNavi = styled.div`
  .navi {
    text-decoration: none;
    text-shadow: 1px 2px magenta;
    font-size: 1.5rem;
    font-family: "Permanent Marker", cursive;
    transition: 1s ease-in;
    padding: 10px;
    border-radius: 30%;
    max-width:100%;

    &:hover {
      background-color: firebrick;
      text-shadow: 2px 1px cyan;
      color: yellow;
      transition: 0.5s ease-out;
    }
  }
`;
