import React from 'react'

const Spinner = ({ alto, ancho }) => (
  <div class="text-center" style={{ width: `${ancho}px`, height: `${alto}px`, position: 'relative' }}>
    <div style={{ position: 'absolute', top: `${(alto-(alto*.15))/2}px`, left: '0', right: '0', bottom: '0' }}>
      <div class="spinner-border text-primary" style={{width: "4rem" ,height: "4rem"}} role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>)

export default Spinner


// style={{width:`${ancho}px`,height:`${alto}px`}}