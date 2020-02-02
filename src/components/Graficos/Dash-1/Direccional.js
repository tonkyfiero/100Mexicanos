import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// (function (H) {
//     H.wrap(H.Axis.prototype, 'render', function (proceed) {
//         var chart = this.chart,
//             otherAxis;

//         if (typeof this.options.crossing === 'number') {
//             otherAxis = chart[this.isXAxis ? 'yAxis' : 'xAxis'][0];
// 			this.offset = otherAxis.toPixels(this.options.crossing, true);
//             chart.axisOffset[this.side] = 10;
//         }
//         console.log(new Date())
//         proceed.call(this);

//     });

// }(Highcharts));

///import configuracion base del grafico
import { desplazamiento } from '../ConfigCharts';

const Rumbo = ({ data }) => {
  const [config, setConfig] = useState(desplazamiento);

  useEffect(() => {
    if (data.length > 0) {
      configurarGrafico();
    }
  }, [data]);

  const configurarGrafico = () => {
    let aux = { ...config };
    aux.series.push({ name: 'Nuevo', data: [...data] });

    setConfig(aux);
  };

  return (
    <div style={{height:'100%',width:'100%'}}>
      <HighchartsReact highcharts={Highcharts} options={config}  />
    </div>
  );
};

export default Rumbo;
