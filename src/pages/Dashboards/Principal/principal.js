import React, { Fragment } from 'react';

//componentes development
import { Panel, PanelBody, PanelFooter, PanelHeader } from '../../../components/panel/panel';
import PruebaChart from '../../../components/Graficos/Dash-1/Prueba';

//import css
import './principal.css';

const Principal = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    console.log('agregando listener');
    return () => {
      window.removeEventListener('resize', updateWidthAndHeight);
      console.log('quitando listener');
    };
  });

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    medidas();
  };

  const medidas = () => {
    console.log('heigh:{0}', height);
    console.log('width:{0}', width);
  };

  return (
    <Fragment>
      <div style={{ height: height - 90 }}>
        <div className="row" style={{ marginBottom: '5px', height: height - 90  }}>
          <div className="col-xl-4 h-50 col-sm-12 px-xl-1 py-xl-1 px-md-1 py-md-1">
            <Panel>
              <PanelHeader>
                <div>soy principal</div>
              </PanelHeader>
              <PanelBody>
                <PruebaChart />
              </PanelBody>
            </Panel>
          </div>
          <div className="col-xl-4 h-50 col-sm-12 px-xl-1 py-xl-1 px-md-1 py-md-1">
            <Panel>
              <PanelHeader>
                <div>soy principal</div>
              </PanelHeader>
              <PanelBody>
                <PruebaChart />
              </PanelBody>
            </Panel>
          </div>
          <div className="col-xl-4 h-50 col-sm-12 px-xl-1 py-xl-1 px-md-1 py-md-1">
            <Panel>
              <PanelHeader>
                <div>soy principal</div>
              </PanelHeader>
              <PanelBody>
                <PruebaChart />
              </PanelBody>
            </Panel>
          </div>

          <div className="col-xl-4 h-50 col-sm-12 px-xl-1 py-xl-1 px-md-1 py-md-1">
            <Panel>
              <PanelHeader>
                <div>soy principal</div>
              </PanelHeader>
              <PanelBody>
                <PruebaChart />
              </PanelBody>
            </Panel>
          </div>
          <div className="col-xl-4 h-50 col-sm-12 px-xl-1 py-xl-1 px-md-1 py-md-1">
            <Panel>
              <PanelHeader>
                <div>soy principal</div>
              </PanelHeader>
              <PanelBody>
                <PruebaChart />
              </PanelBody>
            </Panel>
          </div>
          <div className="col-xl-4 h-50 col-sm-12 px-xl-1 py-xl-1 px-md-1 py-md-1">
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
