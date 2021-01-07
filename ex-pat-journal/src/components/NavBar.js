import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from '@material-ui/core/Typography'
// import { ThemeProvider, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
// import { border, palette } from '@material-ui/system';

const NavBar = (props) => {
  // console.log(props.theme);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUsernameLocalStorage");
    // props.history.push("/");
  };
  return (
    <AppBar
      className="nav-bar"
      display="flex"
      position="static"
      style={{ backgroundColor: "antiquewhite" }}
    >
      <Toolbar>
        <Grid justify="space-around" container spacing={24}>
          <Grid item style={{ width: "12%" }}>
            <Link to="/" color="inherit">
              Log in
            </Link>
          </Grid>
          <Grid item style={{ width: "12%" }}>
            <Link to="/all-posts" color="inherit">
              All Posts
            </Link>
          </Grid>
          <Grid item style={{ width: "12%" }}>
            <Link to="/my-posts" color="inherit">
              My Posts
            </Link>
          </Grid>
          <Grid item style={{ width: "12%" }}>
            <Link to="/new-post" color="inherit">
              New Post
            </Link>
          </Grid>
          <Grid item style={{ width: "12%" }}>
            {/* to="/new-post" */}
            <Link to="/" onClick={logout} color="inherit">
              Log out
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
