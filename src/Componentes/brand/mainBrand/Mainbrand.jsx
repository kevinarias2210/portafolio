import React from "react";
import './mainbrand.scss';
import logo from './img/logo.png';
import uno from './img/1.png';
import dos from './img/2.png';
import tres from './img/4.png';
import cuatro from './img/5.png';
import cinco from './img/6.png';


export default function Mainbrand(){
    return(
        <main className="mainB">
            <div className="mainB__container">
                <img className="mainB__container--img" src={logo} alt="logo" />
                <h1 className="mainB__container--title">Marca personal</h1>
            </div>
            <div className="mainB__container2">
                <div className="mainB__container2--items">
                    <div className="mainB__container2--subtitle">
                        <h2 className="mainB__container2--h2">¿Porque unos cubos?</h2>
                    </div>
                    <div className="mainB__container2--paragraph">
                        <p className="mainB__container2--p">Al momento de estar codificando un proyecto, siempre vamos a estar armando o estructurando, así que lo primero que se me ocurrió es un cubo, como si al momento se calleran las ideas.</p>
                    </div>
                </div>
                <div className="mainB__container2--cubes">
                    <div className="mainB__container2--cube1">
                        <div className="mainB__container2--flex">
                            <img className="mainB__container2--img" src={uno} alt="cubes" />
                        </div>
                        <p className="mainB__container2--p1">Simbología de estructurar código</p>
                    </div>
                    <div className="mainB__container2--compleate">
                        <img className="mainB__container2--compleateImg" src={cuatro} alt="Cube 1.5" />
                    </div>
                    <div className="mainB__container2--cube2">
                        <p className="mainB__container2--p2">Simbología de lluvia de ideas</p>
                        <div className="mainB__container2--flex2">
                            <img className="mainB__container2--img" src={dos} alt="cubes" />
                        </div>
                    </div>
                </div>
                <div className="mainB__container2--items2">
                    <div className="mainB__container2--subtitle">
                        <h2 className="mainB__container2--h2">¿Que son esos símbolos y letras?</h2>
                    </div>
                    <div className="mainB__container2--paragraph">
                        <p className="mainB__container2--p">Cuando se está creando un proyecto, se inicia con html y a ello se usan las etiquetas representadas con signos de mayor y menor qué, con una diagonal que la cierra.
                        Las letras significa javascript, que hace que la pagina o app sea dinamica. </p>
                    </div>
                </div>
                <div className="mainB__container2--compleate2">
                    <img className="mainB__container2--compleateImg2" src={cinco} alt="cubes" />
                </div>
                <div className="mainB__container2--explain">
                    <div className="mainB__container2--ex1">
                        <p className="mainB__container2--ep">Extención de javascript</p>
                    </div>
                    <div className="mainB__container2--ex2">
                        <img className="mainB__container2--flex2" src={tres} alt="cuboExplain" />
                    </div>
                    <div className="mainB__container2--ex3">
                    <p className="mainB__container2--ep">Etiquetas HTML</p>
                    </div>
                </div>
            </div>
        </main>
    )
}