import React from "react";

const Respuestas_Ejercicios = ({score,resp1,resp2,resp3,resp4,resp5 }) => {
    return (
    <div className="respuestas-rel"> 
        <h2>Respuestas</h2>
        <hr/>
        <h6>Puntaje obtenido: {score}</h6>
        <hr></hr>
        <h6>Respuesta: {resp1}</h6>
        <h6>Respuesta: {resp2}</h6>
        <h6>Respuesta: {resp4}</h6>
        <h6>Respuesta: {resp3}</h6>
        <h6>Respuesta: {resp5}</h6>
    </div>
    )
}

export default Respuestas_Ejercicios;