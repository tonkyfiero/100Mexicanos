import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

const dataDireccioanl = [
  {
    Prog_Real: 0,
    Prof: 0,
    Angulo: 0,
    Azimuth: 185,
  },
  {
    Prog_Real: 0,
    Prof: 30,
    Angulo: 0,
    Azimuth: 185,
  },
  {
    Prog_Real: 0,
    Prof: 60,
    Angulo: 0,
    Azimuth: 185,
  },
  {
    Prog_Real: 0,
    Prof: 90,
    Angulo: 0,
    Azimuth: 185,
  },
  {
    Prog_Real: 0,
    Prof: 100,
    Angulo: 0,
    Azimuth: 185,
  },
  {
    Prog_Real: 0,
    Prof: 120,
    Angulo: 0,
    Azimuth: 185,
  },
  {
    Prog_Real: 0,
    Prof: 150,
    Angulo: 0,
    Azimuth: 185,
  },
  {
    Prog_Real: 0,
    Prof: 180,
    Angulo: 0,
    Azimuth: 185,
  },
  {
    Prog_Real: 0,
    Prof: 210,
    Angulo: 0,
    Azimuth: 185,
  },
  {
    Prog_Real: 0,
    Prof: 240,
    Angulo: 0,
    Azimuth: 185,
  },
  {
    Prog_Real: 0,
    Prof: 270,
    Angulo: 0,
    Azimuth: 185,
  },
  {
    Prog_Real: 0,
    Prof: 300,
    Angulo: 0,
    Azimuth: 185,
  },
  {
    Prog_Real: 0,
    Prof: 330,
    Angulo: 0,
    Azimuth: 185,
  },
  {
    Prog_Real: 0,
    Prof: 360,
    Angulo: 0,
    Azimuth: 185,
  },
  {
    Prog_Real: 0,
    Prof: 390,
    Angulo: 0,
    Azimuth: 185,
  },
  {
    Prog_Real: 0,
    Prof: 420,
    Angulo: 0,
    Azimuth: 185,
  },
  {
    Prog_Real: 0,
    Prof: 433.84,
    Angulo: 0,
    Azimuth: 185,
  },
  {
    Prog_Real: 0,
    Prof: 450,
    Angulo: 0,
    Azimuth: 185,
  },
  {
    Prog_Real: 0,
    Prof: 480,
    Angulo: 0,
    Azimuth: 185,
  },
  {
    Prog_Real: 0,
    Prof: 500,
    Angulo: 0,
    Azimuth: 185,
  },
  {
    Prog_Real: 0,
    Prof: 510,
    Angulo: 0,
    Azimuth: 185,
  },
  {
    Prog_Real: 0,
    Prof: 540,
    Angulo: 0,
    Azimuth: 185,
  },
  {
    Prog_Real: 0,
    Prof: 570,
    Angulo: 0,
    Azimuth: 185,
  },
  {
    Prog_Real: 0,
    Prof: 600,
    Angulo: 0,
    Azimuth: 185,
  },
  {
    Prog_Real: 0,
    Prof: 630,
    Angulo: 0,
    Azimuth: 185,
  },
];

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  titulo: {
    display: 'flex',
  },
});

const IndexDireccional = () => {
  const classes = useStyles();

  return (
    <div className="row justify-content-md-center">
      <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
        <div className="card">
          <div className={classes.titulo}>
            <h5 className="card-header" style={{ flex: '7' }}>
                Direccional - Coapechaca 4980
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
                    <th>Profunidad</th>
                    <th>Angulo</th>
                    <th>Azimuth</th>
                    <th width="1%"></th>
                  </tr>
                </thead>
                <tbody>
                  {dataDireccioanl.map((x, i) => (
                    <tr>
                      <td>{x.Prof}</td>
                      <td>{x.Angulo}</td>
                      <td>{x.Azimuth}</td>                     
                      <td className="with-btn" nowrap="">
                        <a href="#" className="btn btn-primary width-60 ">
                          <i className="fas fa-edit"></i>
                        </a>
                        <a className="btn btn-primary btn-danger m-r-2">
                          <i className="fas fa-trash" style={{ color: 'white' }}></i>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexDireccional;
