import React, { useState } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar'

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
  },  
  heighFull:{
    height:'100%'
  }
});

const Sidebar = () => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="sidebar" className={classes.root}>
      <PerfectScrollbar className={classes.heighFull} options={{suppressScrollX:true}}>
        <SidebarProfile />      
        <SidebarNav />
      </PerfectScrollbar>      
    </div>
  );
};

export default Sidebar;
