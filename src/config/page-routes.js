import React from 'react'
import { Redirect } from 'react-router'


import Equipos from '../pages/Catalogos/Equipos'
import Equipos_CreUp from '../pages/Catalogos/Equipos/CreUp'

import Actividades from '../pages/Catalogos/Actividades'
import DashboardV1 from '../pages/format'



const routes = [
    {
        path:'/',
        exact:true,
        component: () => <Redirect to='/' />
    },
    {
        path:'/catalogos/pozos',
        exact:'true',
        title:'Cat pozos',
        component: () => <DashboardV1 />
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
        path:'/catalogos/actividades',
        exact:'true',
        title:'Catalogo Actividades',
        component: () => <Actividades />
    }
    
    
]


DashboardV1
export default routes