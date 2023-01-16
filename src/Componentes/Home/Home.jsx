import React from "react";
/* import { Link } from 'react-router-dom'; */
import {Header} from '../Container/header/Header';
import {Main} from '../Container/main/Main';
import {Aside} from '../Container/aside/Aside';

export function Home(){
    return(
        <div>
            <Header />
            <Main />
            <Aside />
        </div>
    )
}