import React from 'react'


import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
    root:{
        backgroundColor:'#fff',
        position:'fixed',
        top:'0',
        left:'0',
        right:'0',
        marginBottom:'0',
        padding:'0',
        display:'flex',
        flex:'1 1',
        zIndex:'1020'
            
    },
    navLogo:{
        marginRight:'10px',
        background:'#00acac',
        borderColor:'transparent rgba(0,0,0,.15) rgba(0,0,0,.3)',
        borderStyle:'solid',
        borderWidth:'10px',
        position:'relative',
        overflow:'hidden',
        borderRadius:'4px'
    },
    navHeader:{
        display:'flex',
        alignItems:'center',
        width:'220px'
    },
    linkNavHeader:{
        height:'50px',
        fontWeight:'100',
        fontSize:'18px',
        flex:'1 1',
        alignItems:'center',
        lineHeight:'30px',
        padding:'10px 20px',
        display:'flex'
    },
    linkToolBar:{
        listStyle:'none',
        flexDirection:'row',
        display:'flex',
        marginLeft:'auto'
    }

})

const Header = () => {
    const classes = useStyles()

    return(
        <div id='header' className={classes.root}>   
            <div className={classes.navHeader}>
                <a href="" className={classes.linkNavHeader}>
                    <span className={classes.navLogo}></span>
                    <b style={{fontWeight:'700'}}>Color</b>
                    admin
                </a>
            </div>         
            <ul className={classes.linkToolBar}>
                <li>uno</li>
                <li>dos</li>
                <li>tres</li>
                <li>cuatro</li>
                <li>cinco</li>
            </ul>
        </div>
    )
}

export default Header