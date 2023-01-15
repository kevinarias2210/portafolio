import React from "react";
import './header.scss';
import logo from './img/logo.png';

export function Header(){
    return(
        <header className="header">
            <div className="header__container">
                <a href="/">
                    <img className="header__container--img" src={logo} alt="logo de arming code" />
                </a>
                <div className="header__container--nav">
                    <button className="header__container--button">Portafolio</button>
                    <button className="header__container--button">Mi marca personal</button>
                </div>
            </div>
        </header> 
    )
}