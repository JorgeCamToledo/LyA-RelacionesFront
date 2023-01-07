import React from "react";

const Resultados = ({ Disjuntos, Igualdad,Subconjunto,Subconjunto_Propio,Pertenencia,A_isValid }) => {
    console.log(A_isValid)
    return (
    <div>
        <div className="resp-rel">
            <h3>Resultados</h3>
            <br/>
            <b>
            <ul>
            {A_isValid == 'Conjunto' && (
             <li> {Disjuntos}</li> 
            )}   
            {A_isValid == 'Conjunto' && (
             <li>{Igualdad}</li>
            )}  
            {A_isValid == 'Conjunto' && (
             <li>{Subconjunto}</li> 
            )}    
            {A_isValid == 'Conjunto' && (
             <li>{Subconjunto_Propio}</li>
            )}   
            {A_isValid == 'Conjunto' && (
            <li>{Pertenencia}</li> 
            )}   
            {A_isValid == 'Valor' && (
            <li>{Pertenencia}</li>
              
            )}

           
            </ul>
            </b>

        </div>
    </div>
    )
}

export default Resultados;