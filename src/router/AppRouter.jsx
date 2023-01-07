import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from '../components/global/NavBar';
import Index_Relacion from '../components/relaciones_conjuntos/Index';
import Validar_Relacion from '../components/relaciones_conjuntos/Validar';
import Ejercicio_Relacion from '../components/relaciones_conjuntos/Ejercicios';

const AppRouter = () => {
    
    return (
        <>
            <div className='container-xxl m-3 pt-1'>
                <Router>
                    <div className='row mb-5 pb-3'>
                        <NavBar />
                    </div>
                    <Routes>
                        {/* Agregar sus rutas aquí */}
                        <Route path='/relacion' element={<Index_Relacion />} />
                        <Route path='/relacion/ejercicios' element={<Ejercicio_Relacion />} />
                        <Route path='/relacion/validacion' element={<Validar_Relacion />} />
                    </Routes>
                </Router>
            </div>
        </>
    )
}

export default AppRouter
