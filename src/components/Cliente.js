import React from 'react'

function Cliente(props) {
  return (
    <div>
        <h1>{props.tituloCliente}</h1>
        <p>{props.SubtituloCliente}</p>
    </div>
  )
}

export default Cliente