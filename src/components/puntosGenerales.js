import React from 'react';
import { useSelector } from 'react-redux';



const PuntosGenerales = () => {
  const estado = useSelector((state) => state);
  const tablero = useSelector((state) => state.Puntajes.tablero);
  console.log(estado)


  return (
    <div style={{ display: 'flex', height: '20%', color: 'white', alignItems: 'center', justifyContent: 'center' }}>
      <div
        style={{
          border: '12px dotted  #d0ff12',
          height: '100%',
          width: '20%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <p style={{ color: '#d0ff12', fontSize: '60px', fontWeight: 'bold' }}>{tablero}</p>
      </div>     
    </div>
  );
};

export default PuntosGenerales;
