import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Registro from "./components/Registro";
import Welcome from "./components/Welcome";
import swal from "sweetalert";

const isAuthenticated = () => {
  let status = localStorage.getItem("statusUser");
  return status ? true : false;
};

// Props is = path='/accessmb' component={Welcome} exact
const ProtectedRoute = (props) => {
  return isAuthenticated() ? <Route {...props} /> : <Redirect to="/" />;
};

const Logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("statusUser");
  swal("Cesión cerrada", "Bye", "success");
  setInterval(function () {
  }, 2000);
  return <Redirect to="/" />;
};

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/registro" component={Registro} exact />
          <Route path="/logout" component={Logout} exact />
          <ProtectedRoute path="/accessmb" component={Welcome} exact />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
