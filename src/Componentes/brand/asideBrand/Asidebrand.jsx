import React from "react";
import './asidebrand.scss';
import logo from './img/logo.png';

export default function Asidebrand(){
    return(
        <aside className="asideB">
            <div className="asideB__container">
                <div className="asideB__container--title">
                    <h1 className="asideB__container--orange">Arming</h1>
                    <h1 className="asideB__container--blue">Code</h1>
                </div>
                <div className="asideB__container--paragraph">
                    <p className="asideB__container--p">Sabiendo lo anterior, surgío este eslogan o titulo</p>
                </div>
            </div>
            <div className="asideB__paleta">
                <h1 className="asideB__paleta--color">Paleta de colores</h1>
                <img className="asideB__paleta--img" src={logo} alt="logo" />
            </div>
            <div className="asideB__container2">
                <div className="asideB__container2__items">
                    <div  className="asideB__container2__circleN">
                        <div className="asideB__container2__circleO"></div>
                    </div>
                    <div className="asideB__container2__textColor">
                        <div className="asideB__container2__HEX">
                            <p className="asideB__container2__H">Hexadecimal (#):</p>
                            <p className="asideB__container2__key">D94C21</p>
                        </div>
                        <div className="asideB__container2__HEX">
                            <p className="asideB__container2__H">RGB:</p>
                            <p className="asideB__container2__key">217, 76, 33</p>
                        </div>
                        <div className="asideB__container2__HEX">
                            <p className="asideB__container2__H">CMYK:</p>
                            <p className="asideB__container2__key">9%, 80%, 94%, 1%</p>
                        </div>
                    </div>
                    <div className="asideB__container2__why">
                        <p className="asideB__container2__whyP">¿Porqué elegí el color naranja?</p>
                        <p className="asideB__container2__whyR">Este color tiene un significado muy importante ya que representan el dinamismo, la independencia, la creatividad y optimismo.</p>
                    </div>
                </div>
            </div>
            <div className="asideB__container2">
                <div className="asideB__container2__items">
                    <div  className="asideB__container2__circleB">
                        <div className="asideB__container2__circleB"></div>
                    </div>
                    <div className="asideB__container2__textColor">
                        <div className="asideB__container2__HEX">
                            <p className="asideB__container2__H">Hexadecimal (#):</p>
                            <p className="asideB__container2__key">0A91C6</p>
                        </div>
                        <div className="asideB__container2__HEX">
                            <p className="asideB__container2__H">RGB:</p>
                            <p className="asideB__container2__key">10, 145, 198</p>
                        </div>
                        <div className="asideB__container2__HEX">
                            <p className="asideB__container2__H">CMYK:</p>
                            <p className="asideB__container2__key">79%, 28%, 8%, 0%</p>
                        </div>
                    </div>
                    <div className="asideB__container2__why">
                        <p className="asideB__container2__whyPB">¿Porqué elegí el color azul?</p>
                        <p className="asideB__container2__whyRB">Este color cambia en algunos aspecto que lo representan, si el anterior era la parte alegre, por este lado está:  la responsabilidad, la seguridad y la confianza. Así que combinandolas da un equilibro en esta marca personal.</p>
                    </div>
                </div>
            </div>
            <div className="asideB__container3">
                <div className="asideB__container2__items">
                    <div  className="asideB__container2__circleW">
                        <div className="asideB__container2__circleWH"></div>
                    </div>
                    <div className="asideB__container2__textColor">
                        <div className="asideB__container2__HEX">
                            <p className="asideB__container2__H">Hexadecimal (#):</p>
                            <p className="asideB__container2__key">FFFFFF</p>
                        </div>
                        <div className="asideB__container2__HEX">
                            <p className="asideB__container2__H">RGB:</p>
                            <p className="asideB__container2__key">255, 255, 255</p>
                        </div>
                        <div className="asideB__container2__HEX">
                            <p className="asideB__container2__H">CMYK:</p>
                            <p className="asideB__container2__key"> 0%, 0%, 0%, 0%</p>
                        </div>
                    </div>
                    <div className="asideB__container2__why">
                        <p className="asideB__container2__whyPW">¿Porque elegí el color blanco?</p>
                        <p className="asideB__container2__whyRW">A la hora de compactar con otro color de fondo siempre es conveniente utilizar los dos colores neutros, Blanco y Negro.</p>
                    </div>
                </div>
            </div>
            <div className="asideB__container4">
                <div className="asideB__container2__items">
                    <div  className="asideB__container2__circleBL">
                        <div className="asideB__container2__circleBK"></div>
                    </div>
                    <div className="asideB__container2__textColor">
                        <div className="asideB__container2__HEX">
                            <p className="asideB__container2__H">Hexadecimal (#):</p>
                            <p className="asideB__container2__key">000000</p>
                        </div>
                        <div className="asideB__container2__HEX">
                            <p className="asideB__container2__H">RGB:</p>
                            <p className="asideB__container2__key">0, 0, 0</p>
                        </div>
                        <div className="asideB__container2__HEX">
                            <p className="asideB__container2__H">CMYK:</p>
                            <p className="asideB__container2__key"> 91%, 79%, 62%, 97%</p>
                        </div>
                    </div>
                    <div className="asideB__container2__why">
                        <p className="asideB__container2__whyPBL">¿Porque elegí el color Negro?</p>
                        <p className="asideB__container2__whyRBL">Hay algunas veces donde este color puede resaltar, pero al ojo humano puede ser muy pesado y agotador, así que esto es algo que los mas probable que no se debe hacer.</p>
                    </div>
                </div>
            </div>
        </aside> 
    )
}