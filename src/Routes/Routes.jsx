import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import Login from '../components/Login';

const Routes = () => {
    return ( 
        <Router>
            <div>            
                <Route path="/" component={Login} exact>
                </Route>
                {/* <Route path="/JustificacionSemana" component={Levantamiento} exact>
                </Route>
                <Route path="/BitacordaDR" component={BitacoraDR} exact>
                </Route>
                <Route path="/ControlDeServicios" component={Control} exact>
                </Route>
                <Route path='/reportes/' component={MainReportes}/>
                <Route path='/pruebas' component={Pruebas}exact>
                </Route> 
                <Route path='/lesionados/' component={Lesionados}exact>
                </Route> 
                <Route path='/colisiones/' component={Colisiones}exactç>
                </Route>
                <Route path='/MenuAccidentes/' component={MenuAccidentes}exact>
                </Route>                                                */}
            </div>
        </Router>
     );
}
 
export default Routes;
