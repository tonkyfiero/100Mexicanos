import * as XLSX from 'xlsx';
import uuid from 'uuid';

/// //////////////////////////////////////////////////////////////
/** @description Retorna un objeto tipo json que cumpla el criterio de busqueda
 * @param {string} key campo de comparacion
 * @param {string} valor valor para buscar
 * @param {json} obj objeto que sera validado
 * @return {boolean} regresa falso o verdadero si el objeto cumple con los criterios
 */
export const filterByKeyValueOK = (key, valor, obj) => {
  if (obj[key] == valor) {
    return true;
  } else {
    return false;
  }
};
export const filterByKeyValueError = (key, valor, obj) => {
  if (obj[key] != valor) {
    return true;
  } else {
    return false;
  }
};


/**
 * @description recibe una cadena de texto que puede contener acentos y retorna sin acentos y minuscula
 * @param {string} s texto para quitarle acentos 
 * @returns {string} regresa el valor en minusculas y sin acentos
 */
export const quitaAcentos = (s) => {
  let cadena = s.toLowerCase();
  cadena = cadena.replace(/á/gi, 'a');
  cadena = cadena.replace(/é/gi, 'e');
  cadena = cadena.replace(/í/gi, 'i');
  cadena = cadena.replace(/ó/gi, 'o');
  cadena = cadena.replace(/ú/gi, 'u');
  cadena = cadena.replace(/ñ/gi, 'n');

  return cadena;
};

/** @description Encuentra el valor indicado en un json , dando campo de busqueda , campo resultado y valor a buscar
 * @param {json} obj Objeto tipo json donde se va a buscar el dato
 * @param {string} keyF Campo de busqueda en el json
 * @param {string} keyR Campo de Retorno en el json
 * @param {string} value valor de busqueda para el campo de busqueda
 * @return {string}  valor del dato encontrado
 */
export const findDataByKeyValue = (obj, keyF, KeyR, value) => {
  for (var i = 0; i < obj.length; i++) {
    if (obj[i][keyF] == value) {
      return obj[i][KeyR];
    }
  }
  return null;
};


/**
 * 
 * @param {date} fecha fecha a buscar
 * @param {date} fechaIni fecha inicio del rango de busqueda
 * @param {data} fechaFin fecha fin del rango de busqueda
 * @returns {boolean} retorna true si la fecha esta dentro del rango
 */
export const dentroRangoFechas = (fecha, fechaIni, fechaFin) => {
  if (fecha >= fechaIni && fecha <= fechaFin) {
    return true;
  } else {
    return false;
  }
};

export const cargarExcel = (urlFile, callFunction) => {
  // let inputFile = document.getElementById('inputFile');
  // let urlFile = inputFile.files[0];
  var reader = new FileReader();
  reader.onload = (ev) => {
    let arrayBuffer = reader.result;
    let data = new Uint8Array(arrayBuffer);
    let arr = new Array();
    for (var i = 0; i != data.length; i++) {
      arr[i] = String.fromCharCode(data[i]);
    }

    let bstr = arr.join('');
    let woorbook = XLSX.read(bstr, {
      type: 'binary',
      cellDates: true,
      cellNF: false,
      cellText: false,
    });

    let nombrePrimeraHoja = woorbook.SheetNames[0];
    let workSheet = woorbook.Sheets[nombrePrimeraHoja];
    let datosExcelUP = XLSX.utils.sheet_to_json(workSheet, {
      dateNF: 'DD/MM/YYYY',
    });

    datosExcelUP.map((x) => {
      x['id'] = uuid.v1();
    });

    callFunction(datosExcelUP);
  };
  reader.readAsArrayBuffer(urlFile);
};

export const generateOptionForReactSelect = (data, keyText, keyValue) => {
  let opciones = data.map((x, i) => {
    return { value: x[keyValue], label: x[keyText] };
  });
  return opciones
};

/**
 * @description regresa un array con los datos unicos de un json
 * @param {json} data informacion que tiene formato json
 * @param {*} key miembro del json donde vamos a buscar
 * @returns {Array} retorna un array con los valores unicso en el json
 */
export const valoresUnicos = (data,key) => {

  let unicosDato = []

  for (let i = 0; i < data.length; i++) {
    if (unicosDato.indexOf(data[i][key] === -1)) {
      unicosDato.push(data[i][key])
    }
    
    return unicosDato
    
  }

}
