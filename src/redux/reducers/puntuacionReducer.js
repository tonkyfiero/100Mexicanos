import * as systemTypes from '../types/PuntosTypes'

const State = { tablero: 0,Equipo1:0,Equipo2:0};

const puntajes = (state = State, action) => {
  if (action.type === systemTypes.SET_PUNTOS_TABLERO) {
    return { ...state, tablero: state.tablero + action.payload };
  } 
  if (action.type === systemTypes.RESET_PUNTOS_TABLERO) {
    return { ...state, tablero:0 };
  }
  if (action.type === systemTypes.SET_PUNTOS_JUGADOR1) {
    return { ...state, Equipo1 : state.Equipo1 + action.payload };
  }  
  if (action.type === systemTypes.SET_PUNTOS_JUGADOR2) {
    return { ...state, Equipo2 : state.Equipo2 + action.payload };
  }  
  return state;
};

export {puntajes}
