import React from 'react';

const FormIntervencion = () => (
  <div>
    <div>
      <label htmlFor="selPozo">Pozo</label>
      <select name="selPozo" id="selPozo">
        <option value="">Furbero 1001</option>
        <option value="">Furbero 1002</option>
        <option value="">Furbero 1003</option>
        <option value="">Furbero 1004</option>
        <option value="">Furbero 1005</option>
      </select>
    </div>
    <div>
      <label htmlFor="selInter">Intervencion</label>
      <select name="selInter" id="selInter">
        <option value="">Perforacion</option>
        <option value="">Terminacion</option>
        <option value="">RMA</option>
        <option value="">RME</option>
      </select>
    </div>
    <div>
        <label htmlFor="inpIniFecha">Inicio</label>
        <input type="datetime" name="inpIniFecha" id="inpIniFecha"/>
        <label htmlFor="inpFinFecha">Fin</label>
        <input type="datetime" name="inpFinFecha" id="inpFinFecha"/>
    </div>
    <div>
        <label htmlFor="selEquipo">Inicio</label>
        <select name="selEquipo" id="selEquipo">
        <option value="">S/E</option>
        <option value="">785</option>
        <option value="">546</option>
        <option value="">745</option>
        <option value="">748</option>
      </select>        
    </div>
    <div>
        <label htmlFor="inpResponsables">Responsbles</label>        
        <input type="text" name="inpResponsables" id="inpResponsables" value='Jose Perez, Antonio Cruz'/>
    </div>
  </div>
);


export default FormIntervencion
