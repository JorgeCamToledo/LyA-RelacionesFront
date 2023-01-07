import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../helpers/axios';
import '../relaciones_conjuntos/styles.css'
import Resultados from './Resultados';

const Validar = () => {

    const [resp, setResp] = useState(false);
    const [conjuntos, setconjuntos] = useState({
        conjuntoA: '',
        conjuntoB: ''
    })
    const [relaciones ,setRelaciones] = useState({
        Disjuntos:"",
        Igualdad:"",
        Subconjunto:"",
        Subconjunto_Propio:"",
        Pertenencia:"",
        A_isValid: "",
    })

    const handleInputChange  = (e) =>{
        setconjuntos({
            ...conjuntos,
            [e.target.name]: e.target.value
        })
    }

    const enviarDatos  = (event) => {
        event.preventDefault()
        let datos_a_enviar = conjuntos.conjuntoA +'E'+conjuntos.conjuntoB
        let data = JSON.stringify({
          "request": datos_a_enviar
        });
        axiosInstance.post("v1/relacion/obtener-rel/", data)
        .then(response =>{
            if (response.data.pay_load.A_isValid == "no validado" || response.data.pay_load.B_isValid == "no validado"){
                if (response.data.pay_load.A_isValid == "no validado"){
                    alert("El conjunto A esta mal denotado")
                }
                if (response.data.pay_load.B_isValid == "no validado"){
                    alert("El conjunto B esta mal denotado")
                }
            }
            else{
            setRelaciones(response.data.pay_load)
            console.log("estas son las relaciones:"+relaciones.A_isValid)
            setResp(true)
            }
        })
        .catch((error) =>{
            console.log(error.response)
        })

        
    }

    
    // const handleRequest = async() => {
    //     await axiosInstance.get('potencia')
    //         .then(resp => setResp(resp.data))
    //         .catch(err => console.log('error: ',err))
    // };

    return (
        <div className=''>
            <div className='rel_cj'>
                <h2>Relaciones de conjuntos</h2> 
                <div className='row '>  
                    <div className='col form-r'>
                        <form onSubmit={enviarDatos}>
                            <div className="col-sm-7">
                                <label for="ConjuntoA" className="form-label">Conjunto A</label>
                                <input type="text" className="form-control" name="conjuntoA" id="ConjuntoA" placeholder="{a,b,c}" onChange={handleInputChange}/>
                            </div>
                            <br/>
                            <div className="col-sm-7">
                                <label for="ConjuntoB" className="form-label">Conjunto B</label>
                                <input type="text" className="form-control"  name="conjuntoB" id="ConjuntoB" placeholder="{a,b,c}"  onChange={handleInputChange}/>
                            </div>
                            <br/>
                            <button className="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                    <div className='col resp-div'>
                    {resp == true &&
                    <Resultados {...relaciones}/>
                    }
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default Validar
