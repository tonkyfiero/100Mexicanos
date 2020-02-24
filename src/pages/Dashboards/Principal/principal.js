import React, { Fragment, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { SizeMe } from 'react-sizeme';

///import contexto
import { PageSettings } from '../../../config/page-settings';

//componentes development
import { Panel, PanelBody, PanelFooter, PanelHeader } from '../../../components/panel/panel';
import PruebaChart from '../../../components/Graficos/Dash-1/Prueba';
import Rumbo from '../../../components/Graficos/Dash-1/Rumbo';
import Direccional from '../../../components/Graficos/Dash-1/Direccional';
import Tres from '../../../components/Graficos/Dash-1/Tres';
import Grafico3D from '../../../components/Graficos/Dash-1/Grafico3d';
import Pie from '../../../components/Graficos/Dash-1/Pie';
import GraficaAvance from '../../../components/Graficos/Dash-1/GraficaAvance';

//import css
import './principal.css';

const Principal = () => {
  const [sizeScreen, setSizeScreen] = useState({ width: window.innerWidth, height: window.innerHeight });
  const { idPozoDireccional } = useContext(PageSettings);

  const [data, setData] = useState({    
    rumbo: { Prog: { x: [], y: [] }, Real: { x: [], y: [] } },
    direccional: { Prog: { x: [], y: [] }, Real: { x: [], y: [] } },
    graficaAvance: { Prog: { x: [], y: [] }, Real: { x: [], y: [] }, Limpio: { x: [], y: [] } },
    data_tres: {
      angulo: { Prog: { x: [], y: [] }, Real: { x: [], y: [] } },
      az: { Prog: { x: [], y: [] }, Real: { x: [], y: [] } },
      dl: { Prog: { x: [], y: [] }, Real: { x: [], y: [] } },
    },
    grafica3D: { Prog: { x: [], y: [], z: [] }, Real: { x: [], y: [], z: [] } },
    loading: true,
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
   
    if (idPozoDireccional> 0) {
      axios
        .get('https://localhost:44392/api/dashboard', {
          params: {
            idPozo:idPozoDireccional,
          },
        })
        .then((res) => {
          console.log(res);
          generarDataSeries(res.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }else{
      setData({
        ...data,
        loading: true,
      });
    }
  }, [idPozoDireccional]);

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
    let rumbo = { Prog: { x: [], y: [] }, Real: { x: [], y: [] } };
    let direccional = { Prog: { x: [], y: [] }, Real: { x: [], y: [] } };
    let data_tres = {
      angulo: { Prog: { x: [], y: [] }, Real: { x: [], y: [] } },
      az: { Prog: { x: [], y: [] }, Real: { x: [], y: [] } },
      dl: { Prog: { x: [], y: [] }, Real: { x: [], y: [] } },
    };

    let graficaAvance = { Prog: { x: [], y: [] }, Real: { x: [], y: [] }, Limpio: { x: [], y: [] } };
    let grafica3D = { Prog: { x: [], y: [], z: [] }, Real: { x: [], y: [], z: [] } };

    let auxTiempoLimpio = 0;

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
      //-----------------------------------------------------

      grafica3D.Prog.z.push(parseFloat(element.TVD));
      grafica3D.Prog.x.push(parseFloat(element.NS));
      grafica3D.Prog.y.push(parseFloat(element.EW));
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

      //------------------------------------------------------------

      grafica3D.Real.z.push(parseFloat(element.TVD));
      grafica3D.Real.x.push(parseFloat(element.NS));
      grafica3D.Real.y.push(parseFloat(element.EW));
    });

    resData.OperacionesPro.forEach((element, i) => {
      graficaAvance.Prog.x.push(parseFloat(element.tiempoAcum));
      graficaAvance.Prog.y.push(parseFloat(element.profundidad));
    });

    resData.OperacionesReales.forEach((element, i) => {
      graficaAvance.Real.x.push(parseFloat(element.tiempoAcum));
      graficaAvance.Real.y.push(parseFloat(element.profundidad));

      if (element.npt == 1) {
        auxTiempoLimpio = auxTiempoLimpio + parseFloat(element.tiempo);
        graficaAvance.Limpio.x.push(parseFloat(auxTiempoLimpio));
        graficaAvance.Limpio.y.push(parseFloat(element.profundidad));
      }
    });

    setData({ rumbo, direccional, data_tres, graficaAvance, grafica3D, loading: false });
  };

  return (
    <Fragment>
      <div style={{ height: sizeScreen.height - 90 }}>
        <div className="row h-100" style={{ marginBottom: '5px', height: sizeScreen.height - 130 }}>
          <div className="col-xl-4 col-sm-12 px-xl-1 py-xl-1 px-md-1 py-md-1">
            <Panel identificador={1} altura={(sizeScreen.height - 90) / 2}>
              <PanelHeader>
                <div>Vista en Planta</div>
              </PanelHeader>
              <PanelBody>
                <Rumbo data={data.rumbo} loading={data.loading} />
              </PanelBody>
            </Panel>
          </div>
          <div className="col-xl-4  px-xl-1 py-xl-1 px-md-1 py-md-1">
            <Panel identificador={2} altura={(sizeScreen.height - 90) / 2}>
              <PanelHeader>
                <div>3D</div>
              </PanelHeader>
              <PanelBody>
                <Grafico3D data={data.grafica3D} loading={data.loading} />
              </PanelBody>
            </Panel>
          </div>
          <div className="col-xl-4  px-xl-1 py-xl-1 px-md-1 py-md-1">
            <Panel identificador={3} altura={(sizeScreen.height - 90) / 2}>
              <PanelHeader>
                <div>Direccional</div>
              </PanelHeader>
              <PanelBody>
                <Direccional data={data.direccional} loading={data.loading} />
              </PanelBody>
            </Panel>
          </div>
          <div className="col-xl-4  px-xl-1 py-xl-1 px-md-1 py-md-1">
            <Panel identificador={4} altura={(sizeScreen.height - 90) / 2}>
              <PanelHeader>
                <div>DL,Angulo,Azimuth</div>
              </PanelHeader>
              <PanelBody>
                <Tres data={data.data_tres} loading={data.loading} />
              </PanelBody>
            </Panel>
          </div>
          <div className="col-xl-4  px-xl-1 py-xl-1 px-md-1 py-md-1">
            <Panel identificador={5} altura={(sizeScreen.height - 90) / 2}>
              <PanelHeader>
                <div>Tiempos Productivos</div>
              </PanelHeader>
              <PanelBody>
                <Pie loading={data.loading} />
              </PanelBody>
            </Panel>
          </div>
          <div className="col-xl-4  px-xl-1 py-xl-1 px-md-1 py-md-1">
            <Panel identificador={6} altura={(sizeScreen.height - 90) / 2}>
              <PanelHeader>
                <div>Grafica de Avance</div>
              </PanelHeader>
              <PanelBody>
                <GraficaAvance data={data.graficaAvance} loading={data.loading} />
              </PanelBody>
            </Panel>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Principal;
