import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


//css
import './App.css';

//Material-UI


//componentes
import Layout from '../Layout';
import Equipos from '../Catalogos/Equipos';
import Tuberias from '../Catalogos/Tuberias'
import Campos from '../Catalogos/Campos'
import Macroperas from '../Catalogos/Macroperas'


const App = () => {
  
    return (
      <div className="App">
        <div className="container">
          <Router>
            <Layout>
              <Route exact path="/" component={() => <div>home page</div>} />
              <Route path="/catalogos/equipos" component={Equipos} />
              <Route path="/catalogos/tuberias" component={Tuberias} />
              <Route path="/catalogos/campos" component={Campos} />
              <Route path="/catalogos/macroperas" component={Macroperas} />
            </Layout>
          </Router>
        </div>
      </div>
    );
  }

export default App;
