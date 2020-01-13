import React, { Component, useState } from 'react';
import clsx from 'clsx';

import { Link, Route, withRouter } from 'react-router-dom';

import { withStyles, makeStyles, createStyles } from '@material-ui/core/styles';
import {} from '@material-ui/core/';

const useStyles = makeStyles({
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
  nav_Submenu: {
    listStyle: 'none',
    padding: '5px 0 10px 39px',
    margin: '0',
    position: 'relative',
    '&>li>a': {
      padding: '3px 20px 3px 15px',
      display: 'block',
      textDecoration: 'none',
      position: 'relative',
      color: '#ffffff73',
    },
    '&>li>a:after': {
      content: '""',
      position: 'absolute',
      left: '-11px',
      width: '11px',
      height: '2px',
      top: '11px',
      background: '#242b30',
    },
    '&>li': {
      position: 'relative',
    },
    '&>li:after': {
      content: '""',
      position: 'absolute',
      left: '0',
      width: '6px',
      height: '6px',
      border: '1px solid #ffffff99',
      top: '11px',
      marginTop: '-2px',
      zIndex: '10',
      background: '#2d353c',
      borderRadius: '4px',
    },
    '&>li:before': {
      content: '""',
      position: 'absolute',
      left: '-13px',
      bottom: '0',
      top: '0',
      width: '2px',
      background: '#242b30',
    },
    '&>li:first-child:before': {
      top: '-14px',
    },
    '&>li:last-child:before': {
      bottom: 'auto',
      height: '13px',
    },
  },
  nav_Submenu_Close: {
    display: 'none',
  },
  activo: {
    '&>a>span': {
      color: '#fff',
    },
  },
});

const SidebarList = ({ data,expand }) => {
  const classes = useStyles();

  const [active, setActive] = useState(-1);
  const [clicked, setClicked] = useState(-1);

  const handleExpand = (e, i, match) => {
    e.preventDefault();

    setActive(active === i ? -1 : i);
    clicked(1);
  };

  var icon = data.icon && <i className={data.icon}></i>;
  var img = data.img && (
    <div className="icon-img">
      <img src={data.img} alt="" />
    </div>
  );
  var caret = data.children && !data.badge && <span className={clsx(classes.caret, 'fas fa-chevron-right', 'flecha')}></span>;
  var label = data.label && <span className="label label-theme m-l-5">{data.label}</span>;
  var badge = data.badge && <span className="badge pull-right">{data.badge}</span>;
  var title = data.title && (
    <span>
      {data.title} {label}
    </span>
  );

  return (
    <Route
      path={data.path}
      exact={data.exact}
      children={({ match }) => (
        <li className={clsx(match && classes.activo)} >
          {data.children ? (
            <Link to={data.path} onClick={expand}>
              {caret} {badge} {img} {icon} {title}
            </Link>
          ) : (
            <Link to={data.path}>
              {caret} {img} {icon} {badge} {title}
            </Link>
          )}
          {data.children && (
            <ul className={classes.nav_Submenu}>
              {data.children && data.children.map((submenu, i) => <SidebarList data={submenu} key={i} expand={(e) => handleExpand(e, i, match)} active={i === active} clicked={clicked} />)}
            </ul>
          )}
        </li>
      )}
    />
  );
};

export default SidebarList;
