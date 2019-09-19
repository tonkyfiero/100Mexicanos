import React,{useState} from 'react'


import SideBar from './SideBar'
import AppBar from './AppBar'
import { Container } from '@material-ui/core';

const Layout = ({children}) => {

const [show,setShow] = useState(false)

return(<Container>
    <AppBar handleOpen={()=>setShow(true)} />
    <SideBar open={show} handleClose={()=>setShow(false)} />
    {children}
</Container>
)
}

export default Layout