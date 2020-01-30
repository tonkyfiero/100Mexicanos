import React, { useState } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar'

///contexto de la app
import { PageSettings } from './../../../config/page-settings'

import 'react-perfect-scrollbar/dist/css/styles.css';

///material ui context for style
import { makeStyles } from '@material-ui/core/styles';


//develop components
import SidebarProfile from './sidebar-profiles'
import SidebarNav from './sidebar-nav'


//media import data
import Cover from '../../../assets/imagenes/cover.jpg'
import goku from '../../../assets/imagenes/2-goku.jpeg'
import User from '../../../assets/imagenes/user/user-2.jpg';



const useStyles = makeStyles({
  root: {
    background: '#2d353c',
    position: 'fixed',
    width: '220px',
    top: '0',
    left: '0',
    bottom: '0',
    zIndex: '1010',
    paddingTop: '50px',
    transition: 'all .2s linear'
  },  
  heighFull:{
    height:'100%'
  },
  hideSideBar:{
    left:'-220px'
  }
});

const Sidebar = () => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <PageSettings.Consumer>
      {
        ({viewSidebar}) => (
          <div id="sidebar" className={clsx(classes.root,!viewSidebar && classes.hideSideBar)}>
          <PerfectScrollbar className={classes.heighFull} options={{suppressScrollX:true}}>
            <SidebarProfile />      
            <SidebarNav />
          </PerfectScrollbar>      
        </div>
        )
      }
    </PageSettings.Consumer>
   
  );
};

export default Sidebar;
