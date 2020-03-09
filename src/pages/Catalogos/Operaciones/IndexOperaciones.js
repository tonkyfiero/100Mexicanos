import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

//import './equipos.css'

const data = [
  {
    Operacion: 'Perforacion',
    Abreviatura: 'Perforacion',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Desmantela',
    Abreviatura: 'Desmantela',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Transporta',
    Abreviatura: 'Transporta',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Instala',
    Abreviatura: 'Instala',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Corte De Nucleos Convencionales',
    Abreviatura: 'Corte De Nucleos Convencionales',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Registros Adicionales',
    Abreviatura: 'Registros Adicionales',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Nucleos De Pared',
    Abreviatura: 'Nucleos De Pared',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Armar Bha',
    Abreviatura: 'Armar Bha',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Quebrar Bha',
    Abreviatura: 'Quebrar Bha',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Mide Y Calibra Hta Direccional',
    Abreviatura: 'Mide Y Calibra Hta Direccional',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Prueba Motor De Fondo Y Mwd',
    Abreviatura: 'Prueba Motor De Fondo Y Mwd',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Cambia Bateria De Mwd/Lwd',
    Abreviatura: 'Cambia Bateria De Mwd/Lwd',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Descargo Informacion Hta Mwd/Lwd',
    Abreviatura: 'Descargo Informacion Hta Mwd/Lwd',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Programa Sistema Rotatorio',
    Abreviatura: 'Programa Sistema Rotatorio',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Quebrar Tuberia',
    Abreviatura: 'Quebrar Tuberia',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Corta Tr / Instalar Cabezal',
    Abreviatura: 'Corta Tr / Instalar Cabezal',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Instalar  Bop Y Csc',
    Abreviatura: 'Instalar  Bop Y Csc',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Probar Bop Y Csc',
    Abreviatura: 'Probar Bop Y Csc',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Instalar/Recuperar Buje De Desgaste ',
    Abreviatura: 'Instalar/Recuperar Buje De Desgaste ',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Cambiar Y Probar Rams',
    Abreviatura: 'Cambiar Y Probar Rams',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Instalar Y Probar Pack Off',
    Abreviatura: 'Instalar Y Probar Pack Off',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Desmantelar Bops Y Csc',
    Abreviatura: 'Desmantelar Bops Y Csc',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Instalar Bonete Y Medio Arbol',
    Abreviatura: 'Instalar Bonete Y Medio Arbol',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Instalar/Desinstalar Cabezal Recuperable',
    Abreviatura: 'Instalar/Desinstalar Cabezal Recuperable',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Instalar/Desinstalar Diverter',
    Abreviatura: 'Instalar/Desinstalar Diverter',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Aprieta Tornilleria De Bops',
    Abreviatura: 'Aprieta Tornilleria De Bops',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Probar Cabezal',
    Abreviatura: 'Probar Cabezal',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Instala Brida Ciega',
    Abreviatura: 'Instala Brida Ciega',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Afloja Tornilleria De Bops',
    Abreviatura: 'Afloja Tornilleria De Bops',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Inst Unidades De Cementacion',
    Abreviatura: 'Inst Unidades De Cementacion',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Circular Para Cementar ',
    Abreviatura: 'Circular Para Cementar ',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Cementar Tr',
    Abreviatura: 'Cementar Tr',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Desmantelar Equipo De Cementaciones',
    Abreviatura: 'Desmantelar Equipo De Cementaciones',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Espera Fraguado',
    Abreviatura: 'Espera Fraguado',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Retira Tubo Ancla',
    Abreviatura: 'Retira Tubo Ancla',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Coloca Txc',
    Abreviatura: 'Coloca Txc',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Instala/Desinstala Cabeza De Cementacion',
    Abreviatura: 'Instala/Desinstala Cabeza De Cementacion',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Circular',
    Abreviatura: 'Circular',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Prepara/Bombea Bache',
    Abreviatura: 'Prepara/Bombea Bache',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Repara Bombas',
    Abreviatura: 'Repara Bombas',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Repara Piso De Trabajo',
    Abreviatura: 'Repara Piso De Trabajo',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Repara Top Drive',
    Abreviatura: 'Repara Top Drive',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Repara Sistema Electrico',
    Abreviatura: 'Repara Sistema Electrico',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Repara Sistema Mecanico',
    Abreviatura: 'Repara Sistema Mecanico',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Repara Sistema Hidraulico',
    Abreviatura: 'Repara Sistema Hidraulico',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Bop Y Csc',
    Abreviatura: 'Bop Y Csc',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Otros',
    Abreviatura: 'Otros',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Repara Tubo Lavador',
    Abreviatura: 'Repara Tubo Lavador',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Acondiciona Agujero / Repasa',
    Abreviatura: 'Acondiciona Agujero / Repasa',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Viaje De Limpieza',
    Abreviatura: 'Viaje De Limpieza',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Barrenas (Viaje Por Bajo Rop)',
    Abreviatura: 'Barrenas (Viaje Por Bajo Rop)',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Control De Perdida De Circulacion',
    Abreviatura: 'Control De Perdida De Circulacion',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Gasificacion Control De Pozo',
    Abreviatura: 'Gasificacion Control De Pozo',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Tuberia Pegada',
    Abreviatura: 'Tuberia Pegada',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Pesca',
    Abreviatura: 'Pesca',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Sidetrack',
    Abreviatura: 'Sidetrack',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Fluidos ',
    Abreviatura: 'Fluidos ',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Direccional ',
    Abreviatura: 'Direccional ',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Registros Electricos ',
    Abreviatura: 'Registros Electricos ',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Barrenas (Varios)',
    Abreviatura: 'Barrenas (Varios)',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Control De Solidos ',
    Abreviatura: 'Control De Solidos ',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Cementaciones ',
    Abreviatura: 'Cementaciones ',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Cabezales ',
    Abreviatura: 'Cabezales ',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Csc Y Pruebas ',
    Abreviatura: 'Csc Y Pruebas ',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Tuberia De Revestimiento',
    Abreviatura: 'Tuberia De Revestimiento',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Espera Por Ordenes Pemex',
    Abreviatura: 'Espera Por Ordenes Pemex',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Espera Por Ordenes Otros',
    Abreviatura: 'Espera Por Ordenes Otros',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Espera Suministros Y/O Servicios',
    Abreviatura: 'Espera Suministros Y/O Servicios',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Clima  ',
    Abreviatura: 'Clima  ',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Espera Localizacion / Contrapozo',
    Abreviatura: 'Espera Localizacion / Contrapozo',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Acceso Cerrado',
    Abreviatura: 'Acceso Cerrado',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Otros Problemas ',
    Abreviatura: 'Otros Problemas ',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Perforar ',
    Abreviatura: 'Perforar ',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Desliza Y Corta Cable',
    Abreviatura: 'Desliza Y Corta Cable',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Simulacros Y Platica De Seguridad',
    Abreviatura: 'Simulacros Y Platica De Seguridad',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Otros',
    Abreviatura: 'Otros',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Instalar Equipo Para Bajar Tr',
    Abreviatura: 'Instalar Equipo Para Bajar Tr',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Bajar Tr',
    Abreviatura: 'Bajar Tr',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Desmantelar Equipo Para Bajar Tr',
    Abreviatura: 'Desmantelar Equipo Para Bajar Tr',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Anclo Conjunto Soltador',
    Abreviatura: 'Anclo Conjunto Soltador',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Saca Soltador A Superficie',
    Abreviatura: 'Saca Soltador A Superficie',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Libero Soltador',
    Abreviatura: 'Libero Soltador',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Instalo Colgador',
    Abreviatura: 'Instalo Colgador',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Solto Canica',
    Abreviatura: 'Solto Canica',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Empaco Liner',
    Abreviatura: 'Empaco Liner',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Escarea Tr',
    Abreviatura: 'Escarea Tr',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Limpieza Superficial',
    Abreviatura: 'Limpieza Superficial',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Perforar Accesorios / Cemento',
    Abreviatura: 'Perforar Accesorios / Cemento',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Realizar Prueba De Integridad/Goteo A La Formación',
    Abreviatura: 'Realizar Prueba De Integridad/Goteo A La Formación',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Tomar Registros Electricos ',
    Abreviatura: 'Tomar Registros Electricos ',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Tomar Survey',
    Abreviatura: 'Tomar Survey',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Prueba Hermeticidad De Tr',
    Abreviatura: 'Prueba Hermeticidad De Tr',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Instala/Desinstala Ure',
    Abreviatura: 'Instala/Desinstala Ure',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Instala/Desinstala Hta De Registros Electricos',
    Abreviatura: 'Instala/Desinstala Hta De Registros Electricos',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Termina Perforacion',
    Abreviatura: 'Termina Perforacion',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Trabaja Molino',
    Abreviatura: 'Trabaja Molino',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Trabajos Con Tf',
    Abreviatura: 'Trabajos Con Tf',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Levanta Hta De Registros',
    Abreviatura: 'Levanta Hta De Registros',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Bajar Bha A Fondo',
    Abreviatura: 'Bajar Bha A Fondo',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Sacar Bha A Superficie',
    Abreviatura: 'Sacar Bha A Superficie',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Viaje Corto',
    Abreviatura: 'Viaje Corto',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Instala/Desinstala Gafas Y Elevador',
    Abreviatura: 'Instala/Desinstala Gafas Y Elevador',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Viaje De Calibracion',
    Abreviatura: 'Viaje De Calibracion',
    intervencion: 'Perforacion',
  },
  {
    Operacion: 'Instala /Desinstala Charola Ecologica Y Linea De Flote',
    Abreviatura: 'Instala /Desinstala Charola Ecologica Y Linea De Flote',
    intervencion: 'Perforacion',
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

const indexOperaciones = () => {
  const classes = useStyles();
  return (
    <div className="row justify-content-md-center">
      <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
        <div className="card">
          <div className={classes.titulo}>
            <h5 className="card-header" style={{ flex: '7' }}>
              Operaciones
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
                    <th>Operacion</th>
                    <th>Abreviatura</th>
                    <th>Intervenciones</th>
                    <th width="1%"></th>
                  </tr>
                </thead>
                <tbody>                 
                  {data.map((x, i) => (
                    <tr>
                      <td>{x.Operacion}</td>
                      <td>{x.Abreviatura}</td>
                      <td>{x.intervencion}</td>
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

export default indexOperaciones;
