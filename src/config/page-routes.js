import React from 'react'
import { Redirect } from 'react-router'



//catalogos
import Equipos from '../pages/Catalogos/Equipos/indexEquipos'
import Equipos_CreUp from '../pages/Catalogos/Equipos/CreUp'

import Campos from '../pages/Catalogos/Campos/indexCampos'
import Campos_CreUp from '../pages/Catalogos/Campos/CreUp'

import Tuberia from '../pages/Catalogos/Tuberias/indexTuberia'
import Tuberia_CreUp from '../pages/Catalogos/Tuberias/CreUp'

import Macroperas from '../pages/Catalogos/Macroperas/indexMacroperas'
import Macroperas_CreUp from '../pages/Catalogos/Macroperas/CreUp'

import Operaciones from '../pages/Catalogos/Operaciones/IndexOperaciones'
import Operaciones_CreUp from '../pages/Catalogos/Operaciones/CreUp'

import Pozos from '../pages/Catalogos/Pozos/indexPozos'
import Pozos_CreUp from '../pages/Catalogos/Pozos/CreUp'

///seguimiento
import Actividad from '../pages/Seguimiento/ActividadFisica/CreUpAF'
import Direccional from '../pages/Seguimiento/Direccional/indexDireccional'
import Bitacora from '../pages/Seguimiento/Bitacora/indexBitacora'


//dashboards 

import Principal from '../pages/Dashboards/Principal/principal'
import Grid from '../pages/Dashboards/Principal/GridLayout'




// {
//     path:'/',
//     exact:true,
//     component: () => <Redirect to='/' />
// },   


const routes = [
    
    {
        path:'/dashboard/principal',
        exact:'true',
        title:'Principal',
        component: () => <Principal />
    },

    {
        path:'/catalogos/equipos',
        exact:'true',
        title:'Cat Equipos',
        component: () => <Equipos />
    },
    {
        path:'/catalogos/equipos/create',
        exact:'true',
        title:'Cat Equipos',
        component: () => <Equipos_CreUp />
    },
    {
        path:'/catalogos/campos',
        exact:'true',
        title:'Cat Campos',
        component: () => <Campos />
    },
    {
        path:'/catalogos/campos/create',
        exact:'true',
        title:'Cat campos',
        component: () => <Campos_CreUp />
    },  
    {
        path:'/catalogos/tuberias',
        exact:'true',
        title:'Cat campos',
        component: () => <Tuberia />
    },  
    {
        path:'/catalogos/tuberias/create',
        exact:'true',
        title:'Cat campos',
        component: () => <Tuberia_CreUp />
    },    
    {
        path:'/catalogos/macroperas',
        exact:'true',
        title:'Cat macroperas',
        component: () => <Macroperas />
    },
    {
        path:'/catalogos/macroperas/create',
        exact:'true',
        title:'Cat macroperas',
        component: () => <Macroperas_CreUp />
    },
    {
        path:'/catalogos/operaciones',
        exact:'true',
        title:'Cat macroperas',
        component: () => <Operaciones />
    },
    {
        path:'/catalogos/operaciones/create',
        exact:'true',
        title:'Cat macroperas',
        component: () => <Operaciones_CreUp />
    },
    {
        path:'/catalogos/pozos',
        exact:'true',
        title:'Cat Pozos',
        component: () => <Pozos />
    },
    {
        path:'/catalogos/pozos/create',
        exact:'true',
        title:'Cat Pozos',
        component: () => <Pozos_CreUp />
    },
    {
        path:'/seguimiento/actividad',
        exact:'true',
        title:'Actividad',
        component: () => <Actividad />
    },
    {
        path:'/seguimiento/direccional',
        exact:'true',
        title:'Direccional',
        component: () => <Direccional />
    },
    {
        path:'/seguimiento/bitacora',
        exact:'true',
        title:'Bitacota',
        component: () => <Bitacora />
    },
    
]



export default routes