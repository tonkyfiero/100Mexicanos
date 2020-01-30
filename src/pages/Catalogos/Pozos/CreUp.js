import React from 'react';

///Component 3ros
import InputMask from 'react-input-mask';

const CreUp = () => {
  return (
    <div className="row justify-content-md-center">
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
      <div className="section-block" id="basicform">
        <h3 className="section-title">Crear Pozos</h3>
        <p>Formulario para Pozos</p>
      </div>
      <div className="card">
        <h5 className="card-header">Formulario Pozos</h5>
        <div className="card-body">
          <form>
          <div class="form-group">
              <label for="selectCampo">Campo</label>
              <select class="form-control" id="selectGrado">
                <option>Seleccione Campo</option>
                <option>Agua Fria</option>
                <option>Tajin</option>
                <option>Presidente Aleman</option>
                <option>Furbero</option>                
              </select>
            </div>

            <div className="form-group">
              <label for="inpNumero" className="col-form-label">
                Numero
              </label>
              <input id="inpNumero" type="text" className="form-control" />
            </div>

            <div class="form-group">
              <label for="selectMacropera">Macropera</label>
              <select class="form-control" id="selectGrado">
                <option>Seleccione Macropera</option>
                <option>Agua Fria 1000</option>
                <option>Tajin 2000</option>
                <option>Presidente Aleman 3000</option>
                <option>Furbero 5000</option>                
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
