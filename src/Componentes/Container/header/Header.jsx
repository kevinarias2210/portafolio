import React from "react";
import './header.scss';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';

export function Header(){
    return(
        <header className="header">
            <div className="header__container">
                <Link to="/">
                    <img className="header__container--img" src={logo} alt="logo de arming code" />
                </Link>
                <div className="header__container--nav">
                    <Link to="/briefcase">
                        <button className="header__container--button">Portafolio</button>
                    </Link>
                    <Link to="/brand">
                        <button className="header__container--button">Mi marca personal</button>
                    </Link>
                </div>
            </div>
        </header> 
    )
}