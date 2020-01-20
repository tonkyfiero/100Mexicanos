import React from 'react';

const CreUp = () => {
  return (
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
      <div className="section-block" id="basicform">
        <h3 className="section-title">Crear Equipo</h3>
        <p>Formulario para crear equipos</p>        
      </div>
      <div className="card">
        <h5 className="card-header">Formulario equipos</h5>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label for="inpCampo" className="col-form-label">
                Campo
              </label>
              <input id="inpCampo" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label for="inpNumero" className="col-form-label">
                Numero
              </label>
              <input id="inpNumero" type="text" className="form-control" />
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
  );
};

export default CreUp;
