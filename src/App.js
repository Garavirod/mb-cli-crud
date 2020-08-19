import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
        <Login/>
  );
}

export default App;
