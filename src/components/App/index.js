import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//css
import './App.css';

//Material-UI

//componentes
import Layout from '../Layout';
import Equipos from '../Catalogos/Equipos';
import Macroperas from '../Catalogos/Macroperas'
import Tuberias from '../Catalogos/Tuberias'
import Actividades from '../Catalogos/Actividades'
import Campos from '../Catalogos/Campos'

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Layout>
            <Route exact path="/" component={() => <div>home page</div>} />
            <Route path="/catalogos/equipos" component={Equipos} />            
            <Route path="/catalogos/tuberias" component={Tuberias} />
            <Route path="/catalogos/campos" component={Campos} />
            <Route path="/catalogos/macroperas" component={Macroperas} />
            <Route path="/catalogos/actividades" component={Actividades} />
          </Layout>
        </div>
      </div>
    </Router>
  );
};

export default App;
