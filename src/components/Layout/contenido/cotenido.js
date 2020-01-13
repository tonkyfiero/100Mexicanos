import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import routes from '../../../config/page-routes';
import { PageSettings } from '../../../config/page-settings';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginLeft: '220px',
    padding: '20px 30px',
  },
});

class Contenido extends Component {
  render() {
    return (
      <div>
        <div id="contenido" >
          {routes.map((ruta, index) => (
            <Route key={index} path={ruta.path} exact={ruta.exact} component={ruta.component} />
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Contenido);
