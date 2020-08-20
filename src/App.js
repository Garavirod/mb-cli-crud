import React,{useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Login from './components/Login';
import Registro from './components/Registro';
import Welcome from './components/Welcome';


function AccessContent(props){
  const logged = props.isLoggedIn;
  if(!logged){
    return <Login/>
  }else{
    return <Welcome/>
  }
}

function App() {
  return (
      <React.Fragment>   
        <Router>
        <Switch>
          <Route path='/' component={Login} exact />
          <Route path='/Welcome' component={Welcome} exact />
          <Route path='/registro' component={Registro} exact />
        </Switch>
      </Router>             
        {/* <AccessContent isLoggedIn={false}/> */}
      </React.Fragment>
  );
}

export default App;
