import React from "react";
import { useState } from "react";
import Respuestas_Ejercicios from "./Respuestas_Ejercicio";

const Generador = ({
  Disjuntos = "-",
  Igualdad = "-",
  Subconjunto = "-",
  Subconjunto_Propio = "-",
  Pertenencia = "-",
  conjunto,
}) => {

  
  let [score, setScore] = useState(0);
  const [resp1, setResp1] = useState("");
  const [resp2, setResp2] = useState("");
  const [resp3, setResp3] = useState("");
  const [resp4, setResp4] = useState("");
  const [resp5, setResp5] = useState("");
  const [mostrarRespuestas, setMostrarRespuestas] = useState(false);
  const [opciones, setOpciones] = useState({
    Disjunto_res: "",
    Igualdad_res: "",
    Subconjunto_res: "",
    Subconjunto_Propio_res: "",
    Pertenencia_res: "",
  });

  const handleCheckChange = (e) => {
    let check;
    if (e.target.checked == true) {
      check = e.target.value;
      console.log(e.target.value);
    }
    setOpciones({
      ...opciones,
      [e.target.name]: check,
    });
    console.log(opciones);
  };

  const compare = (e) => {

    if (opciones.Disjunto_res == Disjuntos) {
      setScore((score += 20));
      console.log(
        "Respuesta correcta, la relacion entre ambas es:conjuntos " + Disjuntos
      );
    }
    if (opciones.Igualdad_res == Igualdad) {
      setScore((score += 20));
      console.log(
        "Respuesta correcta, la relacion entre ambas es:conjuntos " + Igualdad
      );
    }
    if (opciones.Subconjunto_Propio_res == Subconjunto_Propio) {
      setScore((score += 20));
      console.log(
        "Respuesta correcta, la relacion entre ambas es: " + Subconjunto_Propio
      );
    }
    if (opciones.Subconjunto_res == Subconjunto) {
      setScore((score += 20));
      console.log(
        "Respuesta correcta, la relacion entre ambas es: " + Subconjunto
      );
    }

    if (opciones.Pertenencia_res == Pertenencia) {
      setScore((score += 20));
      console.log(
        "Respuesta correcta: " + Pertenencia
      );
    }
    console.log("Total de puntos: " + score + "/100");
    setResp1(Disjuntos);
    setResp2(Igualdad);
    setResp3(Subconjunto_Propio);
    setResp4(Subconjunto);
    setResp5(Pertenencia)
    console.log(opciones);
    setMostrarRespuestas(true);
  };

  const refresh = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className="conjunto_resolver">
        <h2>{conjunto}</h2>
        <button type="button" className="btn btn-danger" style={{ width: 160, height: 33, fontSize: 10, marginTop:15 }} onClick={refresh}>
            Nuevo Conjunto
        </button>
      </div>

      <div class="container text-center">
        <div class="row">
          <div class="col">
          <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <abbr title="Iguales">
  <input  value="Iguales" type="radio" class="btn-check" name="Igualdad_res" id="igualdad1" autocomplete="off"onClick={handleCheckChange} />
  <label class="btn btn-outline-primary" for="igualdad1" style={{width:60, height:60, lineHeight:3}}>=</label>
  </abbr>
  <abbr title="No iguales">
  <input value="No Iguales" type="radio" class="btn-check" name="Igualdad_res" id="igualdad2" autocomplete="off" onClick={handleCheckChange}/>
  <label class="btn btn-outline-primary" for="igualdad2" style={{width:60, height:60, lineHeight:3}}>≠</label>
  </abbr>
</div>

<br/> <br/> 

<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <abbr title="Disjuntos">
  <input  value="Disjuntos" type="radio" class="btn-check" name="Disjunto_res" id="disjunto1" autocomplete="off" onClick={handleCheckChange}/>
  <label class="btn btn-outline-primary" for="disjunto1" style={{width:60, height:60, lineHeight:3}}>D</label>
  </abbr>
  <abbr title="No disjuntos">
  <input value="No disjuntos" type="radio" class="btn-check" name="Disjunto_res" id="disjunto2" autocomplete="off" onClick={handleCheckChange}/> 
  <label class="btn btn-outline-primary" for="disjunto2" style={{width:60, height:60, lineHeight:3}}>ND</label>
  </abbr>
</div>

<br/> <br/> 

<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <abbr title="Subconjunto">
  <input value="A es subconjunto de B" type="radio" class="btn-check"  name="Subconjunto_res" id="subconjunto1" autocomplete="off" onClick={handleCheckChange}/>
  <label class="btn btn-outline-primary" for="subconjunto1" style={{width:60, height:60, lineHeight:3}}>⊆</label>
  </abbr>
  <abbr title="No es subconjunto">
  <input value="A no es subconjunto de B" type="radio" class="btn-check"  name="Subconjunto_res" id="subconjunto2" autocomplete="off" onClick={handleCheckChange}/>
  <label class="btn btn-outline-primary" for="subconjunto2" style={{width:60, height:60, lineHeight:3}}>⊈</label>
  </abbr>
</div>

<br/> <br/> 

<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <abbr title="Subconjunto propio">
  <input onClick={handleCheckChange} value="A es subconjunto propio de B"  type="radio" class="btn-check" name="Subconjunto_Propio_res" id="sub-propio1" autocomplete="off" />
  <label class="btn btn-outline-primary" for="sub-propio1" style={{width:60, height:60, lineHeight:3}}>⊂</label>
  </abbr>
  <abbr title="No es subconjunto propio">
  <input onClick={handleCheckChange} value="A no es subconjunto propio de B" type="radio" class="btn-check" name="Subconjunto_Propio_res" id="sub-propio2" autocomplete="off"/>
  <label class="btn btn-outline-primary" for="sub-propio2" style={{width:60, height:60, lineHeight:3}}>⊄</label>
  </abbr>
</div>

<br/> <br/> 

<div class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <abbr title="Pertenece ">
  <input onClick={handleCheckChange} value="El elemento pertenece al conjunto"  type="radio" class="btn-check" name="Pertenencia_res" id="pertenencia1" autocomplete="off" />
  <label class="btn btn-outline-primary" for="pertenencia1" style={{width:60, height:60, lineHeight:3}}>∈</label>
  </abbr>
  <abbr title="No pertenece">
  <input onClick={handleCheckChange} value="El elemento no pertenece al conjunto" type="radio" class="btn-check"  name="Pertenencia_res" id="pertenencia2" autocomplete="off"/>
  <label class="btn btn-outline-primary" for="pertenencia2" style={{width:60, height:60, lineHeight:3}}>∉</label>
  </abbr>
</div>
<br/>
<button className="btn btn-primary send-rel" onClick={compare} style={{marginTop:10}}> Enviar </button>
          </div>
          <div class="col">
    
            {mostrarRespuestas == true && (
              <Respuestas_Ejercicios
                score={score}
                resp1={resp1}
                resp2={resp2}
                resp3={resp3}
                resp4={resp4}
                resp5={resp5}
              />
            )}
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default Generador;
