import React, { useEffect } from 'react';
import clsx from 'clsx';
import useReactRouter from 'use-react-router';

///import contexto
import { PageSettings } from '../../../config/page-settings';
import { makeStyles } from '@material-ui/core/styles';
import logo_UV from '../../../assets/imagenes/logo_uv.jpg';

//import devComponents

import SelectorPozos from '../../Graficos/Dash-1/SelectorPozo'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#fff',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    marginBottom: '10px',
    padding: '0',
    display: 'flex',
    flex: '1 1',
    zIndex: '1020',
  },
  navLogo: {
    marginRight: '10px',
    // background:'#00acac',
    // borderColor:'transparent rgba(0,0,0,.15) rgba(0,0,0,.3)',
    // borderStyle:'solid',
    // borderWidth:'10px',
    // position:'relative',
    // overflow:'hidden',
    // borderRadius:'4px'
  },
  navHeader: {
    display: 'flex',
    alignItems: 'center',
    width: '500px',
    '& a:hover': {
      cursor: 'pointer',
    },
  },
  linkNavHeader: {
    height: '50px',
    fontWeight: '100',
    fontSize: '18px',
    flex: '1 1',
    alignItems: 'center',
    lineHeight: '30px',
    padding: '10px 20px',
    display: 'flex',
  },
  linkToolBar: {
    flexDirection: 'row',
    display: 'flex',
    marginLeft: 'auto',
    paddingTop: '2px',
    paddingBottom: '2px',
    paddingRight: '10px',
    alignItems: 'center',
  },
});

const Header = ({ props }) => {
  const { history, location, match } = useReactRouter();


  const classes = useStyles();

  return (
    <PageSettings.Consumer>
      {({ handleViewSideBar }) => (
        <div id="header" className={classes.root}>
          <div className={classes.navHeader}>
            <a className={classes.linkNavHeader} onClick={() => handleViewSideBar()}>
              <i className={clsx(classes.navLogo, 'fas fa-bars')}></i>
              <img style={{ maxWidth: '100%', maxHeight: '100%' }} src={logo_UV} alt="" />
              <b style={{ fontWeight: '700' }}>Universidad Veracruzana</b>
            </a>
          </div>
          {
            location.pathname == '/dashboard/principal' ? <div className={classes.linkToolBar}>
              <SelectorPozos />
            </div> : <span></span>
          }

        </div>
      )}
    </PageSettings.Consumer>
  );
};

export default Header
