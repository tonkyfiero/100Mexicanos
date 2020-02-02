import React, { Fragment, useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

///import configuracion base del grafico
import { config_tres } from '../ConfigCharts';

const Tres = ({ data }) => {
  const [config, setConfig] = useState(config_tres);

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
    <div className="container-fluid h-100">
      <div className="row">
        <div className="col-xl-4 pr-xl-0 ">
          <HighchartsReact
            highcharts={Highcharts}
            options={config}
            
          
          />
        </div>
        <div className="col-xl-4 px-xl-0  ">
          <HighchartsReact
            highcharts={Highcharts}
            options={config}
            
            
          />
        </div>
        <div className="col-xl-4 pl-xl-0">
          <HighchartsReact
            highcharts={Highcharts}
            options={config}
            
            
          />
        </div>
      </div>
    </div>
  );
};

export default Tres;
