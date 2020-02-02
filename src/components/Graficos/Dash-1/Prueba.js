import React,{useEffect} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


///import configuracion base del grafico
import { barDefault } from '../ConfigCharts'

const PruebaChart = ({ configuracion,alto,ancho }) => {

 


  return (
    <div style={{width:'100%',height:'100%',}} >
      <HighchartsReact          
        highcharts={Highcharts}
        options={barDefault}        
      />
    </div>
  );
};

export default PruebaChart;