
import React from "react";
import { useLayoutEffect } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useDispatch} from 'react-redux'

import { add_puntos_tablero } from '../redux/actions/PuntosActions';

const Respuesta = ({respuesta,indice,puntos,bandera}) => { 
  const [visible,setVisible] = useState(bandera)

 
  const dispatch = useDispatch();
  const setPuntosToTablero = (puntos) => {
    dispatch(add_puntos_tablero(puntos));    
  };


  const preguntaStatus = () => {
    if (visible) {
    return <li style={{ color: "#d0ff12", fontSize: "25px" }} onClick={() => changeStatus(false)}>       
    {indice}.- {respuesta} .................................................. {puntos}      
    </li>
    }else{
      return <li style={{ color: "#d0ff12", fontSize: "25px" }} onClick={() => changeStatus(true)}>       
      {indice}.- ....................................................................................................
      </li>
    }
  }

const changeStatus = (flag) => { 
  setVisible(flag)
  if (flag) {    
    setPuntosToTablero(puntos)
  }
}

  return (    
    preguntaStatus()
  );
};

export default Respuesta;
