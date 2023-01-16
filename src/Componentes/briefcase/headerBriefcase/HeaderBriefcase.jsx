import React from "react";
import { Link } from 'react-router-dom';
import logo from './img/logo.png';
import HomeBriefcase from '../../HomeBriefcase/HomeBriefcase';

export default function HeaderBriefcase(){
    return(
        <header className="header">
            <div className="header__container">
                <a href="/">
                    <img className="header__container--img" src={logo} alt="logo de arming code" />
                </a>
                <div className="header__container--nav">
                    <Link to="briefcase">
                        <button className="header__container--button">Portafolio</button>
                    </Link>
                    <Link to="brand">
                        <button className="header__container--button">Mi marca personal</button>
                    </Link>
                </div>
            </div>
            <HomeBriefcase />
        </header>
    )
}