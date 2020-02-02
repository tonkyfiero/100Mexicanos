import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

//componentes development
import { Panel, PanelBody, PanelFooter, PanelHeader } from '../../../components/panel/panel';
import PruebaChart from '../../../components/Graficos/Dash-1/Prueba';
import Rumbo from '../../../components/Graficos/Dash-1/Rumbo';
import Direccional from '../../../components/Graficos/Dash-1/Direccional';
import Tres from '../../../components/Graficos/Dash-1/Tres';

//import css
import './principal.css';

const Principal = () => {
  const [sizeScreen, setSizeScreen] = useState({ width: window.innerWidth, height: window.innerHeight });

  const [data, setData] = useState({
    rumbo: [],
    direccional: [],
    data_tres: { angulo: [], az: [], dl: [] },
  });

  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    console.log('agregando listener');
    
    return () => {
      window.removeEventListener('resize', updateWidthAndHeight);
      console.log('quitando listener');
    };
  });

  useEffect(() => {
    axios
      .get('https://localhost:44392/api/dashboard', {
        params: {
          idPozo: 7,
        },
      })
      .then((res) => {
        console.log(res);
        generarDataSeries(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const updateWidthAndHeight = () => {
    setSizeScreen({ width: window.innerWidth, height: window.innerHeight });    
    //setHeight(window.innerHeight);
    medidas();
  };

  const medidas = () => {
    console.log('heigh:{0}', sizeScreen.height);
    console.log('width:{0}', sizeScreen.width);
  };

  const generarDataSeries = (resData) => {
    let rumbo = [];
    let direccional = [];
    let data_tres = {
      angulo: [],
      az: [],
      dl: [],
    };

    resData.Programa.forEach((element, i) => {
      //rumbo.push({x:parseFloat(element.EW),y:parseFloat(element.NS),name:i})
      rumbo.push([parseFloat(element.EW), parseFloat(element.NS)]);
      direccional.push({ x: parseFloat(element.SumSVert), y: parseFloat(element.TVD) });
      data_tres.angulo.push({ x: parseFloat(element.Angulo), y: parseFloat(element.ProfMD) });
      data_tres.az.push({ x: parseFloat(element.Azimuth), y: parseFloat(element.ProfMD) });
      data_tres.dl.push({ x: parseFloat(element.DL), y: parseFloat(element.ProfMD) });
    });

    setData({ rumbo, direccional, data_tres });
  };

  return (
    <Fragment>
      <div style={{ height: sizeScreen.height - 90 }}>
        <div className="row" style={{ marginBottom: '5px', height: sizeScreen.height - 80 }}>
          <div className="col-xl-4 h-50 col-sm-12 px-xl-1 py-xl-1 px-md-1 py-md-1">
            <Panel>
              <PanelHeader>
                <div>Vista en Planta</div>
              </PanelHeader>
              <PanelBody >
                {data.rumbo.length > 0 ? <Rumbo data={data.rumbo} /> : <span>cargando</span>}
                
                </PanelBody>
            </Panel>
          </div>
          <div className="col-xl-4 h-50 col-sm-12 px-xl-1 py-xl-1 px-md-1 py-md-1">
            <Panel>
              <PanelHeader>
                <div>3D</div>
              </PanelHeader>
              <PanelBody >
                {data.data_tres.dl.length > 0 ? <Tres data={data.data_tres.dl} /> : <span>Cargando</span>}
              </PanelBody>
            </Panel>
          </div>
          <div className="col-xl-4 h-50 col-sm-12 px-xl-1 py-xl-1 px-md-1 py-md-1">
            <Panel>
              <PanelHeader>
                <div>Direccional</div>
              </PanelHeader>
              <PanelBody>
                <PanelBody>
                  {data.direccional.length > 0 ? <Direccional data={data.direccional} /> : <span>cargando</span>}
                </PanelBody>
              </PanelBody>
            </Panel>
          </div>

          <div className="col-xl-4 h-50 col-sm-12 px-xl-1 py-xl-1 px-md-1 py-md-1">
            <Panel>
              <PanelHeader>
                <div>Tiempo vs Prof</div>
              </PanelHeader>
              <PanelBody>
                <PruebaChart />
              </PanelBody>
            </Panel>
          </div>
          <div className="col-xl-4 h-50 col-sm-12 px-xl-1 py-xl-1 px-md-1 py-md-1">
            <Panel>
              <PanelHeader>
                <div>Angulo, Azimut, DL</div>
              </PanelHeader>
              <PanelBody>
                <PruebaChart />
              </PanelBody>
            </Panel>
          </div>
          <div className="col-xl-4 h-50 col-sm-12 px-xl-1 py-xl-1 px-md-1 py-md-1">
            <Panel>
              <PanelHeader>
                <div>TP y TNP</div>
              </PanelHeader>
              <PanelBody>
                <PruebaChart />
              </PanelBody>
            </Panel>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Principal;

{
  /* <div style={{height:(height-90)}}>
      <div className="row h-50" style={{ marginBottom: '5px' }}>
        <div className="col-xl-4 h-100 px-xl-1">
          <Panel>
            <PanelHeader>
              <div>soy principal</div>
            </PanelHeader>
            <PanelBody>
              <PruebaChart />
            </PanelBody>
          </Panel>
        </div>
        <div className="col-xl-4 h-100 px-xl-1">
          <Panel>
            <PanelHeader>
              <div>soy principal</div>
            </PanelHeader>
            <PanelBody>
              <PruebaChart />
            </PanelBody>
          </Panel>
        </div>
        <div className="col-xl-4 h-100 px-xl-1">
          <Panel>
            <PanelHeader>
              <div>soy principal</div>
            </PanelHeader>
            <PanelBody>
              <PruebaChart />
            </PanelBody>
          </Panel>
        </div>
      </div>
      <div className="row h-50">
        <div className="col-xl-4 h-100 px-xl-1">
          <Panel>
            <PanelHeader>
              <div>soy principal</div>
            </PanelHeader>
            <PanelBody>
              <PruebaChart />
            </PanelBody>
          </Panel>
        </div>
        <div className="col-xl-4 h-100 px-xl-1">
          <Panel>
            <PanelHeader>
              <div>soy principal</div>
            </PanelHeader>
            <PanelBody>
              <PruebaChart />
            </PanelBody>
          </Panel>
        </div>
        <div className="col-xl-4 h-100 px-xl-1">
          <Panel>
            <PanelHeader>
              <div>soy principal</div>
            </PanelHeader>
            <PanelBody>
              <PruebaChart />
            </PanelBody>
          </Panel>
        </div>
      </div>
    </div> */
}
