import { dataIni_Error, dataIni_Succes, dataIni_Loading } from '../actions/Catalogos';

//types for redux
import { API } from '../types/SystemTypes';

const urlBase = 'https://localhost:44392/api';

export const getDataIni = () => ({
  type: 'API',
  payload: {
    url: `${urlBase}/catalogos`,
    method: 'GET',
    onSucces: dataIni_Succes,
    onLoad: dataIni_Loading,
    onFailure: dataIni_Error,
    label: 'getCalogos',
  },
});
