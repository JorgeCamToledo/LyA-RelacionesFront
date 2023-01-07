import React from 'react'
import { Link } from 'react-router-dom';
import '../relaciones_conjuntos/styles.css';
import igualdad_img from './img/igualdad.png';
import disjunto_img from './img/disjunto.png';
import sub_propio_img from './img/sub_propio.png';
import subconjunto_img from './img/subconjunto.png';
const Index = () => {

    return (
        <div className='relacion'>
            <h2> Bienvenido al modulo de relacion de conjuntos</h2>
            <div className='container_index_relacion'>
                <div className='relacion_d1'>
                    <h3> ¿Que desea realizar?</h3>
                    <br/>
                    <Link to='/relacion/ejercicios' type='button' className='btn btn-primary'> Ejercicios de relacion de conjuntos </Link>
                    <br/>
                    <br/>
                    <br/>
                    <Link to='/relacion/validacion' type='button' className='btn btn-primary' > Validar relacion de conjuntos </Link>
                </div>
                <div className='relacion_d2'>
                    <img className='img_relaciones' src={igualdad_img} alt="igualdad" />
                    <img className='img_relaciones' src={disjunto_img} alt="disjunto" />
                    <br/>
                    <img className='img_relaciones' src={sub_propio_img} alt="sub_propio" />
                    <img className='img_relaciones' src={subconjunto_img} alt="subconjunto" />
                </div>
            </div>
        </div>
    )
}

export default Index
