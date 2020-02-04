import React,{useEffect} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


///import configuracion base del grafico
import { barDefault } from '../ConfigCharts'

const PruebaChart = ({ configuracion,alto,ancho }) => {

useEffect(() => {
  console.log(Highcharts.charts)
})


  return (
    <div >
      <HighchartsReact          
        highcharts={Highcharts}
        options={barDefault}      
        
      />   
    </div>
    
  );
};

export default PruebaChart;