import * as systemTypes from '../types/SystemTypes'


const dataIni_Error = (bool) => ({type:systemTypes.app.ERROR,payload: bool})
const dataIni_Loading= (bool) => ({type:systemTypes.app.LOADING,payload:bool})
const dataIni_Succes = (items) => ({type:systemTypes.app.SUCCES,payload:items})

export {
    dataIni_Error,
    dataIni_Loading,
    dataIni_Succes
}