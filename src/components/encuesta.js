import { Fragment, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { dataEncuestas } from '../data/index';
import { useState } from 'react';
import Respuesta from './respuesta';
import { useDispatch } from 'react-redux';
import { reset_puntos_tablero } from '../redux/actions/PuntosActions';



const Encuesta = () => {
  const [index, setIndex] = useState(0);
  const [pregunta, setPregunta] = useState(dataEncuestas[index]);
  const [visible, setVisible] = useState(false);


  const dispatch = useDispatch();
  const setPuntos = () => {    
    dispatch(reset_puntos_tablero());
  };

  const SigPregunta = () => {
    if (index + 1 > dataEncuestas.length - 1) {
      setPregunta(dataEncuestas[0]);
      setIndex(0);
    } else {
      setPregunta(dataEncuestas[index + 1]);
      setIndex(index + 1);
    }
    setVisible(false)
    setPuntos()
  };

  const mostrarRespuestas = () => {
    setVisible(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%',flexGrow:3 }}>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ border: '12px dotted  #d0ff12', flexGrow: '4', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h3 style={{ color: '#d0ff12', fontSize: '35px' }}>{pregunta.pregunta}</h3>
          </div>
          <div style={{ flexGrow: '4' }}>
            <ul style={{ marginTop: '20px' }}>
              {pregunta.respuestas.map((x, i) => {
                return <Respuesta key={uuidv4()} respuesta={x.respuesta} indice={i + 1} puntos={x.puntos} bandera={visible} />;
              })}
            </ul>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', paddingRight: '10px', paddingBottom: '10px' }}>
            <button className="btn btn-info" onClick={() => SigPregunta()}>
              Siguiente pregunta
            </button>
            <button className="btn btn-info" onClick={() => mostrarRespuestas()}>
              Abrir respuestas
            </button>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Encuesta;
