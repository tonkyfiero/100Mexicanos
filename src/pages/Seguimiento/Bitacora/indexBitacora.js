import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

const dataBitacora = [
  {
    tiempo: 1,
    Profundidad: 15,
    Densidad: 1.1,
    NPT: 'Productivo',
    Descripcion:
      'CON BNA. TRICONICA DE 17 1/2\\" PERFORA DESDE SUPERFICIE HASTA 15 M. ROP: 10 M/H, GASTO: 350 GPM, PRESION: 190 PSI, PSB: 2-4 TON, ROTARIA:75 RPM. DENSIDAD DE ENTRADA Y SALIDA 1.10 GR/CC',
    Abreviatura: 'PERFORA',
    Operacion: 'PERFORAR ',
  },
  {
    tiempo: 5,
    Profundidad: 15,
    Densidad: 1.1,
    NPT: 'No Productivo',
    Descripcion: 'REPARA TOP DRIVE',
    Abreviatura: 'EQUIPO',
    Operacion: 'REPARA TOP DRIVE',
  },
  {
    tiempo: 18,
    Profundidad: 15,
    Densidad: 1.1,
    NPT: 'No Productivo',
    Descripcion: 'REPARA TOP DRIVE',
    Abreviatura: 'EQUIPO',
    Operacion: 'REPARA TOP DRIVE',
  },
  {
    tiempo: 0.5,
    Profundidad: 15,
    Densidad: 1.1,
    NPT: 'Productivo',
    Descripcion:
      'REALIZO SIMULACRO DE HOMBRE CAÍDO. ATENDIÓ AL LESIONADO POR CAÍDA EN EL AREA DE MALETAS DE TRANSFERENCIA. TIEMPO DE RESPUESTA DE CUADRILLA DE RESCATE: 3 MIN. TIEMPO DE PERSONAL NO INVOLUCRADO EN PUNTO DE REUNIÓN: 5 MIN. SE REPASO PROCEDIMIENTO DE PLA',
    Abreviatura: 'VARIOS',
    Operacion: 'SIMULACROS Y PLATICA DE SEGURIDAD',
  },
  {
    tiempo: 5.5,
    Profundidad: 15,
    Densidad: 1.1,
    NPT: 'No Productivo',
    Descripcion: 'REPARA TOP DRIVE',
    Abreviatura: 'EQUIPO',
    Operacion: 'REPARA TOP DRIVE',
  },
  {
    tiempo: 14,
    Profundidad: 15,
    Densidad: 1.1,
    NPT: 'No Productivo',
    Descripcion: 'REPARA TOP DRIVE',
    Abreviatura: 'EQUIPO',
    Operacion: 'REPARA TOP DRIVE',
  },
  {
    tiempo: 2,
    Profundidad: 15,
    Densidad: 1.1,
    NPT: 'No Productivo',
    Descripcion: 'REPARA TOP DRIVE',
    Abreviatura: 'EQUIPO',
    Operacion: 'REPARA SISTEMA HIDRAULICO',
  },
  {
    tiempo: 5.5,
    Profundidad: 20,
    Densidad: 1.1,
    NPT: 'Productivo',
    Descripcion:
      'CON BNA TRICONICA DE 17 1/2\\" PERFORA DESDE 15 M, HASTA 20 M, ROP: 1 M/H, GASTO: 350 GPM, PRESION:210 PSI, PSB: 2-4 TON, ROTARIA:70 RPM. DENSIDAD DE ENTRADA Y SALIDA 1.10 GR/CC. NOTA: A PARTIR DE 16 M,OBSERVO PERDIDA PARCIAL DE CIRCULACION.',
    Abreviatura: 'PERFORA',
    Operacion: 'PERFORAR ',
  },
  {
    tiempo: 2.5,
    Profundidad: 20,
    Densidad: 1.1,
    NPT: 'No Productivo',
    Descripcion: 'REPARA TOP DRIVE',
    Abreviatura: 'EQUIPO',
    Operacion: 'REPARA TOP DRIVE',
  },
  {
    tiempo: 0.5,
    Profundidad: 20,
    Densidad: 1.1,
    NPT: 'No Productivo',
    Descripcion: 'REPARA TOP DRIVE',
    Abreviatura: 'EQUIPO',
    Operacion: 'REPARA SISTEMA HIDRAULICO',
  },
  {
    tiempo: 3.5,
    Profundidad: 44,
    Densidad: 1.12,
    NPT: 'Productivo',
    Descripcion:
      'CON BNA TRICONICA DE 171/2\\" PERFORA DESDE 20 M, HASTA 44 M, ROP: 6.8 M/H, GASTO: 350 GPM, PRESION:300 PSI, PSB: 2-4 TON, ROTARIA:70 RPM. DENSIDAD DE ENTRADA Y SALIDA 1.12 GR/CC COMO MEDIDAPREVENTIVA CADA 10 M PERFORADOS BOMBEA 1 M3 DE BACHE VISCO',
    Abreviatura: 'PERFORA',
    Operacion: 'PERFORAR ',
  },
  {
    tiempo: 5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion:
      'CON BNA TRICONICA DE 17 1/2\\" PERFORA DESDE 44 M, HASTA 110 M, ROP: 13.2 M/H, GASTO: 640 GPM, PRESION: 780 PSI, PSB: 5-6 TON, ROTARIA:140 RPM. DENSIDAD DE ENTRADA Y SALIDA 1.16 GR/CC.',
    Abreviatura: 'PERFORA',
    Operacion: 'PERFORAR ',
  },
  {
    tiempo: 1.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion:
      'CON BARRENA TRICONICA 17 1/2\\" A 110 M, BOMBEO 4 M3 DE BACHE VISCOSO Y CIRCULO POZO CON 640 GPM, 720 PSI, DENSIDAD DE ENTRADA Y SALIDA 1.16 GR/CC.',
    Abreviatura: 'CIRCULA',
    Operacion: 'CIRCULAR',
  },
  {
    tiempo: 2.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion: 'SACO BARRENA 17 1/2\\" + SARTA DE PERFORACION CONVENCIONAL DESDE 110 M HASTA SUPERFICIE',
    Abreviatura: 'VIAJES',
    Operacion: 'SACAR BHA A SUPERFICIE',
  },
  {
    tiempo: 1,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion:
      'METE BARRENA 17 1/2\\" + SARTA DE PERFORACION CONVENCONAL DESDE SUPERFICIE HASTA 110 M, SINRESTRICCION.',
    Abreviatura: 'VIAJES',
    Operacion: 'BAJAR BHA A FONDO',
  },
  {
    tiempo: 1,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion:
      'CON BARRENA TRICONICA 17 1/2\\" A 110 M, CIRCULO POZO CON 640 GPM, 740 PSI, DENSIDAD DE ENTRADA YSALIDA 1.16 GR/CC.',
    Abreviatura: 'CIRCULA',
    Operacion: 'CIRCULAR',
  },
  {
    tiempo: 2,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion:
      'SACO BARRENA 17 1/2\\" + SARTA DE PERFORACION CONVENCIONAL DESDE 110 M HASTA SUPERFICIE, CONARRASTRE NORMAL. DESGASTE DE LA BARRENA: 1-1- WT-A-E-I-NO-TD',
    Abreviatura: 'VIAJES',
    Operacion: 'SACAR BHA A SUPERFICIE',
  },
  {
    tiempo: 0.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion: 'LIMPIO Y ACONDICIONO PISO DE TRABAJO. .',
    Abreviatura: 'VARIOS',
    Operacion: 'LIMPIEZA SUPERFICIAL',
  },
  {
    tiempo: 0.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion: 'LIMPIO CONTRAPOZO E INSTALO PLACA BASE.',
    Abreviatura: 'VARIOS',
    Operacion: 'LIMPIEZA SUPERFICIAL',
  },
  {
    tiempo: 0.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion: 'REALIZO REUNION DE SEGURIDAD Y PREOPERACIONAL PARA ARMAR EQUIPO Y BAJAR TR 13 3/8\\".',
    Abreviatura: 'VARIOS',
    Operacion: 'SIMULACROS Y PLATICA DE SEGURIDAD',
  },
  {
    tiempo: 0.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion: 'ARMO EQUIPO DE CIA. ITS PARA INTRODUCCION DE TR DE 13 3/8',
    Abreviatura: 'TR/TLESS',
    Operacion: 'INSTALAR EQUIPO PARA BAJAR TR',
  },
  {
    tiempo: 5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion:
      'CONECTO ZAPATA FLOTADORA + 8 TRAMOS DE T.R. 13 3/8\\", J-55, 54.5 LB/PIE, BCN Y BAJO HASTA 100 M. APLICÓ TORQUE GEOMETRICO, CONECTO, PUP JOINT + HERRAMIENTA SOLTADORA CON TUBO ANCLA Y BAJÓ HASTA ASENTAR PUP JOINT EN PLATO BASE QUEDANDO ZAPATA DE TR 13',
    Abreviatura: 'TR/TLESS',
    Operacion: 'BAJAR TR',
  },
  {
    tiempo: 0.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion: 'DESMANTELÓ EQUIPO DE APRIETE DE TR.',
    Abreviatura: 'TR/TLESS',
    Operacion: 'DESMANTELAR EQUIPO PARA BAJAR TR',
  },
  {
    tiempo: 0.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion: 'CON ZAPATA DE T.R. 13-3/8\\" A 108 MTS. CIRCULÓ POZO CON 168 GPM. DENSIDAD ENTRADA Y SALIDA 1.16',
    Abreviatura: 'CIRCULA',
    Operacion: 'CIRCULAR',
  },
  {
    tiempo: 0.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion: 'REALIZÓ REUNIÓN PREOPERATIVA Y DE SEGURIDAD PARA CEMENTACIÓN DE TR 13 3/8\\"',
    Abreviatura: 'VARIOS',
    Operacion: 'SIMULACROS Y PLATICA DE SEGURIDAD',
  },
  {
    tiempo: 0.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion: 'INSTALÓ BOTELLA DE CEMENTACIÓN Y LÍNEAS DE TRATAMIENTO',
    Abreviatura: 'CEMENTACION',
    Operacion: 'INST UNIDADES DE CEMENTACION',
  },
  {
    tiempo: 1.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion: 'EFECTUÓ CEMENTACIÓN DE TR 13-3/8\\"',
    Abreviatura: 'CEMENTACION',
    Operacion: 'CEMENTAR TR',
  },
  {
    tiempo: 0.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion: 'DESMANTELÓ LINEAS Y EQUIPO DE CEMENTACIÓN, RETIRO TUBO ANCLA. .',
    Abreviatura: 'CEMENTACION',
    Operacion: 'DESMANTELAR EQUIPO DE CEMENTACIONES',
  },
  {
    tiempo: 1.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion:
      'INSTALÓ CABEZAL SEMICOMPACTO SLIP LOCK 13 3/8\\" 5M, PROBÓ HERMETICIDAD DE SELLOS CON 1500 PSI X15 MIN SATISFACTORIAMENTE',
    Abreviatura: 'BOP y CABEZAL',
    Operacion: 'CORTA TR / INSTALAR CABEZAL',
  },
  {
    tiempo: 0.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion: 'REALIZO REUNION DE SEGURIDAD Y PREOPERACIONAL PARA INSTALACION DE CONJUNTO DE',
    Abreviatura: 'VARIOS',
    Operacion: 'SIMULACROS Y PLATICA DE SEGURIDAD',
  },
  {
    tiempo: 5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion:
      'INSTALO CARRETE DE TRABAJO Y PREVENTORES 13 5/8\\" 10M, APRETO TORNILLERIA CON LLAVE HY TORCPOR COMPAÑIA BOSS. REALIZO PRUEBA DE ENSAMBLE DE ESTRANGULACION, VALVULA X VALVULA CON 300 PSIX 5 MIN Y 4000 PSI X 15 MIN.',
    Abreviatura: 'BOP y CABEZAL',
    Operacion: 'INSTALAR  BOP y CSC',
  },
  {
    tiempo: 3,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion:
      'REALIZANDO INSTALACION DE LINEAS SUPERFICLES DE CONTROL, ESTRANGULAR Y MATAR, PRIMARIA YSECUNDARIA SIN TERMINAR. REALIZO PRUEBA DE VALVULA DE PIE, INSIDE BOP, VALVULA MANUAL DE TOP DRIVE,VALVULA DE 4\\" Y 2\\", LINEA DE STAND PIPE Y LINEA HASTA LAS B',
    Abreviatura: 'BOP y CABEZAL',
    Operacion: 'INSTALAR  BOP y CSC',
  },
  {
    tiempo: 7,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion: null,
    Abreviatura: 'BOP y CABEZAL',
    Operacion: 'INSTALAR  BOP y CSC',
  },
  {
    tiempo: 0.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion:
      'REALIZO SIMULACRO DE INCENDIO EN AREA DE CAMPAMENTO. TIEMPO DE RESPUESTA DE CUADRILLA ENPOSICION: 2 MIN, TIEMPO DE CONTROL DE EMERGERNCIA 5 MIN. TIEPO DE PERSONAL NO INVOLUCRADO ENPUNTO DE REUNION: 5 MIN. SE REALIZO PLATICA PARA REFORZAR AREAS DE',
    Abreviatura: 'VARIOS',
    Operacion: 'SIMULACROS Y PLATICA DE SEGURIDAD',
  },
  {
    tiempo: 2.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion:
      'CAMBIO ARIETES CIEGOS, AL INTENTAR APRETAR TORNILLERIA DE COMPUERTA DE PREVENTOR, OBSERVODIFICULTAD EN UNO DE LOS TORNILLOS PARA ENROSCAR,CAMBIANDO TORNILLERIA. ( SIN TERMINAR). .',
    Abreviatura: 'BOP y CABEZAL',
    Operacion: 'CAMBIAR Y PROBAR RAMS',
  },
  {
    tiempo: 3.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'No Productivo',
    Descripcion: 'REALIZO CAMBIO TORNILLERIA DE COMPUERTAS DE ARIETES CIEGOS',
    Abreviatura: 'EQUIPO',
    Operacion: 'BOP Y CSC',
  },
  {
    tiempo: 0.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion: 'APRETO COMPUERTAS DE ARIETES CIEGOS CON LLAVE HY TORC.SATISFACTORIAMENTE.',
    Abreviatura: 'BOP y CABEZAL',
    Operacion: 'INSTALAR  BOP y CSC',
  },
  {
    tiempo: 2.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion:
      'INSTALÓ TAPÓN DE PRUEBA, PROBÓ PREVENTOR ANULAR CON 300 PSI X 5 MIN Y 2400 PSI X 15 MINSATISFACTORIAMENTE.PROBÓ ARIETES DE TUBERÍA + ARIETES CIEGOS +VALVULA HCR, LÍNEAS DE MATAR(PRIMARIA Y SECUNDARIA) + VÁLVULAS CHECK + VÁLVULAS MANUALES DE LÍNEA',
    Abreviatura: 'BOP y CABEZAL',
    Operacion: 'PROBAR BOP y CSC',
  },
  {
    tiempo: 0.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion:
      'REALIZÓ PRUEBA DE FUNCIONAMIENTO DEL ACUMULADOR,TIEMPO DE CIERRE DE ARIETES: 6 SEG, TIEMPODE CIERRE DE ANULAR:13 SEG, TIEMPO PARA ABIR HCR DE: 2 SEG, TIEMPO PARA ABRIR DE ARIETES: 5 SEG(SIMULAR CIERRE CIEGO).PRESIÓN REMANENTE: 1450 PSI (450 PSI P',
    Abreviatura: 'BOP y CABEZAL',
    Operacion: 'PROBAR BOP y CSC',
  },
  {
    tiempo: 0.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion: 'INSTALO BUJE DE DESGASTE .',
    Abreviatura: 'BOP y CABEZAL',
    Operacion: 'INSTALAR/RECUPERAR BUJE DE DESGASTE ',
  },
  {
    tiempo: 0.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion: 'EFECTUO PLATICA DE SEGURIDAD Y PREOPERATIVA PARA ARMAR SARTA DE PERFORACION DIRECCIONAL',
    Abreviatura: 'VARIOS',
    Operacion: 'SIMULACROS Y PLATICA DE SEGURIDAD',
  },
  {
    tiempo: 1.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion:
      'CONECTÓ BARRENA PDC SMITH 12-1/4\\" TIPO MDI519HSPX CON MOTOR DE FONDO 8 \\" A825M7840XP (1.5º),METE HASTA 20 M,ALINEO MOTOR DE FONDO CON HERRAMIENTA MWD',
    Abreviatura: 'BHA',
    Operacion: 'ARMAR BHA',
  },
  {
    tiempo: 1.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion: 'CONTINUÓ METIENDO BARRENA PDC 12-1/4\\" + SARTA DE PERFORACIÓN DIRECCIONAL DESDE 20 M HASTA 77',
    Abreviatura: 'VIAJES',
    Operacion: 'BAJAR BHA A FONDO',
  },
  {
    tiempo: 2,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion: null,
    Abreviatura: 'VIAJES',
    Operacion: 'BAJAR BHA A FONDO',
  },
  {
    tiempo: 3,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'No Productivo',
    Descripcion: null,
    Abreviatura: 'EQUIPO',
    Operacion: 'REPARA SISTEMA MECANICO',
  },
  {
    tiempo: 0.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion: 'REALIZO CAMBIO DE ELEVADOR. .',
    Abreviatura: 'EQUIPO',
    Operacion: 'OTROS',
  },
  {
    tiempo: 0.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion: 'REALIZO PRUEBA DE HERRAMIENTA DIRECCIONAL CON 500 GPM, 1800 PSI SATISFACTORIAMENTE.',
    Abreviatura: 'EQUIPO',
    Operacion: 'OTROS',
  },
  {
    tiempo: 1.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion: 'CONTINUO METIENDO BARRENA PDC 12-1/4\\" + SARTA DE PERFORACIÓN DIRECCIONAL DESDE 77 M HASTA 93',
    Abreviatura: 'VIAJES',
    Operacion: 'BAJAR BHA A FONDO',
  },
  {
    tiempo: 0.5,
    Profundidad: 110,
    Densidad: 1.16,
    NPT: 'Productivo',
    Descripcion:
      'REALIZO PRUEBA DE INTEGRIDAD DE TR 13 3/8 \\" J-55, 54.5 LB/FT, BCN, CON 500 PSI X 15 MIN,SATISFACTORIAMENTE.',
    Abreviatura: 'VARIOS',
    Operacion: 'REALIZAR PRUEBA DE INTEGRIDAD/GOTEO A LA FORMACIÓN',
  },
];

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  titulo: {
    display: 'flex',
  },
});

const IndexBitacora = () => {
  const classes = useStyles();

  return (
    <div className="row justify-content-md-center">
      <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
        <div className="card">
          <div className={classes.titulo}>
            <h5 className="card-header" style={{ flex: '7' }}>
              Bitacora - Coapechaca 4980
            </h5>

            <button className="btn btn-secondary btn-space" style={{ flex: '1' }} type="button">
              <i className="fas fa-plus"></i>
            </button>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped m-b-0">                
                <thead>
                  <tr>
                    <th>General</th>
                    <th>Operacion</th>
                    <th>Descripcion</th>
                    <th>Densidad</th>
                    <th>Profundidad</th>
                    <th>NPT</th>
                    <th>Tiempo</th>                    
                    <th width="1%"></th>
                  </tr>
                </thead>
                <tbody>
                  {dataBitacora.map((x, i) => (
                    <tr>
                      <td>{x.Abreviatura}</td>
                      <td>{x.Operacion}</td>
                      <td>{x.Descripcion}</td>
                      <td>{x.Densidad}</td>
                      <td>{x.Profundidad}</td>
                      <td>{x.NPT}</td>
                      <td>{x.tiempo}</td>
                      <td className="with-btn" nowrap="">
                        <a href="#" className="btn btn-primary width-60 ">
                          <i className="fas fa-edit"></i>
                        </a>
                        <a className="btn btn-primary btn-danger m-r-2">
                          <i className="fas fa-trash" style={{ color: 'white' }}></i>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexBitacora;
