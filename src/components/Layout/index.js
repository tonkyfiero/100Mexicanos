import React from 'react'


import SideBar from './SideBar'
import AppBar from './AppBar'
import { Container } from '@material-ui/core';

const Layout = ({children}) => (
<Container>
    <AppBar />
    <SideBar />
    {children}
</Container>
)

export default Layout