import React, { Component, useState } from 'react';
import menus from './menuSide';
import { Route } from 'react-router-dom';

import SidebarList from './sidebar-list';

import { withStyles } from '@material-ui/core/styles';

const useStyles = {
  nav_Menu: {
    display: 'block',
    flexWrap: 'wrap',
    paddingLeft: '0',
    marginBottom: '0',
    listStyle: 'none',
    transition: 'all .2s linear',
    '& >li': {
      position: 'relative',
    },
    '& li>a:hover': {
      color: '#fff',
      cursor: 'pointer',
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
    '& li.expand>a .flecha': {
      transform: 'rotate(90deg)',
    },
  },
  nav_Menu_header: {
    margin: '0',
    padding: '15px 20px 3px',
    lineHeight: '20px',
    fontSize: '14px',
    color: '#ffffff73',
    fontWeight: '600',
  },
};

class SidebarNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activo: -1,
      clicked: -1,
    };
  }

  handleExpand = (e, i, match) => {
    // alert('handle padre')
    e.preventDefault();

    if (this.state.clicked === -1 && match) {
      this.setState((state) => ({
        activo: -1,
        clicked: 1,
      }));
    } else {
      this.setState((state) => ({
        activo: this.state.activo === i ? -1 : i,
        clicked: 1,
      }));
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <ul className={classes.nav_Menu}>
        <li className={classes.nav_Menu_header}>Perforacion</li>
        {menus.map((menu, i) => (
          <Route
            path={menu.path}
            exact={menu.exact}
            key={i}
            children={({ match }) => <SidebarList data={menu} key={i} expand={(e) => this.handleExpand(e, i, match)} active={i === this.state.activo} clicked={this.state.clicked} />}
          />
        ))}
      </ul>
    );
  }
}

export default withStyles(useStyles)(SidebarNav);
