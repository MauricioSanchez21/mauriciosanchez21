import React from 'react';
import l1 from '../img/html.png';
import l2 from '../img/css.png';
import l3 from '../img/js.png';
import l4 from '../img/php.png';
import l5 from '../img/boot.png';
import l6 from '../img/react.png';
import l7 from '../img/sass.png';
import l8 from '../img/mysql.png';
import l9 from '../img/mariadb.png';
import l10 from '../img/python.png';
import l11 from '../img/java.png';
import l12 from '../img/c.png';

const carousel = () => {
    return (
        <div id='carousel'>
            <div id='herramientas'>
                <p> Herramientas y tecnologías utilizadas </p>
            </div>
            <div id="demo" class="carousel slide box" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="3000">
                        <div class="row">
                            <div class="col"> <img src={l1} alt="html" height="150px" width="80%" /></div>
                            <div class="col"> <img src={l2} alt="css" height="150px" width="80%" /></div>
                            <div class="col"> <img src={l3} alt="js" height="150px" width="95%" /></div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <div class="row">
                            <div class="col"> <img src={l4} alt="php" height="150px" width="90%" /></div>
                            <div class="col"> <img src={l5} alt="boot" height="150px" width="100%" /></div>
                            <div class="col"> <img src={l6} alt="react" height="150px" width="100%" /></div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <div class="row">
                            <div class="col"> <img src={l7} alt="sass" height="150px" width="100%" /></div>
                            <div class="col"> <img src={l8} alt="mysql" height="150px" width="100%" /></div>
                            <div class="col"> <img src={l9} alt="mariadb" height="150px" width="100%" /></div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <div class="row">
                            <div class="col"> <img src={l10} alt="python" height="150px" width="100%" /></div>
                            <div class="col"> <img src={l11} alt="java" height="150px" width="100%" /></div>
                            <div class="col"> <img src={l12} alt="c" height="150px" width="100%" /></div>
                        </div>
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
    );
}


export default carousel;