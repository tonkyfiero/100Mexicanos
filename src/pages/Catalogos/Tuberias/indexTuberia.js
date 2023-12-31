import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

//import './equipos.css'

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  titulo: {
    display: 'flex',
  },
});

const IndexMacroperas = () => {
  const classes = useStyles();
  return (
    <div className="row justify-content-md-center">
      <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
        <div className="card">
          <div className={classes.titulo}>
            <h5 className="card-header" style={{ flex: '7' }}>
              Tuberias
            </h5>
            <button className="btn btn-secondary btn-space" style={{ flex: '1' }} type="button">
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped m-b-0">
                <thead>
                  <tr>
                    <th>Diametro(pg)</th>
                    <th>Grado(API)</th>
                    <th>Peso(lb/pie)</th>
                    <th>Conexion</th>
                    <th width="1%"></th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td>16</td>
                    <td>K-55</td>
                    <td>84</td>
                    <td>BCN</td>
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
                    <td>10 3/4</td>
                    <td>J-55</td>
                    <td>65</td>
                    <td>BCN</td>
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
                    <td>9 5/8</td>
                    <td>J-55</td>
                    <td>36</td>
                    <td>BCN</td>
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
                    <td>7 5/8</td>
                    <td>P-110</td>
                    <td>29</td>
                    <td>BCN</td>
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
                    <td>7</td>
                    <td>P-110</td>
                    <td>26</td>
                    <td>BCN</td>
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
                    <td>4 1/2</td>
                    <td>P-110</td>
                    <td>13.5</td>
                    <td>BCN</td>
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
                    <td>4 1/2</td>
                    <td>N-80</td>
                    <td>13.5</td>
                    <td>BCN</td>
                    <td className="with-btn" nowrap="">
                      <a href="#" className="btn btn-primary width-60 ">
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

export default IndexMacroperas;
