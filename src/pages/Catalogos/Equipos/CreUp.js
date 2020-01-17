import React from 'react';

const CreUp = () => {
  return (
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
      <div className="section-block" id="basicform">
        <h3 className="section-title">Crear Equipo</h3>
        <p>Formulario para crear equipos</p>
        <button class="btn btn-secondary btn-space" type="button">
          <i class="fas fa-plus"></i>
        </button>
      </div>
      <div className="card">
        <h5 className="card-header">Formulario equipos</h5>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label for="inpEq" className="col-form-label">
                Nombre Equipo
              </label>
              <input id="inpEq" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label for="inpCia" className="col-form-label">
                Compañia
              </label>
              <input id="inpCia" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label for="inputText3" className="col-form-label">
                HP
              </label>
              <input id="inputText3" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" />
                <span class="custom-control-label">Equipo Activo</span>
              </label>
            </div>
            <div className="form-group">
              <h4>Seleccione el Tipo de Operacion</h4>
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
            </div>
            <div class="form-group">
              <button class="btn btn-primary btn-space" type="submit">
                <i class="icon s7-mail"></i>
              </button>
              <button class="btn btn-secondary btn-space" type="button">
                <i class="icon s7-close"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreUp;
