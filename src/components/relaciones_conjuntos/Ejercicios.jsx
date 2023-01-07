import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../helpers/axios';
import '../relaciones_conjuntos/styles.css'
import Generador from './Generador';
const Ejercicios = () => {

    const [conjunto,setconjunto] =useState({
        Disjuntos: "",
        Igualdad: "",
        Subconjunto_Propio: "",
        conjunto: ""
    })

    useEffect(()=>{
    const getConjunto = () =>{
    axiosInstance.post('v1/relacion/ejercicio/'," ")
    .then(response =>{
        console.log(response.data.pay_load)
        setconjunto(response.data.pay_load)
    })
        }
        getConjunto()
    },[])

    return (
        <div className='form'>
            <div className='container_exercise'>
                <h2>¿Cuales son las relaciones entre ambos conjuntos?</h2>
                <Generador {...conjunto}></Generador>
            </div>
        </div>
    )
}

export default Ejercicios
