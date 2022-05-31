import React from 'react'
import escuela1 from '../img/upmp.png';
import escuela2 from '../img/conalep.png';

const Formacion_academica = () => {
  return (
    <><div class="titulo_page"> Mi Formación Academica</div>
      <div id='f_academica'>
        <div class="escuela box">
          <div class="logo_escuela">
            <img src={escuela1} alt="upmp" class="img_escuela" />
          </div>
          <div class="descripcion_escuela">
            <p>
              <b>Universidad Politécnica Metropolitana de Puebla </b>
              <br /> <br /> Ingenieria en Sistemas Computacionales
              <br /> 2018 - 2022
            </p>
          </div>
        </div>

        <div class="escuela">
          <div class="logo_escuela">
            <img src={escuela2} alt="conalep" class="img_escuela" />
          </div>
          <div class="descripcion_escuela">
            <p>
              <b> CONALEP Plantel Puebla III </b>
              <br /> <br /> Profesional Técnico Bachiller en Informática
              <br /> 2015 - 2018
            </p>
          </div>
        </div>

      </div></>
  )
}

export default Formacion_academica