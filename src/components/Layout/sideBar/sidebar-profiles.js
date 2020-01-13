import React, { useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';

import Cover from '../../../assets/imagenes/descarga.jfif';
import goku from '../../../assets/imagenes/2-goku.jpeg';
import User from '../../../assets/imagenes/user/user-2.jpg';

const useStyles = makeStyles({
  nav: {
    flexWrap: 'wrap',
    paddingLeft: '0',
    marginBottom: '0',
    listStyle: 'none',
    '&>li>a': {
      padding: '20px',
      lineHeight: '20px',
      display: 'block',
      textDecoration: 'none',
      color: '#ffffff99',
    },
  },
  liProfile: {
    padding: '20px',
    color: '#fff',
    background: '#1a2229',
    overflow: 'hidden',
    position: 'relative',
    '& a': {
      padding: '20px',
      margin: '-20px',
      display: 'block',
      color: '#fff',
      fontWeight: '600',
      lineHeight: '20px',
      textDecoration: 'none',
    },
  },
  nav_Profile_Menu: {
    display: 'block',
    flexWrap: 'wrap',
    paddingLeft: '0',
    marginBottom: '0',
    listStyle: 'none',
    transition: 'all .2s linear',
    '& li>a:hover': {
      color: '#fff',
    },
    '& >li>a': {
      padding: '7px 20px',
      lineHeight: '20px',
      display: 'block',
      textDecoration: 'none',
      color: '#ffffff99',
      '& i': {
        float: 'left',
        marginRight: '10px',
        width: '14px',
        textAlign: 'center',
        lineHeight: '20px',
        fontSize: '14px',
      },
    },
  },
  nav_Profile_Menu_Close: {
    display: 'none',
  },
  div_cover: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundImage: `url(${Cover})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    '&:before': {
      position: 'absolute',
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
      background: 'rgba(26,34,41,.75)',
      content: '""',
    },
  },
  div_imageUser: {
    width: '34px',
    height: '34px',
    marginBottom: '10px',
    overflow: 'hidden',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '30px',
  },
  div_info: {
    fontSize: '14px',
    position: 'relative',
    fontWeight: '600',
  },
  caret: {
    display: 'block',
    width: '20px',
    height: '20px',
    lineHeight: '20px',
    textAlign: 'center',
    fontSize: '11px',
    border: '0',
    fontFamily: '"Font Awesome 5 Free"',
    fontWeight: '900',
    fontStyle: 'normal',
    fontFeatureSettings: 'normal',
    fontVariant: 'normal',
    textRendering: 'auto',
    float: 'right',
    transition: 'all .2s linear',
  },
  expand: {
    transform: 'rotate(90deg)',
  },
});

const SidebarProfile = () => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <ul className={classes.nav}>
      <li className={classes.liProfile}>
        <Link to='/' onClick={() => setIsOpen(!isOpen)}>
          <div className={classes.div_cover}></div>
          <div id="imagen" className={classes.div_imageUser}>
            <img style={{ maxWidth: '100%', maxHeight: '100%' }} src={User} alt="" />
          </div>
          <div id="info" className={classes.div_info}>
            <span className={clsx(classes.caret, 'fas fa-chevron-right', isOpen && classes.expand)}></span>
            Ulises Cruz
            <small style={{ display: 'block', color: '#ffffff99', fontSize: '12px' }}>Ing. de Perforacion</small>
          </div>
        </Link>
      </li>
      <li>
        <ul className={clsx(classes.nav, classes.nav_Profile_Menu, !isOpen && classes.nav_Profile_Menu_Close)}>
          <li>
            <Link to='/' >
              <i className="fa fa-cog"></i>Settings
            </Link>
          </li>
          <li>
            <Link to='/'>
              <i className="fa fa-pencil-alt"></i>Send Feedback
            </Link>
          </li>
          <li>
            <Link to='/'>
              <i className="fa fa-question-circle"></i>Helps
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default SidebarProfile;
