import React, { Component } from 'react';
import clsx from 'clsx';

//MU
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
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

const useStyles = {
  root: {
    flexGrow: 1,
  },
  ordenZ: {
    zIndex: 5,
  },
  tableWrapper: {
    maxHeight: 407,
    overflow: 'auto',
  },
  margenTop: {
    marginTop: 10,
  },
  borde: {
    border: '1px solid red',
  },
  tabla: {
    color: 'green',
    '& th': {
      fontSize: 16,
      backgroundColor: 'blue',
      color: 'white',
    },
  },
};

const rows = [createData('4.5', '51.00', 'J-55', 'BCN'), createData('4.5', '51.00', 'J-55', 'BCN'), createData('4.5', '51.00', 'J-55', 'BCN')];

function createData(diametro, peso, grado, conexion) {
  return { diametro, peso, grado, conexion };
}

class Tuberias extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={clsx(classes.root)}>
        <Grid item xs={12} className={clsx(classes.margenTop, classes.ordenZ)}>
          <Paper>
            <Grid container spacing={2}>
              <Grid container item xs={3} md={3} justify="center" alignItems="center">
                <BootstrapInput />
              </Grid>
              <Grid container item xs={3} md={3} justify="center" alignItems="center">
                <BootstrapInput />
              </Grid>
              <Grid container item xs={3} md={3} justify="center" alignItems="center">
                <Input
                  id="adornment-weight"
                  value={values.weight}                  
                  endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                  aria-describedby="weight-helper-text"
                  inputProps={{
                    'aria-label': 'weight',
                  }}
                />
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
                    <TableHead>
                      <TableRow>
                        <TableCell>Diametro</TableCell>
                        <TableCell>Peso</TableCell>
                        <TableCell>Grado</TableCell>
                        <TableCell>Conexion</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => {
                        return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                            <TableCell>{row.diametro}</TableCell>
                            <TableCell>{row.peso}</TableCell>
                            <TableCell>{row.grado}</TableCell>
                            <TableCell>{row.conexion}</TableCell>
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

export default withStyles(useStyles)(Tuberias);
