import Swal from "sweetalert2";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const style = { fontSize: "300%" };

const Contacto = () => {
    const showAlert = () => {
        Swal.fire(
            'Contacta conmigo',
            'Favor de llenar el formulario para enviarme un mensaje a mi correo electronico',
            'info'
        )
    }    

    const form = useRef();
    const sendEmail = (e) => {       
        e.preventDefault();

        emailjs.sendForm('service_dt0u23i', 'template_etzcgpy', form.current, 'Hnpl2vDmxywrMZBUX')
            .then((result) => {
                Swal.fire(
                    'Excelente!',
                    'Tu mensaje fue enviado correctamente',
                    'success'
                )
            }, (error) => {
                Swal.fire(
                    'Error!',
                    'Algo salio mal, inténtalo de nuevo',
                    'error'
                  )
            });
    };

    return (
        <><div class="titulo_page"> ¿Cómo contactarme? </div>
            <div id='contacto_margin'>
                <div id="formulario_email" class="box">
                    <form ref={form} onSubmit={sendEmail}>
                        <div id="lb_enviar_mensaje">
                            <p> ¿Te puedo ayudar en algo? </p>
                        </div>
                        <div class="form-group">
                            <input type="text" name="name_user" class="form-control" id="write_data1" placeholder="Nombre" required />
                        </div>
                        <div class="form-group">
                            <input type="email" name="email_user" class="form-control" id="write_data2" placeholder="Correo electronico" required/>
                        </div>
                        <div class="form-group">
                            <input type="text" name="asunto_user" class="form-control" id="write_data3" placeholder="Asunto" required/>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" name="text_user" id="write_data4" placeholder="Mensaje" rows="3" required></textarea>
                        </div>
                        <div id="bt_enviar_mensaje">
                            <input class='btn btn-danger' type="submit" value="Enviar"/>  
                        </div>
                    </form>
                </div>

                <div id="redes_sociales">
                    <div class="red">
                        <div class="red_nombre"> <p> mauscx0@gmail.com </p> </div>
                        <a onClick={showAlert}>
                            <div class="red_icono"> <i class="bi bi-envelope" style={style}> </i> </div> </a>
                    </div>
                    <div class="red">
                        <div class="red_nombre"> <p> Mauricio Sánchez </p> </div>
                        <a href="https://www.facebook.com/MauricioSCx/">
                            <div class="red_icono"> <i class="bi bi-facebook" style={style}> </i> </div> </a>
                    </div>
                    <div class="red">
                        <div class="red_nombre"> <p> +52 2222126995 </p> </div>
                        <a href="https://wa.me/2222126995">
                            <div class="red_icono"> <i class="bi bi-whatsapp" style={style}> </i> </div> </a>
                    </div>
                    <div class="red">
                        <div class="red_nombre"> <p> mauricio21mx </p> </div>
                        <a href="https://www.instagram.com/mauricio21mx/">
                            <div class="red_icono"> <i class="bi bi-instagram" style={style}> </i> </div> </a>
                    </div>

                </div>
            </div></>
    );
}

export default Contacto;