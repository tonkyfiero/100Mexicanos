import React, { Fragment, useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

///import configuracion base del grafico
import { config_tres } from '../ConfigCharts';

const Tres = ({ data }) => {
  const [config, setConfig] = useState({ dl: {}, angulo: {}, az: {} });

  useEffect(() => {
    if (data.dl.Prog.length > 0) {
      configurarGrafico();
    }
  }, [data]);

  const configurarGrafico = () => {
    let dl = JSON.parse(JSON.stringify(config_tres));
    let angulo = JSON.parse(JSON.stringify(config_tres));
    let az = JSON.parse(JSON.stringify(config_tres));

    // rumbo:{ Prog:[],Real:[]},
    // direccional: { Prog:[],Real:[]},
    // data_tres: { angulo: { Prog:[],Real:[]}, az: { Prog:[],Real:[]}, dl: { Prog:[],Real:[]} },

    dl.series.push({ name: 'Real', data: [...data.dl.Real] });   
    dl.series.push({ name: 'Prog', data: [...data.dl.Prog] });    
    const dlMax_X = Math.max.apply(Math,data.dl.Real.map(o => o.x))
    const dlMax_Y = Math.max.apply(Math,data.dl.Real.map(o => o.y))
    dl.xAxis.max=dlMax_X+1
    dl.yAxis.max=dlMax_Y+50
    dl.xAxis.title.text='DL'


    angulo.series.push({ name: 'Real', data: [...data.angulo.Real] });
    angulo.series.push({ name: 'Prog', data: [...data.angulo.Prog] });
    const anguloMax_X = Math.max.apply(Math,data.angulo.Real.map(o => o.x))
    const anguloMax_Y = Math.max.apply(Math,data.angulo.Real.map(o => o.y))
    angulo.xAxis.max=anguloMax_X+1
    angulo.yAxis.max=anguloMax_Y+50
    angulo.xAxis.title.text='Angulo'



    az.series.push({ name: 'Real', data: [...data.az.Real] });
    az.series.push({ name: 'Prog', data: [...data.az.Prog] });
    const azMax_X = Math.max.apply(Math,data.az.Real.map(o => o.x))
    const azMax_Y = Math.max.apply(Math,data.az.Real.map(o => o.y))
    az.xAxis.max= 100 * Math.ceil(azMax_X / 100) 
    az.yAxis.max= 100 * Math.ceil(azMax_Y / 100) 
    az.xAxis.tickInterval=100
    az.xAxis.minorTickInterval= 50,
    az.xAxis.title.text='Azimuth'

    setConfig({ dl, angulo, az });
  };

  return (
    <div className="container-fluid h-100">
      <div className="row">
        <div className="col-xl-4 pr-xl-0 ">
          <HighchartsReact highcharts={Highcharts} options={config.dl} />
        </div>
        <div className="col-xl-4 px-xl-0  ">
          <HighchartsReact highcharts={Highcharts} options={config.angulo} />
        </div>
        <div className="col-xl-4 pl-xl-0">
          <HighchartsReact highcharts={Highcharts} options={config.az} />
        </div>
      </div>
    </div>
  );
};

export default Tres;
