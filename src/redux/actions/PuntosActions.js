import * as systemTypes from '../types/PuntosTypes'


/////set show variables//////////////////////////////////////////////////////
export const add_puntos_tablero = (puntos) => ({type: systemTypes.SET_PUNTOS_TABLERO,payload:puntos})
export const reset_puntos_tablero = () => ({type: systemTypes.RESET_PUNTOS_TABLERO})
export const add_puntos_j1 = (puntos) => ({type: systemTypes.SET_PUNTOS_JUGADOR1,payload:puntos})
export const add_puntos_j2 = (puntos) => ({type: systemTypes.SET_PUNTOS_JUGADOR2,payload:puntos})
// export const set_show_modal_UpFile = (show) => ({ type: setTypes.SHOW_MODAL_UP_FILE, show })
// export const set_show_modal_prevent_real = (show) => ({ type: setTypes.SHOW_MODAL_PREVENT_REAL, show })
// export const set_show_modal_charge = (show) => ({ type: setTypes.SHOW_MODAL_CHARGE, show })
////////////////////////////////////////////////////////////////////////////


// /////////VARIABLES DE APOYO SET /////////////////
// export const set_fechas_periodo = (fechas) => ({type: setTypes.SET_FECHAS_PERIODO,fechas})
// export const set_registro_editar = (registro) => ({type: setTypes.SET_REGISTRO_EDITAR, registro})
// export const set_add_new_row = (bool) => ({type: setTypes.SET_ADD_NEW_ROW,bool})
// export const set_estatus_datos = (estatus) => ({type:setTypes.SET_ESTATUS_DATOS,estatus})
// export const set_operacion_general = (operacion) => ({type: setTypes.SET_OPERACION_GENERAL, operacion})
// export const set_sobreescribir = (estatus) => ({type:setTypes.SET_SOBREESCRIBIR,estatus})
// export const set_tipoDePrograma = (estatus) => ({type:setTypes.SET_TIPO_PROGRAMA,estatus})

