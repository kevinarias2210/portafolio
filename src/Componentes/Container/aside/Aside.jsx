import React from "react";
import './aside.scss';
import linkedIn from './img/linkedin.png';
import phone from './img/phone.png';
import gmail from './img/gmail.png';

export function Aside(){
    return(
        <aside className="aside">
            <div className="aside__container">
                <div className="aside__container--about">
                    <div className="aside__container--aboutMe">
                        <h2 className="aside__container--h2">Acerca de mi:</h2>
                    </div>
                    <div className="aside__container--info">
                        <p className="aside__container--p">Tengo 25 años, soy productor de multimedia y recién egresado de educamás, un bootcamp de seis meses. Mi objetivo profesional es seguir aprendiendo y utilizar mis conocimientos para aportar a la empresa.</p>
                    </div>
                </div>
                <div className="aside__container--contact">
                    <div className="aside__container--con">
                        <h2 className="aside__container--h2">Contacto:</h2>
                    </div>
                    <div className="aside__container--red">
                        <div className="aside__container--linkedIn">
                            <img className="aside__container--img" src={linkedIn} alt="linkedIn" />
                            <p className="aside__container--p">Kevin Steven Arias Duarte</p>
                        </div>
                        <div className="aside__container--number">
                            <img className="aside__container--img" src={phone} alt="phone" />
                            <p className="aside__container--p">3012970696</p>
                        </div>
                        <div className="aside__container--gmail">
                            <img className="aside__container--img" src={gmail} alt="gmail" />
                            <p className="aside__container--p">kariasduarte@gmail.com</p>
                        </div>
                        <div className="aside__container--download">
                            <a href="https://drive.google.com/file/d/1E3ILD43IBRfSv3Gjqf0Jt8zK1kYGHHJN/view?usp=sharing" target="_blank" rel="noreferrer" className="aside__container--button">Ver CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}