import React from 'react';

const ControladorTurno = () => {
  return (
    <div style={{ display: 'flex', height: '10%', alignContent: 'center', justifyContent:"space"}}>
      <div style={{flexGrow:1,display:"flex",justifyContent:"center"}}>
        <button className="btn btn-danger btn-lg">strike</button>
      </div>
      <div style={{flexGrow:2,backgroundColor:"yellow",display:"flex"}}>
        <div style={{flexGrow:1,borderRadius:"50%",backgroundColor:"red"}}></div>
        <div style={{flexGrow:1,borderRadius:"50%",backgroundColor:"red"}}></div>
        <div style={{flexGrow:1,borderRadius:"50%",backgroundColor:"red"}}></div>
      </div>      
      <div style={{flexGrow:1,display:"flex",justifyContent:"center"}}>
        <button className="btn btn-success btn-lg">Ganador</button>
      </div>
    </div>
  );
};

export default ControladorTurno;
