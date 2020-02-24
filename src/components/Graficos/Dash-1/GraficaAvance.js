import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

import Spinner from '../Dash-1/Spinner';

///import configuracion base del grafico
import { ejeCruzado } from '../ConfigCharts';

const GraficaAvance = ({ data, loading, alto, ancho }) => {
  return loading ? (
    <Spinner alto={alto} ancho={ancho} />
  ) : (
    <div>
      <Plot
        data={[
          {
            x: [...data.Prog.x],
            y: [...data.Prog.y],
            mode: 'lines',
            type: 'scatter',
            name: 'Programa',
            line: {
              color: 'rgb(17, 53, 199)',
              width: 2,
            },
          },
          {
            x: [...data.Real.x],
            y: [...data.Real.y],
            mode: 'lines',
            type: 'scatter',
            name: 'Real',
            line: {
              color: 'rgb(0, 0, 0)',
              width: 2,
            },
          },
          {
            x: [...data.Limpio.x],
            y: [...data.Limpio.y],
            mode: 'lines',
            type: 'scatter',
            name: 'Limpio',
            line: {
              color: 'rgb(0, 255, 0)',
              width: 2,
            },
          },
        ]}
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
            t: alto * 0.1,
          },
          yaxis: {
            autorange: 'reversed',
            title: 'TVD',
          },
          xaxis: {
            side: 'top',
            ticks: 'inside',
            title: 'Desplazamiento',
          },
        }}
      />
    </div>
  );
};

export default GraficaAvance;
