import React, { Fragment, useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { Legend } from 'highcharts';

import Spinner from '../Dash-1/Spinner';

const Tres = ({ data, loading, alto, ancho }) => {
  const [configuracion, setConfiguracion] = useState({
    data: {},
  });

  useEffect(() => {
    calcularConfiguracion(data);
  }, [data]);

  const calcularConfiguracion = (data) => {
    // let max = Math.max(...data.Prog.x, ...data.Prog.y, ...data.Real.x, ...data.Real.y)
    // let min = Math.min(...data.Prog.x, ...data.Prog.y, ...data.Real.x, ...data.Real.y)

    // angulo,az,dl

    ///---Dog Leg data---------------------
    let programaDL = {
      x: [...data.dl.Prog.x],
      y: [...data.dl.Prog.y],
      mode: 'lines',
      type: 'scatter',
      legendgroup: 'Programa',
      name: 'Programa',
      line: {
        color: 'rgb(17, 53, 199)',
        width: 2,
      },
    };
    let realDL = {
      x: [...data.dl.Real.x],
      y: [...data.dl.Real.y],
      mode: 'lines',
      type: 'scatter',
      legendgroup: 'Real',
      name: 'Real',
      line: {
        color: 'rgb(75, 142, 8)',
        width: 2,
      },
    };

    //----------azimunt data------------------------

    let realAz = {
      x: [...data.az.Real.x],
      y: [...data.az.Real.y],
      mode: 'lines',
      type: 'scatter',
      xaxis: 'x2',
      yaxis: 'y',
      legendgroup: 'Real',
      name: 'Real',
      showlegend: false,
      line: {
        color: 'rgb(75, 142, 8)',
        width: 2,
      },
    };

    let programaAz = {
      x: [...data.az.Prog.x],
      y: [...data.az.Prog.y],
      mode: 'lines',
      type: 'scatter',
      xaxis: 'x2',
      yaxis: 'y',
      legendgroup: 'Programa',
      name: 'Programa',
      showlegend: false,
      line: {
        color: 'rgb(17, 53, 199)',
        width: 2,
      },
    };

    //-----data angulo----------------------------------------------
    let realAngulo = {
      x: [...data.angulo.Real.x],
      y: [...data.angulo.Real.y],
      mode: 'lines',
      type: 'scatter',
      xaxis: 'x3',
      yaxis: 'y',
      legendgroup: 'Real',
      name: 'Real',
      showlegend: false,
      line: {
        color: 'rgb(75, 142, 8)',
        width: 2,
      },
    };

    let programaAngulo = {
      x: [...data.angulo.Prog.x],
      y: [...data.angulo.Prog.y],
      mode: 'lines',
      type: 'scatter',
      xaxis: 'x3',
      yaxis: 'y',
      legendgroup: 'Programa',
      name: 'Programa',
      showlegend: false,
      line: {
        color: 'rgb(17, 53, 199)',
        width: 2,
      },
    };

    setConfiguracion({
      data: [programaDL, realDL, programaAngulo, realAngulo, programaAz, realAz],
    });
  };

  return loading ? (
    <Spinner alto={alto} ancho={ancho} />
  ) : (
    <div>
      <Plot
        data={configuracion.data}
        layout={{
          showlegend: true,
          legend: {
            x: 1,
            xanchor: 'right',
            y: 1,
          },
          height: alto - alto * 0.1,
          width: ancho - ancho * 0.02,
          margin: {
            l: ancho * 0.07,
            r: ancho * 0.025,
            b: alto * 0.05,
            t: alto * 0.09,
          },
          yaxis: {
            autorange: 'reversed',
          },
          xaxis: {
            side: 'top',
            ticks: 'inside',
            title: 'DL',
          },
          xaxis2: {
            side: 'top',
            ticks: 'inside',
            title: 'Azimuth',
          },
          xaxis3: {
            side: 'top',
            ticks: 'inside',
            title: 'Angulo',
          },
          grid: {
            columns: 3,
            subplots: [['xy', 'x2y', 'x3y']],
            roworder: 'bottom to top',
          },
        }}
      />
    </div>
  );
};

export default Tres;
