import React from 'react';

const CreUp = () => {
  return (
    <div className="row justify-content-md-center">
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
      <div className="section-block" id="basicform">
        <h3 className="section-title">Crear Operaciones</h3>
        <p>Formulario para crear operaciones</p>        
      </div>
      <div className="card">
        <h5 className="card-header">Formulario Operaciones</h5>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label for="inpOp" className="col-form-label">
                Operacion
              </label>
              <input id="inpOp" type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label for="inpAbr" className="col-form-label">
                Abreviatura
              </label>
              <input id="inpAbr" type="text" className="form-control" />
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
