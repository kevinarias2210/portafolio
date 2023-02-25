import React from "react";
import {Main} from '../Container/main/Main';
import {Aside} from '../Container/aside/Aside';
import Containheader from "../Containheader/Containheader";

export default function Home(){
    return(
        <Containheader>
            <Main />
            <Aside />
        </Containheader>
    )
}