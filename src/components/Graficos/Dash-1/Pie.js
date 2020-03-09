import React, { useEffect, useState, useRef } from 'react';
import Highcharts from 'highcharts';
import drilldown from 'highcharts/modules/drilldown.js';
import HighchartsReact from 'highcharts-react-official';

drilldown(Highcharts);

import Spinner from '../Dash-1/Spinner';
import { pieDrilldownBase } from '../ConfigCharts';

//1=0,7=1,8=2,9=3,10=4,11=5,12=06,13=7,14=8,15=9

const data = [
  {
    series: [
      {
        name: 'NPT',
        colorByPoint: true,
        data: [
          {
            name: 'Productivo',
            y: 43.7,
            drilldown: 'p',
          },
          {
            name: 'No Productivo',
            y: 12,
            drilldown: 'np',
          },
        ],
      },
    ],
    drilldown: {
      drillUpButton: {
        text: '<<Regresar',
        position: {
          align: 'left',
          verticalAlign: 'top',
        },
      },
      series: [
        {
          id: 'p',
          name: 'Operaciones',
          data: [
            {
              'ARMAR BHA': 'BAJAR BHA A FONDO',
              '0.4375': 2.916666667,
              'ARMAR BHA': 'BAJAR BHA A FONDO',
            },
            {
              'ARMAR BHA': 'BAJAR TR',
              '0.4375': 1.104166667,
              'ARMAR BHA': 'BAJAR TR',
            },
            {
              'ARMAR BHA': 'CAMBIAR Y PROBAR RAMS',
              '0.4375': 0.083333333,
              'ARMAR BHA': 'CAMBIAR Y PROBAR RAMS',
            },
            {
              'ARMAR BHA': 'CEMENTAR TR',
              '0.4375': 0.541666667,
              'ARMAR BHA': 'CEMENTAR TR',
            },
            {
              'ARMAR BHA': 'CIRCULAR',
              '0.4375': 1.395833333,
              'ARMAR BHA': 'CIRCULAR',
            },
            {
              'ARMAR BHA': 'CORTA TR / INSTALAR CABEZAL',
              '0.4375': 0.4375,
              'ARMAR BHA': 'CORTA TR / INSTALAR CABEZAL',
            },
            {
              'ARMAR BHA': 'CORTE DE NUCLEOS CONVENCIONALES',
              '0.4375': 0.125,
              'ARMAR BHA': 'CORTE DE NUCLEOS CONVENCIONALES',
            },
            {
              'ARMAR BHA': 'DESLIZA Y CORTA CABLE',
              '0.4375': 0.083333333,
              'ARMAR BHA': 'DESLIZA Y CORTA CABLE',
            },
            {
              'ARMAR BHA': 'DESMANTELAR BOPS y CSC',
              '0.4375': 0.3125,
              'ARMAR BHA': 'DESMANTELAR BOPS y CSC',
            },
            {
              'ARMAR BHA': 'DESMANTELAR EQUIPO DE CEMENTACIONES',
              '0.4375': 0.0625,
              'ARMAR BHA': 'DESMANTELAR EQUIPO DE CEMENTACIONES',
            },
            {
              'ARMAR BHA': 'DESMANTELAR EQUIPO PARA BAJAR TR',
              '0.4375': 0.083333333,
              'ARMAR BHA': 'DESMANTELAR EQUIPO PARA BAJAR TR',
            },
            {
              'ARMAR BHA': 'INST UNIDADES DE CEMENTACION',
              '0.4375': 0.104166667,
              'ARMAR BHA': 'INST UNIDADES DE CEMENTACION',
            },
            {
              'ARMAR BHA': 'INSTALA /DESINSTALA CHAROLA ECOLOGICA Y LINEA DE FLOTE',
              '0.4375': 0.854166667,
              'ARMAR BHA': 'INSTALA /DESINSTALA CHAROLA ECOLOGICA Y LINEA DE FLOTE',
            },
            {
              'ARMAR BHA': 'INSTALAR  BOP y CSC',
              '0.4375': 0.6875,
              'ARMAR BHA': 'INSTALAR  BOP y CSC',
            },
            {
              'ARMAR BHA': 'INSTALAR EQUIPO PARA BAJAR TR',
              '0.4375': 0.104166667,
              'ARMAR BHA': 'INSTALAR EQUIPO PARA BAJAR TR',
            },
            {
              'ARMAR BHA': 'INSTALAR Y PROBAR PACK OFF',
              '0.4375': 0.0625,
              'ARMAR BHA': 'INSTALAR Y PROBAR PACK OFF',
            },
            {
              'ARMAR BHA': 'INSTALAR/RECUPERAR BUJE DE DESGASTE ',
              '0.4375': 0.083333333,
              'ARMAR BHA': 'INSTALAR/RECUPERAR BUJE DE DESGASTE ',
            },
            {
              'ARMAR BHA': 'LIMPIEZA SUPERFICIAL',
              '0.4375': 0.3125,
              'ARMAR BHA': 'LIMPIEZA SUPERFICIAL',
            },
            {
              'ARMAR BHA': 'OTROS',
              '0.4375': 5.854166667,
              'ARMAR BHA': 'OTROS',
            },
            {
              'ARMAR BHA': 'PERFORAR ',
              '0.4375': 16.70833333,
              'ARMAR BHA': 'PERFORAR ',
            },
            {
              'ARMAR BHA': 'PERFORAR ACCESORIOS / CEMENTO',
              '0.4375': 0.25,
              'ARMAR BHA': 'PERFORAR ACCESORIOS / CEMENTO',
            },
            {
              'ARMAR BHA': 'PROBAR BOP y CSC',
              '0.4375': 0.395833333,
              'ARMAR BHA': 'PROBAR BOP y CSC',
            },
            {
              'ARMAR BHA': 'QUEBRAR BHA',
              '0.4375': 0.145833333,
              'ARMAR BHA': 'QUEBRAR BHA',
            },
            {
              'ARMAR BHA': 'SACAR BHA A SUPERFICIE',
              '0.4375': 3.375,
              'ARMAR BHA': 'SACAR BHA A SUPERFICIE',
            },
            {
              'ARMAR BHA': 'SIMULACROS Y PLATICA DE SEGURIDAD',
              '0.4375': 0.583333333,
              'ARMAR BHA': 'SIMULACROS Y PLATICA DE SEGURIDAD',
            },
            {
              'ARMAR BHA': 'TOMAR REGISTROS ELECTRICOS ',
              '0.4375': 1.375,
              'ARMAR BHA': 'TOMAR REGISTROS ELECTRICOS ',
            },
            {
              'ARMAR BHA': 'VIAJE CORTO',
              '0.4375': 0.520833333,
              'ARMAR BHA': 'VIAJE CORTO',
            },
            {
              'ARMAR BHA': 'PRUEBA HERMETICIDAD DE TR',
              '0.4375': 0.104166667,
              'ARMAR BHA': 'PRUEBA HERMETICIDAD DE TR',
            },
            {
              'ARMAR BHA': 'CIRCULAR PARA CEMENTAR ',
              '0.4375': 0.041666667,
              'ARMAR BHA': 'CIRCULAR PARA CEMENTAR ',
            },
            {
              'ARMAR BHA': 'REGISTROS ADICIONALES',
              '0.4375': 4.645833333,
              'ARMAR BHA': 'REGISTROS ADICIONALES',
            },
          ],
        },
        {
          id: 'np',
          name: 'Operaciones',
          data: [
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'DIRECCIONAL ',
              },
              '0.9375': 0.208333333,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'OTROS',
              },
              '0.9375': 2.708333333,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'REGISTROS ELECTRICOS ',
              },
              '0.9375': 0.125,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'REPARA SISTEMA MECANICO',
              },
              '0.9375': 0.083333333,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'REPARA TOP DRIVE',
              },
              '0.9375': 2.541666667,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'ESPERA FRAGUADO',
              },
              '0.9375': 0.833333333,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'CONTROL DE SOLIDOS ',
              },
              '0.9375': 0.5625,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'FLUIDOS ',
              },
              '0.9375': 0.041666667,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'VIAJE DE LIMPIEZA',
              },
              '0.9375': 0.041666667,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'REPARA PISO DE TRABAJO',
              },
              '0.9375': 0.145833333,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'OTROS PROBLEMAS ',
              },
              '0.9375': 4.333333333,
            },
          ],
        },
      ],
    },
  },
  {
    series: [
      {
        name: 'NPT',
        colorByPoint: true,
        data: [
          {
            name: 'Productivo',
            y: 36.7,
            drilldown: 'p',
          },
          {
            name: 'No Productivo',
            y: 46,
            drilldown: 'np',
          },
        ],
      },
    ],
    drilldown: {
      drillUpButton: {
        text: '<<Regresar',
        position: {
          align: 'left',
          verticalAlign: 'top',
        },
      },
      series: [
        {
          id: 'p',
          name: 'Operaciones',
          data: [
            {
              name: 'ARMAR BHA',
              y: 1.4375,
              drilldown: 'ARMAR BHA',
            },
            {
              name: 'BAJAR BHA A FONDO',
              y: 2.3125,
              drilldown: 'BAJAR BHA A FONDO',
            },
            {
              name: 'BAJAR TR',
              y: 2.541666667,
              drilldown: 'BAJAR TR',
            },
            {
              name: 'CAMBIAR Y PROBAR RAMS',
              y: 0.458333333,
              drilldown: 'CAMBIAR Y PROBAR RAMS',
            },
            {
              name: 'CEMENTAR TR',
              y: 0.229166667,
              drilldown: 'CEMENTAR TR',
            },
            {
              name: 'CIRCULAR',
              y: 1.5,
              drilldown: 'CIRCULAR',
            },
            {
              name: 'CORTA TR / INSTALAR CABEZAL',
              y: 0.0625,
              drilldown: 'CORTA TR / INSTALAR CABEZAL',
            },
            {
              name: 'CORTE DE NUCLEOS CONVENCIONALES',
              y: 2.1875,
              drilldown: 'CORTE DE NUCLEOS CONVENCIONALES',
            },
            {
              name: 'DESLIZA Y CORTA CABLE',
              y: 0.166666667,
              drilldown: 'DESLIZA Y CORTA CABLE',
            },
            {
              name: 'DESMANTELAR BOPS y CSC',
              y: 0.25,
              drilldown: 'DESMANTELAR BOPS y CSC',
            },
            {
              name: 'DESMANTELAR EQUIPO DE CEMENTACIONES',
              y: 0.0625,
              drilldown: 'DESMANTELAR EQUIPO DE CEMENTACIONES',
            },
            {
              name: 'DESMANTELAR EQUIPO PARA BAJAR TR',
              y: 0.0625,
              drilldown: 'DESMANTELAR EQUIPO PARA BAJAR TR',
            },
            {
              name: 'INST UNIDADES DE CEMENTACION',
              y: 0.083333333,
              drilldown: 'INST UNIDADES DE CEMENTACION',
            },
            {
              name: 'INSTALA /DESINSTALA CHAROLA ECOLOGICA Y LINEA DE FLOTE',
              y: 0.041666667,
              drilldown: 'INSTALA /DESINSTALA CHAROLA ECOLOGICA Y LINEA DE FLOTE',
            },
            {
              name: 'INSTALAR  BOP y CSC',
              y: 0.645833333,
              drilldown: 'INSTALAR  BOP y CSC',
            },
            {
              name: 'INSTALAR EQUIPO PARA BAJAR TR',
              y: 0.083333333,
              drilldown: 'INSTALAR EQUIPO PARA BAJAR TR',
            },
            {
              name: 'INSTALAR Y PROBAR PACK OFF',
              y: 0.104166667,
              drilldown: 'INSTALAR Y PROBAR PACK OFF',
            },
            {
              name: 'INSTALAR/RECUPERAR BUJE DE DESGASTE ',
              y: 0.083333333,
              drilldown: 'INSTALAR/RECUPERAR BUJE DE DESGASTE ',
            },
            {
              name: 'LIMPIEZA SUPERFICIAL',
              y: 0.166666667,
              drilldown: 'LIMPIEZA SUPERFICIAL',
            },
            {
              name: 'OTROS',
              y: 1.375,
              drilldown: 'OTROS',
            },
            {
              name: 'PERFORAR ',
              y: 10.3125,
              drilldown: 'PERFORAR ',
            },
            {
              name: 'PERFORAR ACCESORIOS / CEMENTO',
              y: 0.1875,
              drilldown: 'PERFORAR ACCESORIOS / CEMENTO',
            },
            {
              name: 'PROBAR BOP y CSC',
              y: 0.125,
              drilldown: 'PROBAR BOP y CSC',
            },
            {
              name: 'QUEBRAR BHA',
              y: 0.083333333,
              drilldown: 'QUEBRAR BHA',
            },
            {
              name: 'SACAR BHA A SUPERFICIE',
              y: 3.25,
              drilldown: 'SACAR BHA A SUPERFICIE',
            },
            {
              name: 'SIMULACROS Y PLATICA DE SEGURIDAD',
              y: 0.916666667,
              drilldown: 'SIMULACROS Y PLATICA DE SEGURIDAD',
            },
            {
              name: 'TOMAR REGISTROS ELECTRICOS ',
              y: 6.854166667,
              drilldown: 'TOMAR REGISTROS ELECTRICOS ',
            },
            {
              name: 'VIAJE CORTO',
              y: 1.020833333,
              drilldown: 'VIAJE CORTO',
            },
            {
              name: 'REALIZAR PRUEBA DE INTEGRIDAD/GOTEO A LA FORMACIÓN',
              y: 0.125,
              drilldown: 'REALIZAR PRUEBA DE INTEGRIDAD/GOTEO A LA FORMACIÓN',
            },
          ],
        },
        {
          id: 'np',
          name: 'Operaciones',
          data: [
            {
              name: 'ACONDICIONA AGUJERO / REPASA',
              y: 0.5,
              drilldown: 'ACONDICIONA AGUJERO / REPASA',
            },
            {
              name: 'DIRECCIONAL ',
              y: 0.541666667,
              drilldown: 'DIRECCIONAL ',
            },
            {
              name: 'OTROS',
              y: 14.85416667,
              drilldown: 'OTROS',
            },
            {
              name: 'REGISTROS ELECTRICOS ',
              y: 1.5625,
              drilldown: 'REGISTROS ELECTRICOS ',
            },
            {
              name: 'REPARA SISTEMA MECANICO',
              y: 0.125,
              drilldown: 'REPARA SISTEMA MECANICO',
            },
            {
              name: 'REPARA TOP DRIVE',
              y: 1.875,
              drilldown: 'REPARA TOP DRIVE',
            },
            {
              name: 'REPARA SISTEMA HIDRAULICO',
              y: 0.666666667,
              drilldown: 'REPARA SISTEMA HIDRAULICO',
            },
            {
              name: 'BOP Y CSC',
              y: 0.145833333,
              drilldown: 'BOP Y CSC',
            },
            {
              name: 'REPARA BOMBAS',
              y: 0.166666667,
              drilldown: 'REPARA BOMBAS',
            },
            {
              name: 'SIDETRACK',
              y: 25.75,
              drilldown: 'SIDETRACK',
            },
          ],
        },
      ],
    },
  },
  {
    series: [
      {
        name: 'NPT',
        colorByPoint: true,
        data: [
          {
            name: 'Productivo',
            y: 27.9,
            drilldown: 'p',
          },
          {
            name: 'No Productivo',
            y: 3.5,
            drilldown: 'np',
          },
        ],
      },
    ],
    drilldown: {
      drillUpButton: {
        text: '<<Regresar',
        position: {
          align: 'left',
          verticalAlign: 'top',
        },
      },
      series: [
        {
          id: 'p',
          name: 'Operaciones',
          data: [
            {
              'ARMAR BHA': 'BAJAR BHA A FONDO',
              '0.395833333': 1.416666667,
              'ARMAR BHA': 'BAJAR BHA A FONDO',
            },
            {
              'ARMAR BHA': 'BAJAR TR',
              '0.395833333': 1.625,
              'ARMAR BHA': 'BAJAR TR',
            },
            {
              'ARMAR BHA': 'CEMENTAR TR',
              '0.395833333': 0.333333333,
              'ARMAR BHA': 'CEMENTAR TR',
            },
            {
              'ARMAR BHA': 'CIRCULAR',
              '0.395833333': 1.291666667,
              'ARMAR BHA': 'CIRCULAR',
            },
            {
              'ARMAR BHA': 'DESLIZA Y CORTA CABLE',
              '0.395833333': 0.083333333,
              'ARMAR BHA': 'DESLIZA Y CORTA CABLE',
            },
            {
              'ARMAR BHA': 'DESMANTELAR BOPS y CSC',
              '0.395833333': 0.333333333,
              'ARMAR BHA': 'DESMANTELAR BOPS y CSC',
            },
            {
              'ARMAR BHA': 'DESMANTELAR EQUIPO DE CEMENTACIONES',
              '0.395833333': 0.083333333,
              'ARMAR BHA': 'DESMANTELAR EQUIPO DE CEMENTACIONES',
            },
            {
              'ARMAR BHA': 'DESMANTELAR EQUIPO PARA BAJAR TR',
              '0.395833333': 0.083333333,
              'ARMAR BHA': 'DESMANTELAR EQUIPO PARA BAJAR TR',
            },
            {
              'ARMAR BHA': 'INST UNIDADES DE CEMENTACION',
              '0.395833333': 0.083333333,
              'ARMAR BHA': 'INST UNIDADES DE CEMENTACION',
            },
            {
              'ARMAR BHA': 'INSTALAR  BOP y CSC',
              '0.395833333': 1.083333333,
              'ARMAR BHA': 'INSTALAR  BOP y CSC',
            },
            {
              'ARMAR BHA': 'INSTALAR EQUIPO PARA BAJAR TR',
              '0.395833333': 0.208333333,
              'ARMAR BHA': 'INSTALAR EQUIPO PARA BAJAR TR',
            },
            {
              'ARMAR BHA': 'INSTALAR/RECUPERAR BUJE DE DESGASTE ',
              '0.395833333': 0.125,
              'ARMAR BHA': 'INSTALAR/RECUPERAR BUJE DE DESGASTE ',
            },
            {
              'ARMAR BHA': 'LIMPIEZA SUPERFICIAL',
              '0.395833333': 0.375,
              'ARMAR BHA': 'LIMPIEZA SUPERFICIAL',
            },
            {
              'ARMAR BHA': 'OTROS',
              '0.395833333': 5.854166667,
              'ARMAR BHA': 'OTROS',
            },
            {
              'ARMAR BHA': 'PERFORAR ',
              '0.395833333': 9.270833333,
              'ARMAR BHA': 'PERFORAR ',
            },
            {
              'ARMAR BHA': 'PERFORAR ACCESORIOS / CEMENTO',
              '0.395833333': 0.25,
              'ARMAR BHA': 'PERFORAR ACCESORIOS / CEMENTO',
            },
            {
              'ARMAR BHA': 'PROBAR BOP y CSC',
              '0.395833333': 0.6875,
              'ARMAR BHA': 'PROBAR BOP y CSC',
            },
            {
              'ARMAR BHA': 'SACAR BHA A SUPERFICIE',
              '0.395833333': 2.5625,
              'ARMAR BHA': 'SACAR BHA A SUPERFICIE',
            },
            {
              'ARMAR BHA': 'SIMULACROS Y PLATICA DE SEGURIDAD',
              '0.395833333': 0.645833333,
              'ARMAR BHA': 'SIMULACROS Y PLATICA DE SEGURIDAD',
            },
            {
              'ARMAR BHA': 'TOMAR REGISTROS ELECTRICOS ',
              '0.395833333': 0.979166667,
              'ARMAR BHA': 'TOMAR REGISTROS ELECTRICOS ',
            },
            {
              'ARMAR BHA': 'REALIZAR PRUEBA DE INTEGRIDAD/GOTEO A LA FORMACIÓN',
              '0.395833333': 0.083333333,
              'ARMAR BHA': 'REALIZAR PRUEBA DE INTEGRIDAD/GOTEO A LA FORMACIÓN',
            },
            {
              'ARMAR BHA': 'PRUEBA HERMETICIDAD DE TR',
              '0.395833333': 0.0625,
              'ARMAR BHA': 'PRUEBA HERMETICIDAD DE TR',
            },
          ],
        },
        {
          id: 'np',
          name: 'Operaciones',
          data: [
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'DIRECCIONAL ',
              },
              '1.125': 0.083333333,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'OTROS',
              },
              '1.125': 0.333333333,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'REGISTROS ELECTRICOS ',
              },
              '1.125': 0.25,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'REPARA TOP DRIVE',
              },
              '1.125': 0.979166667,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'REPARA SISTEMA HIDRAULICO',
              },
              '1.125': 0.041666667,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'BOP Y CSC',
              },
              '1.125': 0.145833333,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'REPARA BOMBAS',
              },
              '1.125': 0.104166667,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'OTROS PROBLEMAS ',
              },
              '1.125': 0.333333333,
            },
          ],
        },
      ],
    },
  },
  {
    series: [
      {
        name: 'NPT',
        colorByPoint: true,
        data: [
          {
            name: 'Productivo',
            y: 53.7,
            drilldown: 'p',
          },
          {
            name: 'No Productivo',
            y: 4.6,
            drilldown: 'np',
          },
        ],
      },
    ],
    drilldown: {
      drillUpButton: {
        text: '<<Regresar',
        position: {
          align: 'left',
          verticalAlign: 'top',
        },
      },
      series: [
        {
          id: 'p',
          name: 'Operaciones',
          data: [
            {
              name: 'ARMAR BHA',
              y: 1.395833333,
              drilldown: 'ARMAR BHA',
            },
            {
              name: 'BAJAR BHA A FONDO',
              y: 6.708333333,
              drilldown: 'BAJAR BHA A FONDO',
            },
            {
              name: 'BAJAR TR',
              y: 1.875,
              drilldown: 'BAJAR TR',
            },
            {
              name: 'CEMENTAR TR',
              y: 0.354166667,
              drilldown: 'CEMENTAR TR',
            },
            {
              name: 'CIRCULAR',
              y: 2.166666667,
              drilldown: 'CIRCULAR',
            },
            {
              name: 'CORTA TR / INSTALAR CABEZAL',
              y: 0.125,
              drilldown: 'CORTA TR / INSTALAR CABEZAL',
            },
            {
              name: 'CORTE DE NUCLEOS CONVENCIONALES',
              y: 0.479166667,
              drilldown: 'CORTE DE NUCLEOS CONVENCIONALES',
            },
            {
              name: 'DESMANTELAR EQUIPO DE CEMENTACIONES',
              y: 0.145833333,
              drilldown: 'DESMANTELAR EQUIPO DE CEMENTACIONES',
            },
            {
              name: 'DESMANTELAR EQUIPO PARA BAJAR TR',
              y: 0.083333333,
              drilldown: 'DESMANTELAR EQUIPO PARA BAJAR TR',
            },
            {
              name: 'INST UNIDADES DE CEMENTACION',
              y: 0.145833333,
              drilldown: 'INST UNIDADES DE CEMENTACION',
            },
            {
              name: 'INSTALA /DESINSTALA CHAROLA ECOLOGICA Y LINEA DE FLOTE',
              y: 0.125,
              drilldown: 'INSTALA /DESINSTALA CHAROLA ECOLOGICA Y LINEA DE FLOTE',
            },
            {
              name: 'INSTALAR  BOP y CSC',
              y: 0.770833333,
              drilldown: 'INSTALAR  BOP y CSC',
            },
            {
              name: 'INSTALAR EQUIPO PARA BAJAR TR',
              y: 0.166666667,
              drilldown: 'INSTALAR EQUIPO PARA BAJAR TR',
            },
            {
              name: 'INSTALAR Y PROBAR PACK OFF',
              y: 0.041666667,
              drilldown: 'INSTALAR Y PROBAR PACK OFF',
            },
            {
              name: 'INSTALAR/RECUPERAR BUJE DE DESGASTE ',
              y: 0.125,
              drilldown: 'INSTALAR/RECUPERAR BUJE DE DESGASTE ',
            },
            {
              name: 'LIMPIEZA SUPERFICIAL',
              y: 0.041666667,
              drilldown: 'LIMPIEZA SUPERFICIAL',
            },
            {
              name: 'OTROS',
              y: 0.645833333,
              drilldown: 'OTROS',
            },
            {
              name: 'PERFORAR ',
              y: 18.08333333,
              drilldown: 'PERFORAR ',
            },
            {
              name: 'PERFORAR ACCESORIOS / CEMENTO',
              y: 0.208333333,
              drilldown: 'PERFORAR ACCESORIOS / CEMENTO',
            },
            {
              name: 'PROBAR BOP y CSC',
              y: 0.104166667,
              drilldown: 'PROBAR BOP y CSC',
            },
            {
              name: 'QUEBRAR BHA',
              y: 0.354166667,
              drilldown: 'QUEBRAR BHA',
            },
            {
              name: 'SACAR BHA A SUPERFICIE',
              y: 5.395833333,
              drilldown: 'SACAR BHA A SUPERFICIE',
            },
            {
              name: 'SIMULACROS Y PLATICA DE SEGURIDAD',
              y: 0.4375,
              drilldown: 'SIMULACROS Y PLATICA DE SEGURIDAD',
            },
            {
              name: 'TOMAR REGISTROS ELECTRICOS ',
              y: 4.645833333,
              drilldown: 'TOMAR REGISTROS ELECTRICOS ',
            },
            {
              name: 'VIAJE CORTO',
              y: 0.770833333,
              drilldown: 'VIAJE CORTO',
            },
            {
              name: 'REALIZAR PRUEBA DE INTEGRIDAD/GOTEO A LA FORMACIÓN',
              y: 0.0625,
              drilldown: 'REALIZAR PRUEBA DE INTEGRIDAD/GOTEO A LA FORMACIÓN',
            },
            {
              name: 'PRUEBA HERMETICIDAD DE TR',
              y: 0.104166667,
              drilldown: 'PRUEBA HERMETICIDAD DE TR',
            },
            {
              name: 'DESCARGO INFORMACION HTA MWD/LWD',
              y: 0.041666667,
              drilldown: 'DESCARGO INFORMACION HTA MWD/LWD',
            },
            {
              name: 'INSTALA/DESINSTALA HTA DE REGISTROS ELECTRICOS',
              y: 0.5625,
              drilldown: 'INSTALA/DESINSTALA HTA DE REGISTROS ELECTRICOS',
            },
            {
              name: 'LEVANTA HTA DE REGISTROS',
              y: 1.6875,
              drilldown: 'LEVANTA HTA DE REGISTROS',
            },
            {
              name: 'VIAJE DE CALIBRACION',
              y: 0.520833333,
              drilldown: 'VIAJE DE CALIBRACION',
            },
            {
              name: 'INSTALO COLGADOR',
              y: 0.041666667,
              drilldown: 'INSTALO COLGADOR',
            },
            {
              name: 'SOLTO CANICA',
              y: 0.020833333,
              drilldown: 'SOLTO CANICA',
            },
            {
              name: 'EMPACO LINER',
              y: 0.041666667,
              drilldown: 'EMPACO LINER',
            },
            {
              name: 'SACA SOLTADOR A SUPERFICIE',
              y: 0.270833333,
              drilldown: 'SACA SOLTADOR A SUPERFICIE',
            },
            {
              name: 'TRABAJOS CON TF',
              y: 4.979166667,
              drilldown: 'TRABAJOS CON TF',
            },
          ],
        },
        {
          id: 'np',
          name: 'Operaciones',
          data: [
            {
              name: 'ACONDICIONA AGUJERO / REPASA',
              y: 1.541666667,
              drilldown: 'ACONDICIONA AGUJERO / REPASA',
            },
            {
              name: 'DIRECCIONAL ',
              y: 1.083333333,
              drilldown: 'DIRECCIONAL ',
            },
            {
              name: 'OTROS',
              y: 0.708333333,
              drilldown: 'OTROS',
            },
            {
              name: 'REPARA BOMBAS',
              y: 0.041666667,
              drilldown: 'REPARA BOMBAS',
            },
            {
              name: 'ESPERA FRAGUADO',
              y: 0.375,
              drilldown: 'ESPERA FRAGUADO',
            },
            {
              name: 'VIAJE DE LIMPIEZA',
              y: 0.25,
              drilldown: 'VIAJE DE LIMPIEZA',
            },
            {
              name: 'GASIFICACION CONTROL DE POZO',
              y: 0.479166667,
              drilldown: 'GASIFICACION CONTROL DE POZO',
            },
            {
              name: 'ESPERA SUMINISTROS Y/O SERVICIOS',
              y: 0.125,
              drilldown: 'ESPERA SUMINISTROS Y/O SERVICIOS',
            },
          ],
        },
      ],
    },
  },
  {
    series: [
      {
        name: 'NPT',
        colorByPoint: true,
        data: [
          {
            name: 'Productivo',
            y: 32.4,
            drilldown: 'p',
          },
          {
            name: 'No Productivo',
            y: 8.04,
            drilldown: 'np',
          },
        ],
      },
    ],
    drilldown: {
      drillUpButton: {
        text: '<<Regresar',
        position: {
          align: 'left',
          verticalAlign: 'top',
        },
      },
      series: [
        {
          id: 'p',
          name: 'Operaciones',
          data: [
            {
              name: 'ARMAR BHA',
              y: 0.916666667,
              drilldown: 'ARMAR BHA',
            },
            {
              name: 'BAJAR BHA A FONDO',
              y: 2.958333333,
              drilldown: 'BAJAR BHA A FONDO',
            },
            {
              name: 'BAJAR TR',
              y: 1.5,
              drilldown: 'BAJAR TR',
            },
            {
              name: 'CAMBIAR Y PROBAR RAMS',
              y: 0.145833333,
              drilldown: 'CAMBIAR Y PROBAR RAMS',
            },
            {
              name: 'CEMENTAR TR',
              y: 0.416666667,
              drilldown: 'CEMENTAR TR',
            },
            {
              name: 'CIRCULAR',
              y: 1.3125,
              drilldown: 'CIRCULAR',
            },
            {
              name: 'CORTA TR / INSTALAR CABEZAL',
              y: 0.145833333,
              drilldown: 'CORTA TR / INSTALAR CABEZAL',
            },
            {
              name: 'CORTE DE NUCLEOS CONVENCIONALES',
              y: 0.083333333,
              drilldown: 'CORTE DE NUCLEOS CONVENCIONALES',
            },
            {
              name: 'DESLIZA Y CORTA CABLE',
              y: 0.041666667,
              drilldown: 'DESLIZA Y CORTA CABLE',
            },
            {
              name: 'DESMANTELAR BOPS y CSC',
              y: 0.041666667,
              drilldown: 'DESMANTELAR BOPS y CSC',
            },
            {
              name: 'DESMANTELAR EQUIPO DE CEMENTACIONES',
              y: 0.0625,
              drilldown: 'DESMANTELAR EQUIPO DE CEMENTACIONES',
            },
            {
              name: 'DESMANTELAR EQUIPO PARA BAJAR TR',
              y: 0.0625,
              drilldown: 'DESMANTELAR EQUIPO PARA BAJAR TR',
            },
            {
              name: 'INST UNIDADES DE CEMENTACION',
              y: 0.083333333,
              drilldown: 'INST UNIDADES DE CEMENTACION',
            },
            {
              name: 'INSTALA /DESINSTALA CHAROLA ECOLOGICA Y LINEA DE FLOTE',
              y: 0.1875,
              drilldown: 'INSTALA /DESINSTALA CHAROLA ECOLOGICA Y LINEA DE FLOTE',
            },
            {
              name: 'INSTALAR  BOP y CSC',
              y: 0.958333333,
              drilldown: 'INSTALAR  BOP y CSC',
            },
            {
              name: 'INSTALAR EQUIPO PARA BAJAR TR',
              y: 0.104166667,
              drilldown: 'INSTALAR EQUIPO PARA BAJAR TR',
            },
            {
              name: 'INSTALAR Y PROBAR PACK OFF',
              y: 0.041666667,
              drilldown: 'INSTALAR Y PROBAR PACK OFF',
            },
            {
              name: 'INSTALAR/RECUPERAR BUJE DE DESGASTE ',
              y: 0.104166667,
              drilldown: 'INSTALAR/RECUPERAR BUJE DE DESGASTE ',
            },
            {
              name: 'LIMPIEZA SUPERFICIAL',
              y: 0.208333333,
              drilldown: 'LIMPIEZA SUPERFICIAL',
            },
            {
              name: 'OTROS',
              y: 1.541666667,
              drilldown: 'OTROS',
            },
            {
              name: 'PERFORAR ',
              y: 12.45833333,
              drilldown: 'PERFORAR ',
            },
            {
              name: 'PERFORAR ACCESORIOS / CEMENTO',
              y: 0.208333333,
              drilldown: 'PERFORAR ACCESORIOS / CEMENTO',
            },
            {
              name: 'PROBAR BOP y CSC',
              y: 0.229166667,
              drilldown: 'PROBAR BOP y CSC',
            },
            {
              name: 'SACAR BHA A SUPERFICIE',
              y: 3.625,
              drilldown: 'SACAR BHA A SUPERFICIE',
            },
            {
              name: 'SIMULACROS Y PLATICA DE SEGURIDAD',
              y: 0.354166667,
              drilldown: 'SIMULACROS Y PLATICA DE SEGURIDAD',
            },
            {
              name: 'TOMAR REGISTROS ELECTRICOS ',
              y: 4.1875,
              drilldown: 'TOMAR REGISTROS ELECTRICOS ',
            },
            {
              name: 'VIAJE CORTO',
              y: 0.458333333,
              drilldown: 'VIAJE CORTO',
            },
            {
              name: 'PRUEBA HERMETICIDAD DE TR',
              y: 0.020833333,
              drilldown: 'PRUEBA HERMETICIDAD DE TR',
            },
          ],
        },
        {
          id: 'np',
          name: 'Operaciones',
          data: [
            {
              name: 'ACONDICIONA AGUJERO / REPASA',
              y: 0.104166667,
              drilldown: 'ACONDICIONA AGUJERO / REPASA',
            },
            {
              name: 'DIRECCIONAL ',
              y: 2.416666667,
              drilldown: 'DIRECCIONAL ',
            },
            {
              name: 'OTROS',
              y: 1.3125,
              drilldown: 'OTROS',
            },
            {
              name: 'REGISTROS ELECTRICOS ',
              y: 0.395833333,
              drilldown: 'REGISTROS ELECTRICOS ',
            },
            {
              name: 'REPARA TOP DRIVE',
              y: 0.541666667,
              drilldown: 'REPARA TOP DRIVE',
            },
            {
              name: 'REPARA SISTEMA HIDRAULICO',
              y: 0.0625,
              drilldown: 'REPARA SISTEMA HIDRAULICO',
            },
            {
              name: 'REPARA BOMBAS',
              y: 0.458333333,
              drilldown: 'REPARA BOMBAS',
            },
            {
              name: 'ESPERA FRAGUADO',
              y: 0.75,
              drilldown: 'ESPERA FRAGUADO',
            },
            {
              name: 'OTROS PROBLEMAS ',
              y: 0.104166667,
              drilldown: 'OTROS PROBLEMAS ',
            },
            {
              name: 'TUBERIA PEGADA',
              y: 1.145833333,
              drilldown: 'TUBERIA PEGADA',
            },
            {
              name: 'REPARA SISTEMA ELECTRICO',
              y: 0.041666667,
              drilldown: 'REPARA SISTEMA ELECTRICO',
            },
            {
              name: 'ESPERA POR ORDENES OTROS',
              y: 0.708333333,
              drilldown: 'ESPERA POR ORDENES OTROS',
            },
          ],
        },
      ],
    },
  },
  {
    series: [
      {
        name: 'NPT',
        colorByPoint: true,
        data: [
          {
            name: 'Productivo',
            y: 47.8,
            drilldown: 'p',
          },
          {
            name: 'No Productivo',
            y: 3.8,
            drilldown: 'np',
          },
        ],
      },
    ],
    drilldown: {
      drillUpButton: {
        text: '<<Regresar',
        position: {
          align: 'left',
          verticalAlign: 'top',
        },
      },
      series: [
        {
          id: 'p',
          name: 'Operaciones',
          data: [
            {
              name: 'ARMAR BHA',
              y: 1.479166667,
              drilldown: 'ARMAR BHA',
            },
            {
              name: 'BAJAR BHA A FONDO',
              y: 5.270833333,
              drilldown: 'BAJAR BHA A FONDO',
            },
            {
              name: 'BAJAR TR',
              y: 1.479166667,
              drilldown: 'BAJAR TR',
            },
            {
              name: 'CEMENTAR TR',
              y: 0.3125,
              drilldown: 'CEMENTAR TR',
            },
            {
              name: 'CIRCULAR',
              y: 0.916666667,
              drilldown: 'CIRCULAR',
            },
            {
              name: 'CORTA TR / INSTALAR CABEZAL',
              y: 0.75,
              drilldown: 'CORTA TR / INSTALAR CABEZAL',
            },
            {
              name: 'DESMANTELAR EQUIPO DE CEMENTACIONES',
              y: 0.083333333,
              drilldown: 'DESMANTELAR EQUIPO DE CEMENTACIONES',
            },
            {
              name: 'DESMANTELAR EQUIPO PARA BAJAR TR',
              y: 0.0625,
              drilldown: 'DESMANTELAR EQUIPO PARA BAJAR TR',
            },
            {
              name: 'INST UNIDADES DE CEMENTACION',
              y: 0.125,
              drilldown: 'INST UNIDADES DE CEMENTACION',
            },
            {
              name: 'INSTALA /DESINSTALA CHAROLA ECOLOGICA Y LINEA DE FLOTE',
              y: 0.5625,
              drilldown: 'INSTALA /DESINSTALA CHAROLA ECOLOGICA Y LINEA DE FLOTE',
            },
            {
              name: 'INSTALAR  BOP y CSC',
              y: 0.375,
              drilldown: 'INSTALAR  BOP y CSC',
            },
            {
              name: 'INSTALAR EQUIPO PARA BAJAR TR',
              y: 0.1875,
              drilldown: 'INSTALAR EQUIPO PARA BAJAR TR',
            },
            {
              name: 'INSTALAR/RECUPERAR BUJE DE DESGASTE ',
              y: 0.083333333,
              drilldown: 'INSTALAR/RECUPERAR BUJE DE DESGASTE ',
            },
            {
              name: 'LIMPIEZA SUPERFICIAL',
              y: 0.166666667,
              drilldown: 'LIMPIEZA SUPERFICIAL',
            },
            {
              name: 'OTROS',
              y: 2.4375,
              drilldown: 'OTROS',
            },
            {
              name: 'PERFORAR ',
              y: 24.54166667,
              drilldown: 'PERFORAR ',
            },
            {
              name: 'PERFORAR ACCESORIOS / CEMENTO',
              y: 0.708333333,
              drilldown: 'PERFORAR ACCESORIOS / CEMENTO',
            },
            {
              name: 'PROBAR BOP y CSC',
              y: 0.104166667,
              drilldown: 'PROBAR BOP y CSC',
            },
            {
              name: 'QUEBRAR BHA',
              y: 0.125,
              drilldown: 'QUEBRAR BHA',
            },
            {
              name: 'SACAR BHA A SUPERFICIE',
              y: 5.375,
              drilldown: 'SACAR BHA A SUPERFICIE',
            },
            {
              name: 'SIMULACROS Y PLATICA DE SEGURIDAD',
              y: 0.395833333,
              drilldown: 'SIMULACROS Y PLATICA DE SEGURIDAD',
            },
            {
              name: 'TOMAR REGISTROS ELECTRICOS ',
              y: 1.8125,
              drilldown: 'TOMAR REGISTROS ELECTRICOS ',
            },
            {
              name: 'VIAJE CORTO',
              y: 0.416666667,
              drilldown: 'VIAJE CORTO',
            },
            {
              name: 'PRUEBA HERMETICIDAD DE TR',
              y: 0.083333333,
              drilldown: 'PRUEBA HERMETICIDAD DE TR',
            },
          ],
        },
        {
          id: 'np',
          name: 'Operaciones',
          data: [
            {
              name: 'ACONDICIONA AGUJERO / REPASA',
              y: 2.041666667,
              drilldown: 'ACONDICIONA AGUJERO / REPASA',
            },
            {
              name: 'DIRECCIONAL ',
              y: 1.083333333,
              drilldown: 'DIRECCIONAL ',
            },
            {
              name: 'OTROS',
              y: 0.166666667,
              drilldown: 'OTROS',
            },
            {
              name: 'REPARA SISTEMA HIDRAULICO',
              y: 0.020833333,
              drilldown: 'REPARA SISTEMA HIDRAULICO',
            },
            {
              name: 'OTROS PROBLEMAS ',
              y: 0.104166667,
              drilldown: 'OTROS PROBLEMAS ',
            },
            {
              name: 'BARRENAS (VIAJE POR BAJO ROP)',
              y: 0.479166667,
              drilldown: 'BARRENAS (VIAJE POR BAJO ROP)',
            },
          ],
        },
      ],
    },
  },
  {
    series: [
      {
        name: 'NPT',
        colorByPoint: true,
        data: [
          {
            name: 'Productivo',
            y: 20.1,
            drilldown: 'p',
          },
          {
            name: 'No Productivo',
            y: 2.0,
            drilldown: 'np',
          },
        ],
      },
    ],
    drilldown: {
      drillUpButton: {
        text: '<<Regresar',
        position: {
          align: 'left',
          verticalAlign: 'top',
        },
      },
      series: [
        {
          id: 'p',
          name: 'Operaciones',
          data: [
            {
              name: 'ARMAR BHA',
              y: 0.354166667,
              drilldown: 'ARMAR BHA',
            },
            {
              name: 'BAJAR BHA A FONDO',
              y: 0.458333333,
              drilldown: 'BAJAR BHA A FONDO',
            },
            {
              name: 'BAJAR TR',
              y: 1.083333333,
              drilldown: 'BAJAR TR',
            },
            {
              name: 'CAMBIAR Y PROBAR RAMS',
              y: 0.083333333,
              drilldown: 'CAMBIAR Y PROBAR RAMS',
            },
            {
              name: 'CEMENTAR TR',
              y: 0.3125,
              drilldown: 'CEMENTAR TR',
            },
            {
              name: 'CIRCULAR',
              y: 1.208333333,
              drilldown: 'CIRCULAR',
            },
            {
              name: 'CORTA TR / INSTALAR CABEZAL',
              y: 0.375,
              drilldown: 'CORTA TR / INSTALAR CABEZAL',
            },
            {
              name: 'DESLIZA Y CORTA CABLE',
              y: 0.125,
              drilldown: 'DESLIZA Y CORTA CABLE',
            },
            {
              name: 'DESMANTELAR BOPS y CSC',
              y: 0.395833333,
              drilldown: 'DESMANTELAR BOPS y CSC',
            },
            {
              name: 'DESMANTELAR EQUIPO DE CEMENTACIONES',
              y: 0.041666667,
              drilldown: 'DESMANTELAR EQUIPO DE CEMENTACIONES',
            },
            {
              name: 'DESMANTELAR EQUIPO PARA BAJAR TR',
              y: 0.020833333,
              drilldown: 'DESMANTELAR EQUIPO PARA BAJAR TR',
            },
            {
              name: 'INST UNIDADES DE CEMENTACION',
              y: 0.0625,
              drilldown: 'INST UNIDADES DE CEMENTACION',
            },
            {
              name: 'INSTALAR  BOP y CSC',
              y: 0.541666667,
              drilldown: 'INSTALAR  BOP y CSC',
            },
            {
              name: 'INSTALAR EQUIPO PARA BAJAR TR',
              y: 0.104166667,
              drilldown: 'INSTALAR EQUIPO PARA BAJAR TR',
            },
            {
              name: 'INSTALAR Y PROBAR PACK OFF',
              y: 0.0625,
              drilldown: 'INSTALAR Y PROBAR PACK OFF',
            },
            {
              name: 'INSTALAR/RECUPERAR BUJE DE DESGASTE ',
              y: 0.104166667,
              drilldown: 'INSTALAR/RECUPERAR BUJE DE DESGASTE ',
            },
            {
              name: 'LIMPIEZA SUPERFICIAL',
              y: 0.083333333,
              drilldown: 'LIMPIEZA SUPERFICIAL',
            },
            {
              name: 'OTROS',
              y: 0.75,
              drilldown: 'OTROS',
            },
            {
              name: 'PERFORAR ',
              y: 7.354166667,
              drilldown: 'PERFORAR ',
            },
            {
              name: 'PERFORAR ACCESORIOS / CEMENTO',
              y: 0.333333333,
              drilldown: 'PERFORAR ACCESORIOS / CEMENTO',
            },
            {
              name: 'PROBAR BOP y CSC',
              y: 0.0625,
              drilldown: 'PROBAR BOP y CSC',
            },
            {
              name: 'SACAR BHA A SUPERFICIE',
              y: 1.958333333,
              drilldown: 'SACAR BHA A SUPERFICIE',
            },
            {
              name: 'SIMULACROS Y PLATICA DE SEGURIDAD',
              y: 0.291666667,
              drilldown: 'SIMULACROS Y PLATICA DE SEGURIDAD',
            },
            {
              name: 'TOMAR REGISTROS ELECTRICOS ',
              y: 1.625,
              drilldown: 'TOMAR REGISTROS ELECTRICOS ',
            },
            {
              name: 'VIAJE CORTO',
              y: 1.4375,
              drilldown: 'VIAJE CORTO',
            },
            {
              name: 'PRUEBA HERMETICIDAD DE TR',
              y: 0.041666667,
              drilldown: 'PRUEBA HERMETICIDAD DE TR',
            },
            {
              name: 'CIRCULAR PARA CEMENTAR ',
              y: 0.0625,
              drilldown: 'CIRCULAR PARA CEMENTAR ',
            },
            {
              name: 'REGISTROS ADICIONALES',
              y: 0.770833333,
              drilldown: 'REGISTROS ADICIONALES',
            },
          ],
        },
        {
          id: 'np',
          name: 'Operaciones',
          data: [
            {
              name: 'DIRECCIONAL ',
              y: 0.166666667,
              drilldown: 'DIRECCIONAL ',
            },
            {
              name: 'OTROS',
              y: 1.354166667,
              drilldown: 'OTROS',
            },
            {
              name: 'ESPERA FRAGUADO',
              y: 0.479166667,
              drilldown: 'ESPERA FRAGUADO',
            },
          ],
        },
      ],
    },
  },
  {
    series: [
      {
        name: 'NPT',
        colorByPoint: true,
        data: [
          {
            name: 'Productivo',
            y: 39.8,
            drilldown: 'p',
          },
          {
            name: 'No Productivo',
            y: 2.9,
            drilldown: 'np',
          },
        ],
      },
    ],
    drilldown: {
      drillUpButton: {
        text: '<<Regresar',
        position: {
          align: 'left',
          verticalAlign: 'top',
        },
      },
      series: [
        {
          id: 'p',
          name: 'Operaciones',
          data: [
            {
              name: 'ARMAR BHA',
              y: 0.729166667,
              drilldown: 'ARMAR BHA',
            },
            {
              name: 'BAJAR BHA A FONDO',
              y: 3.25,
              drilldown: 'BAJAR BHA A FONDO',
            },
            {
              name: 'BAJAR TR',
              y: 2.583333333,
              drilldown: 'BAJAR TR',
            },
            {
              name: 'CAMBIAR Y PROBAR RAMS',
              y: 0.1875,
              drilldown: 'CAMBIAR Y PROBAR RAMS',
            },
            {
              name: 'CEMENTAR TR',
              y: 0.270833333,
              drilldown: 'CEMENTAR TR',
            },
            {
              name: 'CIRCULAR',
              y: 1.541666667,
              drilldown: 'CIRCULAR',
            },
            {
              name: 'CORTA TR / INSTALAR CABEZAL',
              y: 0.854166667,
              drilldown: 'CORTA TR / INSTALAR CABEZAL',
            },
            {
              name: 'DESLIZA Y CORTA CABLE',
              y: 0.145833333,
              drilldown: 'DESLIZA Y CORTA CABLE',
            },
            {
              name: 'DESMANTELAR BOPS y CSC',
              y: 0.520833333,
              drilldown: 'DESMANTELAR BOPS y CSC',
            },
            {
              name: 'DESMANTELAR EQUIPO DE CEMENTACIONES',
              y: 0.166666667,
              drilldown: 'DESMANTELAR EQUIPO DE CEMENTACIONES',
            },
            {
              name: 'DESMANTELAR EQUIPO PARA BAJAR TR',
              y: 0.020833333,
              drilldown: 'DESMANTELAR EQUIPO PARA BAJAR TR',
            },
            {
              name: 'INST UNIDADES DE CEMENTACION',
              y: 0.3125,
              drilldown: 'INST UNIDADES DE CEMENTACION',
            },
            {
              name: 'INSTALA /DESINSTALA CHAROLA ECOLOGICA Y LINEA DE FLOTE',
              y: 0.1875,
              drilldown: 'INSTALA /DESINSTALA CHAROLA ECOLOGICA Y LINEA DE FLOTE',
            },
            {
              name: 'INSTALAR  BOP y CSC',
              y: 0.375,
              drilldown: 'INSTALAR  BOP y CSC',
            },
            {
              name: 'INSTALAR EQUIPO PARA BAJAR TR',
              y: 0.104166667,
              drilldown: 'INSTALAR EQUIPO PARA BAJAR TR',
            },
            {
              name: 'INSTALAR Y PROBAR PACK OFF',
              y: 0.104166667,
              drilldown: 'INSTALAR Y PROBAR PACK OFF',
            },
            {
              name: 'INSTALAR/RECUPERAR BUJE DE DESGASTE ',
              y: 0.25,
              drilldown: 'INSTALAR/RECUPERAR BUJE DE DESGASTE ',
            },
            {
              name: 'LIMPIEZA SUPERFICIAL',
              y: 0.083333333,
              drilldown: 'LIMPIEZA SUPERFICIAL',
            },
            {
              name: 'OTROS',
              y: 1.208333333,
              drilldown: 'OTROS',
            },
            {
              name: 'PERFORAR ',
              y: 16.08333333,
              drilldown: 'PERFORAR ',
            },
            {
              name: 'PERFORAR ACCESORIOS / CEMENTO',
              y: 0.1875,
              drilldown: 'PERFORAR ACCESORIOS / CEMENTO',
            },
            {
              name: 'PROBAR BOP y CSC',
              y: 0.291666667,
              drilldown: 'PROBAR BOP y CSC',
            },
            {
              name: 'SACAR BHA A SUPERFICIE',
              y: 3.75,
              drilldown: 'SACAR BHA A SUPERFICIE',
            },
            {
              name: 'SIMULACROS Y PLATICA DE SEGURIDAD',
              y: 0.375,
              drilldown: 'SIMULACROS Y PLATICA DE SEGURIDAD',
            },
            {
              name: 'TOMAR REGISTROS ELECTRICOS ',
              y: 4.958333333,
              drilldown: 'TOMAR REGISTROS ELECTRICOS ',
            },
            {
              name: 'VIAJE CORTO',
              y: 0.833333333,
              drilldown: 'VIAJE CORTO',
            },
            {
              name: 'PRUEBA HERMETICIDAD DE TR',
              y: 0.104166667,
              drilldown: 'PRUEBA HERMETICIDAD DE TR',
            },
            {
              name: 'PRUEBA MOTOR DE FONDO Y MWD',
              y: 0.270833333,
              drilldown: 'PRUEBA MOTOR DE FONDO Y MWD',
            },
            {
              name: 'INSTALAR BONETE Y MEDIO ARBOL',
              y: 0.125,
              drilldown: 'INSTALAR BONETE Y MEDIO ARBOL',
            },
          ],
        },
        {
          id: 'np',
          name: 'Operaciones',
          data: [
            {
              name: 'OTROS',
              y: 2.0625,
              drilldown: 'OTROS',
            },
            {
              name: 'REGISTROS ELECTRICOS ',
              y: 0.770833333,
              drilldown: 'REGISTROS ELECTRICOS ',
            },
            {
              name: 'REPARA SISTEMA HIDRAULICO',
              y: 0.125,
              drilldown: 'REPARA SISTEMA HIDRAULICO',
            },
          ],
        },
      ],
    },
  },
  {
    series: [
      {
        name: 'NPT',
        colorByPoint: true,
        data: [
          {
            name: 'Productivo',
            y: 22,
            drilldown: 'p',
          },
          {
            name: 'No Productivo',
            y: 8.2,
            drilldown: 'np',
          },
        ],
      },
    ],
    drilldown: {
      drillUpButton: {
        text: '<<Regresar',
        position: {
          align: 'left',
          verticalAlign: 'top',
        },
      },
      series: [
        {
          id: 'p',
          name: 'Operaciones',
          data: [
            {
              name: 'ARMAR BHA',
              y: 0.3125,
              drilldown: 'ARMAR BHA',
            },
            {
              name: 'BAJAR BHA A FONDO',
              y: 2.770833333,
              drilldown: 'BAJAR BHA A FONDO',
            },
            {
              name: 'BAJAR TR',
              y: 1.541666667,
              drilldown: 'BAJAR TR',
            },
            {
              name: 'CAMBIAR Y PROBAR RAMS',
              y: 0.125,
              drilldown: 'CAMBIAR Y PROBAR RAMS',
            },
            {
              name: 'CEMENTAR TR',
              y: 0.354166667,
              drilldown: 'CEMENTAR TR',
            },
            {
              name: 'CIRCULAR',
              y: 0.583333333,
              drilldown: 'CIRCULAR',
            },
            {
              name: 'CORTA TR / INSTALAR CABEZAL',
              y: 0.229166667,
              drilldown: 'CORTA TR / INSTALAR CABEZAL',
            },
            {
              name: 'DESLIZA Y CORTA CABLE',
              y: 0.083333333,
              drilldown: 'DESLIZA Y CORTA CABLE',
            },
            {
              name: 'DESMANTELAR BOPS y CSC',
              y: 0.208333333,
              drilldown: 'DESMANTELAR BOPS y CSC',
            },
            {
              name: 'DESMANTELAR EQUIPO DE CEMENTACIONES',
              y: 0.020833333,
              drilldown: 'DESMANTELAR EQUIPO DE CEMENTACIONES',
            },
            {
              name: 'DESMANTELAR EQUIPO PARA BAJAR TR',
              y: 0.125,
              drilldown: 'DESMANTELAR EQUIPO PARA BAJAR TR',
            },
            {
              name: 'INST UNIDADES DE CEMENTACION',
              y: 0.104166667,
              drilldown: 'INST UNIDADES DE CEMENTACION',
            },
            {
              name: 'INSTALA /DESINSTALA CHAROLA ECOLOGICA Y LINEA DE FLOTE',
              y: 0.3125,
              drilldown: 'INSTALA /DESINSTALA CHAROLA ECOLOGICA Y LINEA DE FLOTE',
            },
            {
              name: 'INSTALAR  BOP y CSC',
              y: 0.229166667,
              drilldown: 'INSTALAR  BOP y CSC',
            },
            {
              name: 'INSTALAR EQUIPO PARA BAJAR TR',
              y: 0.145833333,
              drilldown: 'INSTALAR EQUIPO PARA BAJAR TR',
            },
            {
              name: 'INSTALAR Y PROBAR PACK OFF',
              y: 0.0625,
              drilldown: 'INSTALAR Y PROBAR PACK OFF',
            },
            {
              name: 'INSTALAR/RECUPERAR BUJE DE DESGASTE ',
              y: 0.083333333,
              drilldown: 'INSTALAR/RECUPERAR BUJE DE DESGASTE ',
            },
            {
              name: 'LIMPIEZA SUPERFICIAL',
              y: 0.083333333,
              drilldown: 'LIMPIEZA SUPERFICIAL',
            },
            {
              name: 'OTROS',
              y: 0.9375,
              drilldown: 'OTROS',
            },
            {
              name: 'PERFORAR ',
              y: 7.625,
              drilldown: 'PERFORAR ',
            },
            {
              name: 'PERFORAR ACCESORIOS / CEMENTO',
              y: 0.25,
              drilldown: 'PERFORAR ACCESORIOS / CEMENTO',
            },
            {
              name: 'PROBAR BOP y CSC',
              y: 0.166666667,
              drilldown: 'PROBAR BOP y CSC',
            },
            {
              name: 'SACAR BHA A SUPERFICIE',
              y: 1.979166667,
              drilldown: 'SACAR BHA A SUPERFICIE',
            },
            {
              name: 'SIMULACROS Y PLATICA DE SEGURIDAD',
              y: 0.458333333,
              drilldown: 'SIMULACROS Y PLATICA DE SEGURIDAD',
            },
            {
              name: 'TOMAR REGISTROS ELECTRICOS ',
              y: 2,
              drilldown: 'TOMAR REGISTROS ELECTRICOS ',
            },
            {
              name: 'VIAJE CORTO',
              y: 0.3125,
              drilldown: 'VIAJE CORTO',
            },
            {
              name: 'PRUEBA HERMETICIDAD DE TR',
              y: 0.041666667,
              drilldown: 'PRUEBA HERMETICIDAD DE TR',
            },
            {
              name: 'CIRCULAR PARA CEMENTAR ',
              y: 0.041666667,
              drilldown: 'CIRCULAR PARA CEMENTAR ',
            },
            {
              name: 'PRUEBA MOTOR DE FONDO Y MWD',
              y: 0.208333333,
              drilldown: 'PRUEBA MOTOR DE FONDO Y MWD',
            },
            {
              name: 'APRIETA TORNILLERIA DE BOPS',
              y: 0.291666667,
              drilldown: 'APRIETA TORNILLERIA DE BOPS',
            },
            {
              name: 'PREPARA/BOMBEA BACHE',
              y: 0.416666667,
              drilldown: 'PREPARA/BOMBEA BACHE',
            },
            {
              name: 'RETIRA TUBO ANCLA',
              y: 0.020833333,
              drilldown: 'RETIRA TUBO ANCLA',
            },
            {
              name: 'INSTALAR/DESINSTALAR CABEZAL RECUPERABLE',
              y: 0.083333333,
              drilldown: 'INSTALAR/DESINSTALAR CABEZAL RECUPERABLE',
            },
          ],
        },
        {
          id: 'np',
          name: 'Operaciones',
          data: [
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'ARMAR BHA',
              },
              '0.5625': 0.302083333,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'BAJAR BHA A FONDO',
              },
              '0.5625': 1.458333333,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'CIRCULAR',
              },
              '0.5625': 0.020833333,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'DIRECCIONAL ',
              },
              '0.5625': 1.3125,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'OTROS',
              },
              '0.5625': 0.729166667,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'REPARA TOP DRIVE',
              },
              '0.5625': 0.333333333,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'SACAR BHA A SUPERFICIE',
              },
              '0.5625': 1.291666667,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'SIMULACROS Y PLATICA DE SEGURIDAD',
              },
              '0.5625': 0.041666667,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'REPARA BOMBAS',
              },
              '0.5625': 0.145833333,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'ESPERA FRAGUADO',
              },
              '0.5625': 0.645833333,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'OTROS PROBLEMAS ',
              },
              '0.5625': 0.104166667,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'BARRENAS (VIAJE POR BAJO ROP)',
              },
              '0.5625': 0.104166667,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'PRUEBA MOTOR DE FONDO Y MWD',
              },
              '0.5625': 0.052083333,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'CSC Y PRUEBAS ',
              },
              '0.5625': 0.041666667,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'PREPARA/BOMBEA BACHE',
              },
              '0.5625': 0.145833333,
            },
            {
              'ACONDICIONA AGUJERO ': {
                ' REPASA': 'ESPERA POR ORDENES PEMEX',
              },
              '0.5625': 0.916666667,
            },
          ],
        },
      ],
    },
  },
  {
    series: [
      {
        name: 'NPT',
        colorByPoint: true,
        data: [
          {
            name: 'Productivo',
            y: 41.6,
            drilldown: 'p',
          },
          {
            name: 'No Productivo',
            y: 7.6,
            drilldown: 'np',
          },
        ],
      },
    ],
    drilldown: {
      drillUpButton: {
        text: '<<Regresar',
        position: {
          align: 'left',
          verticalAlign: 'top',
        },
      },
      series: [
        {
          id: 'p',
          name: 'Operaciones',
          data: [
            {
              name: 'ARMAR BHA',
              y: 0.770833333,
              drilldown: 'ARMAR BHA',
            },
            {
              name: 'BAJAR BHA A FONDO',
              y: 4.6875,
              drilldown: 'BAJAR BHA A FONDO',
            },
            {
              name: 'BAJAR TR',
              y: 1.125,
              drilldown: 'BAJAR TR',
            },
            {
              name: 'CAMBIAR Y PROBAR RAMS',
              y: 0.208333333,
              drilldown: 'CAMBIAR Y PROBAR RAMS',
            },
            {
              name: 'CEMENTAR TR',
              y: 0.270833333,
              drilldown: 'CEMENTAR TR',
            },
            {
              name: 'CIRCULAR',
              y: 0.791666667,
              drilldown: 'CIRCULAR',
            },
            {
              name: 'CORTA TR / INSTALAR CABEZAL',
              y: 0.125,
              drilldown: 'CORTA TR / INSTALAR CABEZAL',
            },
            {
              name: 'DESLIZA Y CORTA CABLE',
              y: 0.083333333,
              drilldown: 'DESLIZA Y CORTA CABLE',
            },
            {
              name: 'DESMANTELAR BOPS y CSC',
              y: 0.125,
              drilldown: 'DESMANTELAR BOPS y CSC',
            },
            {
              name: 'DESMANTELAR EQUIPO DE CEMENTACIONES',
              y: 0.125,
              drilldown: 'DESMANTELAR EQUIPO DE CEMENTACIONES',
            },
            {
              name: 'DESMANTELAR EQUIPO PARA BAJAR TR',
              y: 0.041666667,
              drilldown: 'DESMANTELAR EQUIPO PARA BAJAR TR',
            },
            {
              name: 'INST UNIDADES DE CEMENTACION',
              y: 0.270833333,
              drilldown: 'INST UNIDADES DE CEMENTACION',
            },
            {
              name: 'INSTALA /DESINSTALA CHAROLA ECOLOGICA Y LINEA DE FLOTE',
              y: 0.333333333,
              drilldown: 'INSTALA /DESINSTALA CHAROLA ECOLOGICA Y LINEA DE FLOTE',
            },
            {
              name: 'INSTALAR  BOP y CSC',
              y: 0.4375,
              drilldown: 'INSTALAR  BOP y CSC',
            },
            {
              name: 'INSTALAR EQUIPO PARA BAJAR TR',
              y: 0.208333333,
              drilldown: 'INSTALAR EQUIPO PARA BAJAR TR',
            },
            {
              name: 'INSTALAR/RECUPERAR BUJE DE DESGASTE ',
              y: 0.125,
              drilldown: 'INSTALAR/RECUPERAR BUJE DE DESGASTE ',
            },
            {
              name: 'LIMPIEZA SUPERFICIAL',
              y: 0.291666667,
              drilldown: 'LIMPIEZA SUPERFICIAL',
            },
            {
              name: 'OTROS',
              y: 0.4375,
              drilldown: 'OTROS',
            },
            {
              name: 'PERFORAR ',
              y: 14.39583333,
              drilldown: 'PERFORAR ',
            },
            {
              name: 'PERFORAR ACCESORIOS / CEMENTO',
              y: 0.1875,
              drilldown: 'PERFORAR ACCESORIOS / CEMENTO',
            },
            {
              name: 'PROBAR BOP y CSC',
              y: 0.1875,
              drilldown: 'PROBAR BOP y CSC',
            },
            {
              name: 'QUEBRAR BHA',
              y: 0.104166667,
              drilldown: 'QUEBRAR BHA',
            },
            {
              name: 'SACAR BHA A SUPERFICIE',
              y: 4.291666667,
              drilldown: 'SACAR BHA A SUPERFICIE',
            },
            {
              name: 'SIMULACROS Y PLATICA DE SEGURIDAD',
              y: 0.541666667,
              drilldown: 'SIMULACROS Y PLATICA DE SEGURIDAD',
            },
            {
              name: 'TOMAR REGISTROS ELECTRICOS ',
              y: 5,
              drilldown: 'TOMAR REGISTROS ELECTRICOS ',
            },
            {
              name: 'VIAJE CORTO',
              y: 0.0625,
              drilldown: 'VIAJE CORTO',
            },
            {
              name: 'REALIZAR PRUEBA DE INTEGRIDAD/GOTEO A LA FORMACIÓN',
              y: 0.0625,
              drilldown: 'REALIZAR PRUEBA DE INTEGRIDAD/GOTEO A LA FORMACIÓN',
            },
            {
              name: 'PRUEBA HERMETICIDAD DE TR',
              y: 0.083333333,
              drilldown: 'PRUEBA HERMETICIDAD DE TR',
            },
            {
              name: 'REGISTROS ADICIONALES',
              y: 0.125,
              drilldown: 'REGISTROS ADICIONALES',
            },
            {
              name: 'INSTALA/DESINSTALA HTA DE REGISTROS ELECTRICOS',
              y: 0.5625,
              drilldown: 'INSTALA/DESINSTALA HTA DE REGISTROS ELECTRICOS',
            },
            {
              name: 'VIAJE DE CALIBRACION',
              y: 2.875,
              drilldown: 'VIAJE DE CALIBRACION',
            },
            {
              name: 'EMPACO LINER',
              y: 0.020833333,
              drilldown: 'EMPACO LINER',
            },
            {
              name: 'SACA SOLTADOR A SUPERFICIE',
              y: 0.729166667,
              drilldown: 'SACA SOLTADOR A SUPERFICIE',
            },
            {
              name: 'PRUEBA MOTOR DE FONDO Y MWD',
              y: 0.1875,
              drilldown: 'PRUEBA MOTOR DE FONDO Y MWD',
            },
            {
              name: 'INSTALAR BONETE Y MEDIO ARBOL',
              y: 0.020833333,
              drilldown: 'INSTALAR BONETE Y MEDIO ARBOL',
            },
            {
              name: 'PREPARA/BOMBEA BACHE',
              y: 0.979166667,
              drilldown: 'PREPARA/BOMBEA BACHE',
            },
            {
              name: 'RETIRA TUBO ANCLA',
              y: 0.041666667,
              drilldown: 'RETIRA TUBO ANCLA',
            },
            {
              name: 'PROBAR CABEZAL',
              y: 0.020833333,
              drilldown: 'PROBAR CABEZAL',
            },
            {
              name: 'INSTALAR/DESINSTALAR DIVERTER',
              y: 0.4375,
              drilldown: 'INSTALAR/DESINSTALAR DIVERTER',
            },
            {
              name: 'MIDE Y CALIBRA HTA DIRECCIONAL',
              y: 0.125,
              drilldown: 'MIDE Y CALIBRA HTA DIRECCIONAL',
            },
            {
              name: 'TOMAR SURVEY',
              y: 0.041666667,
              drilldown: 'TOMAR SURVEY',
            },
            {
              name: 'ANCLO CONJUNTO SOLTADOR',
              y: 0.0625,
              drilldown: 'ANCLO CONJUNTO SOLTADOR',
            },
            {
              name: 'LIBERO SOLTADOR',
              y: 0.041666667,
              drilldown: 'LIBERO SOLTADOR',
            },
            {
              name: 'TERMINA PERFORACION',
              y: 0.020833333,
              drilldown: 'TERMINA PERFORACION',
            },
          ],
        },
        {
          id: 'np',
          name: 'Operaciones',
          data: [
            {
              name: 'DIRECCIONAL ',
              y: 0.791666667,
              drilldown: 'DIRECCIONAL ',
            },
            {
              name: 'OTROS',
              y: 0.125,
              drilldown: 'OTROS',
            },
            {
              name: 'REGISTROS ELECTRICOS ',
              y: 0.104166667,
              drilldown: 'REGISTROS ELECTRICOS ',
            },
            {
              name: 'REPARA BOMBAS',
              y: 0.4375,
              drilldown: 'REPARA BOMBAS',
            },
            {
              name: 'SIDETRACK',
              y: 0.3125,
              drilldown: 'SIDETRACK',
            },
            {
              name: 'FLUIDOS ',
              y: 0.354166667,
              drilldown: 'FLUIDOS ',
            },
            {
              name: 'REPARA PISO DE TRABAJO',
              y: 0.020833333,
              drilldown: 'REPARA PISO DE TRABAJO',
            },
            {
              name: 'OTROS PROBLEMAS ',
              y: 4.916666667,
              drilldown: 'OTROS PROBLEMAS ',
            },
            {
              name: 'CONTROL DE PERDIDA DE CIRCULACION',
              y: 0.541666667,
              drilldown: 'CONTROL DE PERDIDA DE CIRCULACION',
            },
          ],
        },
      ],
    },
  },
];

const Pie = ({ alto, ancho, loading, numero }) => {
  const [configuracion, setConfiguracion] = useState(pieDrilldownBase);
  const graficoRef = useRef(null);

  useEffect(() => {
    let opcion;
    //1=0,7=1,8=2,9=3,10=4,11=5,12=06,13=7,14=8,15=9
    switch (numero) {
      case 1:
        opcion = 0;
        break;
      case 7:
        opcion = 1;
        break;
      case 8:
        opcion = 2;
        break;
      case 9:
        opcion = 3;
        break;
      case 10:
        opcion = 4;
        break;
      case 11:
        opcion = 5;
        break;
      case 12:
        opcion = 6;
        break;
      case 13:
        opcion = 7;
        break;
      case 14:
        opcion = 8;
        break;
      case 15:
        opcion = 9;
        break;
      default:
        break;
    }

    let configDrill = { ...configuracion, ...data[opcion] };
    setConfiguracion(configDrill);
  }, [numero]);

  useEffect(() => {
    configurarPie();
  }, [alto]);

  const configurarPie = () => {
    if (loading == false) {
      graficoRef.current.chart.setSize(ancho - ancho * 0.02, alto - alto * 0.1);
    }
  };

  return loading ? (
    <Spinner alto={alto} ancho={ancho} />
  ) : (
    <div style={{ height: '100%', width: '100%' }}>
      <HighchartsReact ref={graficoRef} highcharts={Highcharts} options={configuracion} allowChartUpdate={true} />
    </div>
  );
};

export default Pie;
