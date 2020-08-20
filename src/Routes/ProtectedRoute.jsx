import React from "react";
import {BrowserRouter as Route, Redirect} from "react-router-dom";

const ProtectedRoute = (props) => {
    const isAuthenticated =()=>{ 
        let token = localStorage.getItem('tokenMB');
        return token ? true : false;
    }      
    return isAuthenticated() ? <Route {...props}/> : <Redirect to="/"/>
}
 
export default ProtectedRoute;
