import React from 'react';

///Component 3ros
import InputMask from 'react-input-mask';

const CreUp = () => {
  return (
    <div className="row justify-content-md-center">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
        <div className="section-block" id="basicform">
          <h3 className="section-title">Crear Equipo</h3>
          <p>Formulario para tuberias</p>
        </div>
        <div className="card">
          <h5 className="card-header">Formulario equipos</h5>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label for="inpD" className="col-form-label">
                  Diametro (pg)
                </label>
                <InputMask id="ipnD" name="ipnD" mask="99 9/9" className="form-control" />
              </div>
              <div className="form-group">
                <label for="inpNumero" className="col-form-label">
                  Peso (lb/pie)
                </label>
                <input id="inpNumero" type="text" className="form-control" />
              </div>

              <div class="form-group">
                <label for="selectGrado">Example select</label>
                <select class="form-control" id="selectGrado">
                  <option>Seleccione Grado</option>
                  <option>H-40</option>
                  <option>J-55</option>
                  <option>K-55</option>
                  <option>N-80</option>
                  <option>L-80</option>
                  <option>C-90</option>
                  <option>C-95</option>
                  <option>T-95</option>
                  <option>P-110</option>
                  <option>Q-125</option>
                </select>
              </div>

              <div class="form-group">
                <label for="selectConexion">Example select</label>
                <select class="form-control" id="selectConexion">
                  <option>Seleccione Conexion</option>
                  <option>BTC</option>
                  <option>STC</option>
                  <option>LTC</option>
                  <option>8RR</option>
                  <option>BCN</option>
                </select>
              </div>

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
    </div>
  );
};

export default CreUp;
