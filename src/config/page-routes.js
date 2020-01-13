import React from 'react'
import { Redirect } from 'react-router'


import Equipos from '../pages/Catalogos/Equipos'



const routes = [
    {
        path:'/',
        exact:true,
        component: () => <Redirect to='/' />
    },
    {
        path:'/catalogos/equipos',
        exact:'true',
        title:'Cat Equipos',
        component: () => <Equipos />
    }
]

export default routes