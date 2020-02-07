import React,{useEffect} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


///import configuracion base del grafico
import { barDefault } from '../ConfigCharts'

const PruebaChart = ({ alto,ancho }) => {

useEffect(() => {
  console.log(`alto ${alto}, ancho ${ancho}`)
})


  return (
    <div style={{height:'100%',width:'100%'}}>
      {`alto ${alto}, ancho ${ancho}`}
      <HighchartsReact          
        highcharts={Highcharts}
        options={barDefault}              
      />   
    </div>
    
  );
};

export default PruebaChart;