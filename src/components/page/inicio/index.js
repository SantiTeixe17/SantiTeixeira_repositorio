import React from 'react'
import { Link } from "react-router-dom";
import Portada from "images/inicio.jpg";

export default function Inicio() {
    return (
        <div className="inicio">   
            <img src={Portada} alt="" height={700}/>
        </div>
    )
}
