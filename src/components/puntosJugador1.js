import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { add_puntos_j1,reset_puntos_tablero } from '../redux/actions/PuntosActions';

const PuntosJudador1 = () => {

    const generalesPuntos = useSelector((state) => state.Puntajes);

    const dispatch = useDispatch();
    const setPuntos = (puntos) => {
      dispatch(add_puntos_j1(puntos));
      dispatch(reset_puntos_tablero());
    };


    return(
        <div style={{border: "12px dotted  #d0ff12",height:"30%",flexGrow:1}}>
                <div style={{border:"3px solid white",color:"white",height:"100%",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
                <p style={{color: "#d0ff12", fontSize: "60px",fontWeight:"bold" }}>{generalesPuntos.Equipo1}</p>
                <p style={{color: "#d0ff12", fontSize: "18px"}}>Los finos</p>              
                </div>
                <div style={{marginTop:"20px"}}>
                    <button className="btn btn-primary" onClick={() => setPuntos(generalesPuntos.tablero)}>Asignar puntos</button>
                </div>
            </div>
    )
}

export default PuntosJudador1