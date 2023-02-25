import React from "react";
import { Header } from "../Container/header/Header";

export default function Containheader({ children }){
    return(
        <>
            <div className="contenedorHeader">
                <Header />
            </div>
            {children}
        </>
    )
}