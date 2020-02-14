import React, { useEffect, useState,useRef } from 'react'
import Highcharts from 'highcharts'
import drilldown from 'highcharts/modules/drilldown.js';
import HighchartsReact from 'highcharts-react-official'

drilldown(Highcharts)

import { pieDrilldownBase } from '../ConfigCharts'


const Pie = ({ alto, ancho }) => {

    const [configuracion, setConfiguracion] = useState(pieDrilldownBase)
    const graficoRef = useRef(null)

    useEffect(() => {
        configurarPie()
    },[alto])

    const configurarPie = () => {
        
        graficoRef.current.chart.setSize(ancho - (ancho * 0.02),alto - (alto * 0.10))
    }

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <HighchartsReact ref={graficoRef} highcharts={Highcharts} options={configuracion} allowChartUpdate={true} />
        </div>

    )
}

export default Pie