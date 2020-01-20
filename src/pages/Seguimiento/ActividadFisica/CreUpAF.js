import React, { useState } from 'react';

import MomentUtils from "@date-io/moment";
import moment from 'moment'

moment.locale('es');


import { DatePicker, TimePicker, DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

const CreUpAF = () => {
  const [selectedDate, handleDateChange] = useState();

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
                <option>Seleccione intervencion</option>
                <option>Perforacion</option>
                <option>Terminacion</option>
                <option>RMA</option>
                <option>RME</option>                
              </select>
            </div>

            <div class="form-group">
              <label for="selectTipoPozo">Tipo Pozo</label>
              <select class="form-control" id="selectTipoPozo">
                <option>Seleccione Tipo Pozo</option>
                <option>Desrrollo</option>
                <option>Exploratorio</option>                
              </select>
            </div>


            <div class="form-group">
              <label for="selectCampo">Pozo</label>
              <select class="form-control" id="selectGrado">
                <option>Seleccione Pozo</option>
                <option>Agua Fria 1252</option>
                <option>Tajin 525</option>
                <option>Presidente Aleman 1234</option>
                <option>Furbero 1236</option>
              </select>
            </div>

            <div class="form-group">
              <label for="selectEquipo">Equipo</label>
              <select class="form-control" id="selectEquipo">
                <option>Seleccione Equipo</option>
                <option>WTF-599</option>
                <option>WTF-599</option>
                <option>WTF-599</option>
                <option>WTF-599</option>
              </select>
            </div>

            <div class="form-group">
              <label for="selectTipoTrayectoria">Trayectoria</label>
              <select class="form-control" id="selectTipoTrayectoria">
                <option>Seleccione trayectoria</option>
                <option>S</option>
                <option>J</option>
                <option>V</option>
                <option>H</option>
              </select>
            </div>

            <div class="form-group">
              <label for="selectFormacion">Formacion</label>
              <select class="form-control" id="selectFormacion">
                <option>Seleccione formacion objetivo</option>
                <option>Paleocanal</option>
                <option>Paleocanal</option>
                <option>Paleocanal</option>
                <option>Paleocanal</option>
                <option>Paleocanal</option>
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
