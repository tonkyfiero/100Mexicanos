import React from 'react';

const CreUp = () => {
  return (
    <div className="col-xl-6 col-lg-16 col-md-16 col-sm-16 col-16">
      <div className="section-block" id="basicform">
        <h3 className="section-title">Crear Equipo</h3>
        <p>
          Formulario para crear equipos
        </p>
      </div>
      <div className="card">
        <h5 className="card-header">Basic Form</h5>
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
              <label for="inputEmail">Email address</label>
              <input id="inputEmail" type="email" placeholder="name@example.com" className="form-control" />
              <p>We'll never share your email with anyone else.</p>
            </div>
            <div className="form-group">
              <label for="inputText4" className="col-form-label">
                Number Input
              </label>
              <input id="inputText4" type="number" className="form-control" placeholder="Numbers" />
            </div>
            <div className="form-group">
              <label for="inputPassword">Password</label>
              <input id="inputPassword" type="password" placeholder="Password" className="form-control">                
              </input>
            </div>
            <div className="custom-file mb-3">
              <input type="file" className="custom-file-input" id="customFile" />
              <label className="custom-file-label" for="customFile">
                File Input
              </label>
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
          </form>
        </div>        
      </div>
    </div>
  );
};

export default CreUp;
