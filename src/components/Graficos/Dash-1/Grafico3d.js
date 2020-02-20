import React, { Component, createRef, useState, useRef, useEffect, useCallback } from 'react';
import Plot from 'react-plotly.js';

class Grafico3D extends Component {
  constructor(props) {
    super(props);
    this.state={}
  }

  componentWillMount(){
    this.setState({
      alto:this.props.alto,
      ancho:this.props.ancho
    })
  }  

  render() {
    const { alto, ancho, expand } = this.props;    
    return (
      <div>
        <Plot
          data={[
            {
              x: [
                ...this.props.data.Real.x
              ],
              y: [...this.props.data.Real.y],
              z: [...this.props.data.Real.z],
              type: 'scatter3d',
              mode: 'lines',
              line: { width: 5 },
            },
            {
              x: [
                ...this.props.data.Prog.x
              ],
              y: [...this.props.data.Prog.y],
              z: [...this.props.data.Prog.z],
              type: 'scatter3d',
              mode: 'lines',
              line: { width: 5 },
            },
          ]}
          layout={{
            showlegend: false,
            height: alto - (alto*0.10),
            width: ancho - (ancho*0.02),
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
