import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import routes from '../../../config/page-routes';
import { PageSettings } from '../../../config/page-settings';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: '600px',
  },
});

class Contenido extends Component {
  render() {
    return (
      <div id="contenido" className='container-fluid' style={{marginTop:'70px'}}>
        {routes.map((ruta, index) => (
          <Route key={index} path={ruta.path} exact={ruta.exact} component={ruta.component} />
        ))}
      </div>
    );
  }
}

export default withRouter(Contenido);
