import React, { useEffect, useState,useRef } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'



import { graficaAvance } from '../ConfigCharts'


const GraficaAvance = ({ alto, ancho }) => {

    const [configuracion, setConfiguracion] = useState(graficaAvance)
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

export default GraficaAvance