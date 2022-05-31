import curso1 from '../img/curso1.png'
import curso2 from '../img/curso2.png'
import curso3 from '../img/curso3.png'
import certificado1 from '../files/ITEP.pdf'
import certificado2 from '../files/Azure.pdf'
import certificado3 from '../files/Huawei.pdf'

import { Link } from 'react-router-dom'

const CursosCertificaciones = () => {
    return (
        <><div class="titulo_page"> Mis cursos y certificaciones</div>
            <div id='box-curso'>
                <div class="curso">
                    <img src={curso1} alt="c1" class="img_curso" />
                    <p class="nombre_curso"> iTEP, International Test of English Proficiency, 2021 </p>
                    <div class="botones_curso">
                        <a href={certificado1} target="_blank"  rel="noopener noreferrer" class='btn btn-danger'> <i class="bi bi-eye"> Visualizar </i> </a>
                        <Link to={certificado1} target="_blank" download="CertificadoITEP-MauricioSanchez" class='btn btn-warning btcurso'> <i class="bi bi-chevron-double-down"> Descargar archivo </i> </Link>
                    </div>
                </div>
                <div class="curso">
                    <img src={curso2} alt="c2" class="img_curso" />
                    <p class="nombre_curso"> Fundamentos para la nube en la industria 4.0 con tecnologías Microsoft </p>
                    <div class="botones_curso">
                        <a href={certificado2} target="_blank" rel="noopener noreferrer" class='btn btn-danger'> <i class="bi bi-eye"> Visualizar </i> </a>
                        <Link to={certificado2} target="_blank" download="CertificadoNube4-MauricioSanchez" class='btn btn-warning btcurso'> <i class="bi bi-chevron-double-down"> Descargar archivo </i> </Link>
                    </div>
                </div>
                <div class="curso">
                    <img src={curso3} alt="c3" class="img_curso" />
                    <p class="nombre_curso"> Huawei HCIA-IoT Course 2021 </p>
                    <div class="botones_curso">
                        <a href={certificado3} target="_blank" rel="noopener noreferrer" class='btn btn-danger'> <i class="bi bi-eye"> Visualizar </i> </a>
                        <Link to={certificado3} target="_blank" download="CertificadoHuaweiIoT-MauricioSanchez" class='btn btn-warning btcurso'> <i class="bi bi-chevron-double-down"> Descargar archivo </i> </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CursosCertificaciones;