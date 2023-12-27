import React, { Component } from 'react';
import { useState } from 'react';
import ControladorTurno from '../components/controladorTurno';
import Encuesta from '../components/encuesta';
import PuntosGenerales from '../components/puntosGenerales';
import PuntosJudador1 from '../components/puntosJugador1';
import PuntosJudador2 from '../components/puntosJugador2';

import './app.css';

const App = () => {
  return (
    <div id="contenedor" className="contenedor">
      <div style={{ display: 'flex', flexDirection: 'column',height:"100%" }}>
        <PuntosGenerales />
        <div style={{ display: 'flex',height:"70%" }}>
          <PuntosJudador1 />
          <Encuesta />
          <PuntosJudador2 />
        </div>
        <ControladorTurno/>
      </div>
    </div>
  );
};
export default App;
