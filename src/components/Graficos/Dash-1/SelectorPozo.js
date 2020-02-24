import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

///contexto Principal

import { PageSettings } from '../../../config/page-settings';

const SelectorPozo = () => {
  const [options, setOptions] = useState([]);
  const { setIdPozoDireccional } = useContext(PageSettings);

  useEffect(() => {
    axios
      .get('https://localhost:44392/api/dashboard/GetPozos')
      .then((res) => {
        console.log(res);
        setOptions(res.data.Pozos);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const changeSelectorPozo = (evento) => {
    console.log(evento);
    setIdPozoDireccional(parseInt(evento.currentTarget.value));
  };

  return (
    <select class="form-control" id="selectPozo" onChange={(e) => changeSelectorPozo(e)}>
      <option value="0">selecciona pozo</option>
      {options.map((x, i) => (
        <option value={x.id}>{x.Pozo}</option>
      ))}
    </select>
  );
};

export default SelectorPozo;
