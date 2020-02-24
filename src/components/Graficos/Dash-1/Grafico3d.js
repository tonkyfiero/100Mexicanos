import React, { Component, createRef, useState, useRef, useEffect, useCallback } from 'react';
import Plot from 'react-plotly.js';

import Spinner from '../Dash-1/Spinner';

class Grafico3D extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.setState({
      alto: this.props.alto,
      ancho: this.props.ancho,
    });
  }

  render() {
    const { alto, ancho, expand, loading } = this.props;
    return loading ? (
      <Spinner alto={alto} ancho={ancho} />
    ) : (
      <div>
        <Plot
          data={[
            {
              x: [...this.props.data.Real.x],
              y: [...this.props.data.Real.y],
              z: [...this.props.data.Real.z],
              type: 'scatter3d',
              mode: 'lines',
              name: 'Real',
              line: { width: 5, color: 'rgb(75, 142, 8)' },
              hovertemplate:'<i>TVD</i>:%{z}' + '<br><i>NS</i>: %{x}' + '<br><i>EW</i>: %{y}'
            },
            {
              x: [...this.props.data.Prog.x],
              y: [...this.props.data.Prog.y],
              z: [...this.props.data.Prog.z],
              type: 'scatter3d',
              mode: 'lines',
              name: 'Programa',
              line: { width: 5, color: 'rgb(17, 53, 199)' },
              hovertemplate:'<i>TVD</i>:%{z}' + '<br><i>NS</i>: %{x}' + '<br><i>EW</i>: %{y}'
            },
          ]}
          layout={{
            showlegend: false,            
            height: alto - alto * 0.1,
            width: ancho - ancho * 0.02,
            margin: {
              l: 10,
              r: 10,
              b: 10,
              t: 10,
            },
            scene: {
              camera: {
                eye: {
                  x: -1.0,
                  y: -1.0,
                  z: -1.0,
                },
                center: {
                  x: 0.0,
                  y: 0.0,
                  z: 0.0,
                },
                up: {
                  x: 0.0,
                  y: 0.0,
                  z: 1.0,
                },
              },
              xaxis: {
                title: '<== Este / Oeste ==>',
                range: [-1000, 1000],
                tickmode: 'auto',
                nticks: 20,
              },
              yaxis: {
                title: '<== Nor / Sur==>',
                range: [-1000, 1000],
                nticks: 20,
              },
              zaxis: {
                title: '<== TVD ==>',
                range: [2000, 0],
                tickmode: 'auto',
                nticks: 20,
              },
            },
          }}
        />
      </div>
    );
  }
}

export default Grafico3D;
