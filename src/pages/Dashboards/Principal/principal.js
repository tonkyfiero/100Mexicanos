import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { SizeMe } from 'react-sizeme';

//componentes development
import { Panel, PanelBody, PanelFooter, PanelHeader } from '../../../components/panel/panel';
import PruebaChart from '../../../components/Graficos/Dash-1/Prueba';
import Rumbo from '../../../components/Graficos/Dash-1/Rumbo';
import Direccional from '../../../components/Graficos/Dash-1/Direccional';
import Tres from '../../../components/Graficos/Dash-1/Tres';
import Grafico3D from '../../../components/Graficos/Dash-1/Grafico3d';

//import css
import './principal.css';

const Principal = () => {
  const [sizeScreen, setSizeScreen] = useState({ width: window.innerWidth, height: window.innerHeight });

  const [data, setData] = useState({
    rumbo: { Prog: { x: [], y: [] }, Real: { x: [], y: [] } },
    direccional: { Prog: { x: [], y: [] }, Real: { x: [], y: [] } },
    data_tres: { angulo: { Prog: { x: [], y: [] }, Real: { x: [], y: [] } }, az: { Prog: { x: [], y: [] }, Real: { x: [], y: [] } }, dl: { Prog: { x: [], y: [] }, Real: { x: [], y: [] } } },
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
    let rumbo = { Prog: {x:[],y:[]}, Real: {x:[],y:[]} };
    let direccional = { Prog: {x:[],y:[]}, Real: {x:[],y:[]} };
    let data_tres = {
      angulo: { Prog: {x:[],y:[]}, Real: {x:[],y:[]} },
      az: { Prog: {x:[],y:[]}, Real: {x:[],y:[]} },
      dl: { Prog: {x:[],y:[]}, Real: {x:[],y:[]} },
    };

    resData.Programa.forEach((element, i) => {
      

      rumbo.Prog.x.push(parseFloat(element.NS));
      rumbo.Prog.y.push(parseFloat(element.EW));

      direccional.Prog.x.push(parseFloat(element.SumSVert));
      direccional.Prog.y.push(parseFloat(element.TVD));


      // -------------------------
      data_tres.angulo.Prog.x.push(parseFloat(element.Angulo));
      data_tres.angulo.Prog.y.push(parseFloat(element.ProfMD));

      data_tres.az.Prog.x.push(parseFloat(element.Azimuth));
      data_tres.az.Prog.y.push(parseFloat(element.ProfMD));

      data_tres.dl.Prog.x.push(parseFloat(element.DL));
      data_tres.dl.Prog.y.push(parseFloat(element.ProfMD));
    });

    resData.Real.forEach((element, i) => {
      //rumbo.push({x:parseFloat(element.EW),y:parseFloat(element.NS),name:i})
      rumbo.Real.x.push(parseFloat(element.NS));
      rumbo.Real.y.push(parseFloat(element.EW));

      direccional.Real.x.push(parseFloat(element.SumSVert));
      direccional.Real.y.push(parseFloat(element.TVD));

      // --------------------------------------------

      data_tres.angulo.Real.x.push(parseFloat(element.Angulo));
      data_tres.angulo.Real.y.push(parseFloat(element.ProfMD));

      data_tres.az.Real.x.push(parseFloat(element.Azimuth));
      data_tres.az.Real.y.push(parseFloat(element.ProfMD));

      data_tres.dl.Real.x.push(parseFloat(element.DL));
      data_tres.dl.Real.y.push(parseFloat(element.ProfMD));
    });

    setData({ rumbo, direccional, data_tres });
  };

  return (
    <Fragment>
      <div style={{ height: sizeScreen.height - 90 }}>
        <div className="row h-100" style={{ marginBottom: '5px', height: sizeScreen.height - 130 }}>
          <div className="col-xl-4 col-sm-12 px-xl-1 py-xl-1 px-md-1 py-md-1">
            <Panel identificador={1} altura={(sizeScreen.height - 90)/2}>
              <PanelHeader>
                <div>Vista en Planta</div>
              </PanelHeader>
              <PanelBody>
              <Rumbo data={data.rumbo} />
              </PanelBody>
            </Panel>
          </div>
          <div className="col-xl-4  px-xl-1 py-xl-1 px-md-1 py-md-1">
            <Panel identificador={2} altura={(sizeScreen.height - 90)/2}>
              <PanelHeader>
                <div>#D</div>
              </PanelHeader>
              <PanelBody>
              <Grafico3D />
              </PanelBody>
            </Panel>
          </div>
          <div className="col-xl-4  px-xl-1 py-xl-1 px-md-1 py-md-1">
            <Panel identificador={3} altura={(sizeScreen.height - 90)/2}>
              <PanelHeader>
                <div>Direccional</div>
              </PanelHeader>
              <PanelBody>
              <Direccional data={data.direccional} />
              </PanelBody>
            </Panel>
          </div>
          <div className="col-xl-4  px-xl-1 py-xl-1 px-md-1 py-md-1">
            <Panel identificador={4} altura={(sizeScreen.height - 90)/2}>
              <PanelHeader>
                <div>DL,Angulo,Azimuth</div>
              </PanelHeader>
              <PanelBody>
                <Tres data={data.data_tres} />
              </PanelBody>
            </Panel>
          </div>
          <div className="col-xl-4  px-xl-1 py-xl-1 px-md-1 py-md-1">
            <Panel identificador={5} altura={(sizeScreen.height - 90)/2}>
              <PanelHeader>
                <div>Grafica de Avance</div>
              </PanelHeader>
              <PanelBody>

              </PanelBody>
            </Panel>
          </div>
          <div className="col-xl-4  px-xl-1 py-xl-1 px-md-1 py-md-1">
            <Panel identificador={6} altura={(sizeScreen.height - 90)/2}>
              <PanelHeader>
                <div>Tiempos Productivos</div>
              </PanelHeader>
              <PanelBody>

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

{
  /* <div style={{ height: sizeScreen.height - 90 }}>
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
</div> */
}
