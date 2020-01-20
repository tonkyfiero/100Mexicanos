import axios from 'axios';
import * as typesConst from '../types/SystemTypes'

// import { loadingData,errorData  } from '../Actions/FetchFunction'

export const fetchMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type !== typesConst.API) {
    return;
  }

  //aqui va el dispatcher para carga de datos
  
  const { url, onSucces,onLoad,onFailure, method = 'GET', data,extraOptions={} } = action.payload;

  const dataProperty = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';

  dispatch(onLoad(true))

  console.time('get');
  axios
    .request({ url, method,[dataProperty]:data,...extraOptions})
    .then(response => {
      Array.isArray(onSucces(response.data)) ? onSucces(response.data).forEach(dispatch) : dispatch(onSucces(response.data)) ;
      dispatch(onLoad(false))
      console.timeEnd('get');
    })
    .catch(error => {
      dispatch(onFailure(error))
      console.log(error);
      console.timeEnd('get');
    });
};
