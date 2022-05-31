import React from 'react'
import experiencia3 from '../img/conalep.png';
import experiencia2 from '../img/klomtor.png';
import experiencia1 from '../img/pe.png';

import proyecto1 from '../img/proyecto1.png'
import proyecto2 from '../img/proyecto2.png'
import proyecto3 from '../img/proyecto3.png'
import proyecto4 from '../img/proyecto4.png'
import proyecto5 from '../img/proyecto5.png'
import proyecto6 from '../img/proyecto6.png'
import proyecto7 from '../img/proyecto7.png'

const Experiencia = () => {
    return (

        <><div class="titulo_page"> Mi Experiencia Profesional</div>
            <div id='f_academica'>
                <div class="escuela box">
                    <div class="logo_escuela">
                        <img src={experiencia1} alt="pe" class="img_escuela" />
                    </div>
                    <div class="descripcion_escuela">
                        <p>
                            <b>Estadía profesional:
                                Centro de Innovación y Desarrollo de Empresas y Emprendedores de México SC (Puebla Empresarial) </b>
                            <br /> <br /> Área: Desarrollo de proyectos de plataformas digitales
                            <br /> Enero 2022 Abril 2022
                        </p>
                    </div>
                </div>

                <div class="escuela box">
                    <div class="logo_escuela">
                        <img src={experiencia2} alt="klomtor" class="img_escuela" />
                    </div>
                    <div class="descripcion_escuela">
                        <p>
                            <b> Estancia: Klomtoria México S.A de C.V. </b>
                            <br /> <br /> Área: Desarrollo de software
                            <br /> Abril 2021
                        </p>
                    </div>
                </div>

                <div class="escuela box">
                    <div class="logo_escuela">
                        <img src={experiencia3} alt="conalep" class="img_escuela" />
                    </div>
                    <div class="descripcion_escuela">
                        <p>
                            <b> Servicio Social: CONALEP Plantel Puebla III </b>
                            <br /> <br /> Profesional Técnico Bachiller en Informática
                            <br /> Área: Servicios escolares
                        </p>
                    </div>
                </div>

                
            </div>

            <div class="titulo_page"> Proyectos realizados </div>
            <div id='proyectos'>
                <div class="project">
                    <img src={proyecto1} alt="pro1" class="img_proyect" />
                    <p class='descripcion_proyecto'> Páginas web multitask</p>
                </div>
                <div class="project">
                    <img src={proyecto2} alt="pro2" class="img_proyect" />
                    <p class='descripcion_proyecto'> Loggin personalizado </p>
                </div>
                <div class="project">
                    <img src={proyecto3} alt="pro3" class="img_proyect" />
                    <p class='descripcion_proyecto'> Páginas web publicitarias </p>
                </div>
                <div class="project">
                    <img src={proyecto4} alt="pro4" class="img_proyect" />
                    <p class='descripcion_proyecto'> Formularios </p>
                </div>
                <div class="project">
                    <img src={proyecto5} alt="pro5" class="img_proyect" />
                    <p class='descripcion_proyecto'> Encuestas de satisfacción </p>
                </div>
                <div class="project">
                    <img src={proyecto6} alt="pro6" class="img_proyect" />
                    <p class='descripcion_proyecto'> Sitos web de administración con bases de datos</p>
                </div>
                <div class="project">
                    <img src={proyecto7} alt="pro7" class="img_proyect" />
                    <p class='descripcion_proyecto'> Manejo de archivos</p>
                </div>
            </div>
          
        </>


    );
}

export default Experiencia