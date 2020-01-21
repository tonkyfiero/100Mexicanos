import React, { useState,useEffect } from 'react';
import axios from 'axios'


import MomentUtils from "@date-io/moment";
import moment from 'moment'

moment.locale('es');


import { DatePicker, TimePicker, DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

const CreUpAF = () => {
  const [selectedDate, handleDateChange] = useState();
  const [data, setData] = useState();


  useEffect(() => {
    axios.get('https://localhost:44392/api/catalogos')
      .then(res => {  
        
        console.log(res)
        setData(res.data)
      })
      .catch(error => {
        console.log(error.message)
      })
  },[])


  return (
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
      <div className="section-block" id="basicform">
        <h3 className="section-title">Crear Intervencion</h3>
        <p>Formulario para crear intervenciones</p>
      </div>
      <div className="card">
        <h5 className="card-header">Formulario Intervencion</h5>
        <div className="card-body">
          <form>

          <div class="form-group">
              <label for="selectIntervencion">Intervencion</label>
              <select class="form-control" id="selectIntervencion">
                <option value="0">Seleccione intervencion</option>
                {
                  data && data.Intervencion.map(x=> (
                    <option value={x.idIntervencion}>{x.Intervencion}</option>
                  ))
                }
                
              </select>
            </div>

            <div class="form-group">
              <label for="selectTipoPozo">Tipo Pozo</label>
              <select class="form-control" id="selectTipoPozo">
                <option value="0">Seleccione Tipo Pozo</option>
                <option>Desrrollo</option>
                <option>Exploratorio</option>                
              </select>
            </div>


            <div class="form-group">
              <label for="selectCampo">Pozo</label>
              <select class="form-control" id="selectGrado">
                <option value="0">Seleccione Pozo</option>
                <option>Agua Fria 1252</option>
                <option>Tajin 525</option>
                <option>Presidente Aleman 1234</option>
                <option>Furbero 1236</option>
              </select>
            </div>

            <div class="form-group">
              <label for="selectEquipo">Equipo</label>
              <select class="form-control" id="selectEquipo">                
                <option value="0">Seleccione Equipo</option>
                {
                  data && data.Equipos.map(x=> (
                    <option value={x.idEquipo}>{x.Equipo}</option>
                  ))
                }
              </select>
            </div>

            <div class="form-group">
              <label for="selectTipoTrayectoria">Trayectoria</label>
              <select class="form-control" id="selectTipoTrayectoria">
                <option>Seleccione trayectoria</option>
                {
                  data && data.Trayectoria.map(x=> (
                    <option value={x.id_Trayectoria}>{x.Trayectoria}</option>
                  ))
                }
              </select>
            </div>

            <div class="form-group">
              <label for="selectFormacion">Formacion</label>
              <select class="form-control" id="selectFormacion">
                <option>Seleccione formacion objetivo</option>                
                {
                  data && data.Formacion.map(x=> (
                    <option value={x.idFormacion}>{x.Formacion}</option>
                  ))
                }
              </select>
            </div>

            <div className="form-group">
              <label for="inpNorte" className="col-form-label">
                Norte (UTM)
              </label>
              <input id="inpNorte" type="number" className="form-control" />
            </div>
            <div className="form-group">
              <label for="inpEste" className="col-form-label">
                Este (UTM)
              </label>
              <input id="inpEste" type="number" className="form-control" />
            </div>            

            {/* <div className="form-group">
              <h6>Seleccione el Tipo de Operacion</h6>
              <label class="custom-control custom-checkbox custom-control-inline">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label">Perforacion</span>
              </label>
              <label class="custom-control custom-checkbox custom-control-inline">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label">Terminacion</span>
              </label>
              <label class="custom-control custom-checkbox custom-control-inline">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label">Reparacion</span>
              </label>
            </div> */}



            <div className="form-group">
              <label for="inpFecha" className="col-form-label" >
                Fecha Inicio Movimiento
              </label>
              <MuiPickersUtilsProvider utils={MomentUtils} moment={moment}>
                <DateTimePicker
                  format={'llll'}
                  className="form-control"
                  value={selectedDate}
                  onChange={(date) => handleDateChange(date)}
                />
              </MuiPickersUtilsProvider>
            </div>

            {/* format={'DD-MM-YYYY HH:mm'} */}

            

            <div class="form-group">
              <button class="btn btn-primary" type="submit">
                <i class="icon s7-mail"></i>Enviar
              </button>
              <button class="btn btn-primary btn-danger m-r-2" type="button">
                <i class="icon s7-close"></i>Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreUpAF;
