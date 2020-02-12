import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';


///import configuracion base del grafico


const Rumbo = ({ data, alto, ancho }) => {
  const [configuracion, setConfiguracion] = useState({
    data: {}, config: {
      ejes: {
        xaxis: {
        },
        yaxis: {
        }
      }
    }
  })

  useEffect(() => {
    calcularConfiguracion(data)
  }, [data])

  const calcularConfiguracion = (data) => {
    let max = Math.max(...data.Prog.x, ...data.Prog.y, ...data.Real.x, ...data.Real.y)
    let min = Math.min(...data.Prog.x, ...data.Prog.y, ...data.Real.x, ...data.Real.y)

    let programa = {
      x: [...data.Prog.x],
      y: [...data.Prog.y],
      mode: 'lines',
      type: 'scatter', 
      name:'Programa',
      line: {
        color: 'rgb(17, 53, 199)',
        width: 2
      }
    }

    let real = {
      x: [...data.Real.x],
      y: [...data.Real.y],
      mode: 'lines',
      type: 'scatter',
      name:'Real',
      line: {
        color: 'rgb(75, 142, 8)',
        width: 2
      }
    }



    setConfiguracion({
      data: {
        programa,
        real
      },
      config: {
        ejes: {
          xaxis: {
            range: [(max * -1), max]
          },
          yaxis: {
            range: [(max * -1), max]
          }
        }
      }
    })
  }


  return (
    <div>
      <Plot
        data={[
          configuracion.data.programa,
          configuracion.data.real,

        ]}
        layout={{
          showlegend: false,
          height: alto - (alto * 0.10),
          width: ancho - (ancho * 0.02),
          margin: {
            l: (ancho * 0.07),
            r: (ancho * 0.025),
            b: (alto * 0.10),
            t: (alto * 0.10),
          },

          annotations: [
            {
              x: 2,
              y: 5,
              xref: 'x',
              yref: 'y',
              text: 'max=5',
              showarrow: true,
              font: {
                family: 'Courier New, monospace',
                size: 16,
                color: '#ffffff'
              },
              align: 'center',
              arrowhead: 2,
              arrowsize: 1,
              arrowwidth: 2,
              arrowcolor: '#636363',
              ax: 20,
              ay: -30,
              bordercolor: '#c7c7c7',
              borderwidth: 2,
              borderpad: 4,
              bgcolor: '#ff7f0e',
              opacity: 0.8
            }
          ],
          ...configuracion.config.ejes
        }}
      />
    </div>

  );
};

export default Rumbo;
