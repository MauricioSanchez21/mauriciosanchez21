import React from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Carousel from '../componentes/Carousel';
import niño from '../img/inicio_programando.png';
import cv from '../files/CV.pdf'
import Typed from 'typed.js';

const Inicio = () => {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                " <br><br> <b> ¡B I E N V E N I D O! </b> ",
                " <i> Mauricio Sánchez Alvarez </i> <br><br> 22 años. <br><br> Puebla, México. ",
                " Recién egresado. <br><br> Ingenieria en Sistemas Computacionales. <br><br> Desarrollador Full Stack Jr. ",
                " <br><br> ¡Si requieres algún servicio, contáctame! "],
            startDelay: 300,
            typeSpeed: 60,
            backSpeed: 25,
            backDelay: 300,
            loop: true
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <><div class="flex-container">
            <div class="flex-item-left"> <img src={niño} id="niño" /> </div>
            <div class="flex-item-right">
            <div class="welcome"> 
            <span ref={el}></span>

            </div>
                          
                <div class="botones_inicio">
                    <Link to="contacto" class="btn btn-primary"> <i class="bi bi-person-lines-fill"> Contacto </i> </Link>
                    <Link to={cv} target="_blank" id="bt-cv" download="CV-MauricioSanchez" class='btn btn-success'> <i class="bi bi-chevron-double-down"> Descargar CV </i> </Link>
                </div>
            </div>

        </div><Carousel /></>
    );
}

export default Inicio;