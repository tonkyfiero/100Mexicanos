import React, { Component } from 'react';
import clsx from 'clsx'

import Select from 'react-select';

//MU
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


import BootstrapInput from '../shared/InputBoostrap';
import { Container } from '@material-ui/core';

const useStyles = {
  root: {
    flexGrow: 1,
  },
  ordenZ:{
    zIndex:5
  }, 
  tableWrapper: {
    maxHeight: 407,
    overflow: 'auto',
  },
  margenTop:{
    marginTop:10 
  },
  borde: {
    border: '1px solid red',
  },
  tabla:{
    color:'green',
    '& th':{
      fontSize:16,
      backgroundColor:'blue',
      color:'white'
    }    
  }
};

const cias = [{ value: 1, label: 'Schlumberger' }, { value: 2, label: 'Weatherford' }, { value: 3, label: 'PEMEX' }, { value: 4, label: 'Zapata' }, { value: 5, label: 'Latina' }];

const contratos = [{ value: 1, label: 'ATG III' }, { value: 2, label: 'ATG IV' }, { value: 3, label: 'ATG V' }];

const rows = [
  createData(710, 'Schlumberger', 'Contrato I', 1000),
  createData(710, 'Schlumberger', 'Contrato I', 1000),
  createData(710, 'Schlumberger', 'Contrato I', 1000),
  createData(710, 'Schlumberger', 'Contrato I', 1000),
  createData(710, 'Schlumberger', 'Contrato I', 1000),
  createData(710, 'Schlumberger', 'Contrato I', 1000),
];

function createData(equipo, cia, contrato, hp) {
  return { equipo, cia, contrato, hp };
}

class Equipos extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={clsx(classes.root)}>
        <Grid item xs={12} className={clsx(classes.margenTop,classes.ordenZ)}>
          <Paper>
            <Grid container spacing={2}>
              <Grid container item xs={3} md={3} justify="center" alignItems="center">
                <BootstrapInput />
              </Grid>
              <Grid item xs={3} md={3}>
                <Select options={cias} id="selectCias" placeholder="Compañia" className={classes.ordenZ} />
              </Grid>
              <Grid item xs={3} md={3}>
                <Select options={contratos} id="selectContratos" placeholder="Contrato" className={classes.ordenZ}  />
              </Grid>
              <Grid container item xs={3} md={3} justify="center" alignItems="center">
                <Button type="submit" variant="contained" color="primary">
                  Agregar Equipo
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} className={clsx(classes.margenTop)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper className={classes.root}>
                <div className={classes.tableWrapper}>
                  <Table stickyHeader className={classes.tabla}>
                    <TableHead >
                      <TableRow>
                        <TableCell >Equipo</TableCell>
                        <TableCell >Compañia</TableCell>
                        <TableCell >Contrato</TableCell>
                        <TableCell >HP</TableCell>
                        <TableCell ></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => {
                        return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                            <TableCell>{row.equipo}</TableCell>
                            <TableCell>{row.cia}</TableCell>
                            <TableCell>{row.contrato}</TableCell>
                            <TableCell>{row.hp}</TableCell>
                            <TableCell align="center">
                              <IconButton className={classes.button} aria-label="delete">
                                <DeleteIcon />
                              </IconButton>
                              <IconButton className={classes.button} aria-label="delete">
                                <PhotoCamera />
                              </IconButton>
                              <IconButton className={classes.button} aria-label="delete">
                                <AddShoppingCartIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(Equipos);
