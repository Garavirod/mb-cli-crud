import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
// import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
  NavLink,
} from "react-router-dom";
import Pagetest from "./Pagetest";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function SignInSide() {
  const guardado = localStorage.getItem("statusUser");
  console.log(JSON.parse(guardado));
  const dataUser = JSON.parse(guardado);
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
            <div>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    to="/accessmb/pagetest"
                  >
                    Froms <span className="sr-only">(current)</span>
                  </NavLink>
                  <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                  <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    to="/list"
                  >
                    List
                  </NavLink>
                  <NavLink
                    activeClassName="active"
                    className="nav-item nav-link"
                    to="/counter"
                  >
                    Counter
                  </NavLink>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>

      <Switch>
        <Route path="/accessmb/pagetest" component={Pagetest} exact />
        {/* <Route path="/registro" component={Registro} exact />
          <Route path="/logout" component={Logout} exact />
          <ProtectedRoute path="/accessmb" component={Welcome} exact /> */}
      </Switch>
    </Router>
    // <React.Fragment>
    //   <h1>Bienvenido {dataUser.first_name}</h1>
    //   <h2>Correo {dataUser.email}</h2>
    //   <h2>Rol {dataUser.rol}</h2>
    //   <Button variant="contained" color="primary" href="logout">
    //     Log out
    //   </Button>
    // </React.Fragment>
  );
}
