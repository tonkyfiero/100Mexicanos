import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
require('highcharts/modules/annotations')(Highcharts);

(function(H) {
  H.wrap(H.Axis.prototype, 'render', function(proceed) {
    var chart = this.chart,
      otherAxis;

    if (typeof this.options.crossing === 'number') {
      otherAxis = chart[this.isXAxis ? 'yAxis' : 'xAxis'][0];
      this.offset = otherAxis.toPixels(this.options.crossing, true);
      chart.axisOffset[this.side] = 10;
    }
    proceed.call(this);
  });
})(Highcharts);

///import configuracion base del grafico
import { ejeCruzado } from '../ConfigCharts';

const Rumbo = ({ data, message }) => {
  const [config, setConfig] = useState(ejeCruzado);

  useEffect(() => {
    if (data.Prog.length > 0) {
      configurarGrafico();
    }
  }, [data]);

  const configurarGrafico = () => {
    let aux = { ...config };
    aux.series.push({ name: 'Real', data: [...data.Real] });
    aux.series.push({ name: 'Prog', data: [...data.Prog] });

    setConfig(aux);
  };

  return (
    <div className="chartjs-size-monitor">
      {`datos ${message}`}
      <HighchartsReact
        highcharts={Highcharts}
        options={config}
        containerProps={{ style: { height: '100%', width: '100%' } }}
      />
    </div>
  );
};

export default Rumbo;
