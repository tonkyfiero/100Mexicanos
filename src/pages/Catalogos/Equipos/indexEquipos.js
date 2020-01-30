import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles'

import './equipos.css'

const useStyles = makeStyles({
    root:{
        display:'flex'
    },
    titulo:{
        display:'flex'
    }

})


const IndexEquipos = () => {
    const classes  = useStyles()
  return (
    <div className="row justify-content-md-center">
    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
      <div className="card">
        <div className={classes.titulo}>
          <h5 className="card-header" style={{flex:'7'}}>Equipos</h5>
          <button className="btn btn-secondary btn-space"  style={{flex:'1'}} type="button">
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped m-b-0">
              <thead>
                <tr>
                  <th>Equipo</th>
                  <th>Hp</th>
                  <th>Operaciones</th>
                  <th>Estatus</th>
                  <th width="1%"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>WTF-598</td>
                  <td>1,500</td>
                  <td>Perforacion,Terminacion</td>
                  <td>Activo</td>
                  <td className="with-btn" nowrap="">
                    <a href="#" className="btn btn-primary width-60 ">
                      <i className="fas fa-edit"></i>
                    </a>
                    <a className="btn btn-primary btn-danger m-r-2">
                      <i className="fas fa-trash" style={{ color: 'white' }}></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>WTF-598</td>
                  <td>1,500</td>
                  <td>Perforacion,Terminacion</td>
                  <td>Activo</td>
                  <td className="with-btn" nowrap="">
                    <a href="#" className="btn btn-primary width-60">
                      <i className="fas fa-edit"></i>
                    </a>
                    <a className="btn btn-primary btn-danger m-r-2">
                      <i className="fas fa-trash" style={{ color: 'white' }}></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>WTF-598</td>
                  <td>1,500</td>
                  <td>Perforacion,Terminacion</td>
                  <td>Activo</td>
                  <td className="with-btn" nowrap="">
                    <a href="#" className="btn btn-primary width-60">
                      <i className="fas fa-edit"></i>
                    </a>
                    <a className="btn btn-primary btn-danger m-r-2">
                      <i className="fas fa-trash" style={{ color: 'white' }}></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>WTF-598</td>
                  <td>1,500</td>
                  <td>Perforacion,Terminacion</td>
                  <td>Activo</td>
                  <td className="with-btn" nowrap="">
                    <a href="#" className="btn btn-primary width-60">
                      <i className="fas fa-edit"></i>
                    </a>
                    <a className="btn btn-primary btn-danger m-r-2">
                      <i className="fas fa-trash" style={{ color: 'white' }}></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>WTF-598</td>
                  <td>1,500</td>
                  <td>Perforacion,Terminacion</td>
                  <td>Activo</td>
                  <td className="with-btn" nowrap="">
                    <a href="#" className="btn btn-primary width-60">
                      <i className="fas fa-edit"></i>
                    </a>
                    <a className="btn btn-primary btn-danger m-r-2">
                      <i className="fas fa-trash" style={{ color: 'white' }}></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>WTF-598</td>
                  <td>1,500</td>
                  <td>Perforacion,Terminacion</td>
                  <td>Activo</td>
                  <td className="with-btn" nowrap="">
                    <a href="#" className="btn btn-primary width-60">
                      <i className="fas fa-edit"></i>
                    </a>
                    <a className="btn btn-primary btn-danger m-r-2">
                      <i className="fas fa-trash" style={{ color: 'white' }}></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>WTF-598</td>
                  <td>1,500</td>
                  <td>Perforacion,Terminacion</td>
                  <td>Activo</td>
                  <td className="with-btn" nowrap="">
                    <a href="#" className="btn btn-primary width-60">
                      <i className="fas fa-edit"></i>
                    </a>
                    <a className="btn btn-primary btn-danger m-r-2">
                      <i className="fas fa-trash" style={{ color: 'white' }}></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default IndexEquipos;
