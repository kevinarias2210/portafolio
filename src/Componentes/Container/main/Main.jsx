import React from "react";
import './main.scss';
import photo from './img/yo.png';

export function Main(){
    return(
        <main className="main">
            <div className="main__container">
                <div className="main__container--greeting">
                    <p className="main__container--p1">Hola, soy</p>
                    <p className="main__container--p2">Kevin Arias.</p>
                    <p className="main__container--p3">Desarrollador web full stack </p>
                </div>
                <div className="main__container--picture">
                    <div className="main__container--circle"></div>
                    <div className="main__container--photo">
                        <img src={photo} alt="My_photo" />
                    </div>
                </div>
            </div>
        </main>
    )
}