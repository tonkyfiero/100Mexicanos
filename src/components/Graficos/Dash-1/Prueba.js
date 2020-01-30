import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


///import configuracion base del grafico
import { barDefault } from '../ConfigCharts'

const PruebaChart = ({ configuracion }) => {

  return (
    <HighchartsReact      
      highcharts={Highcharts}
      options={barDefault}
      updateArgs={[true, true, true]}
      containerProps={{ style: { height: '100%', width: '100%' } }}
    />
  );
};

export default PruebaChart;