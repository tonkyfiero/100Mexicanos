import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


import { desplazamiento } from '../ConfigCharts';

const Direccional = ({ data }) => {
  const [config, setConfig] = useState(desplazamiento);

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
    <div style={{height:'100%',width:'100%'}}>
      <HighchartsReact highcharts={Highcharts} options={config}  />
    </div>
  );
};

export default Direccional;
