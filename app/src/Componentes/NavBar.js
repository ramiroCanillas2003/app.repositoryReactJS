import React from "react";
import { BiCart } from "react-icons/bi";

function NavBar() {
    
    return (
        <>
            <nav id="home">
                <ul>
                    <li>
                        <img class="logo" src="https://m.media-amazon.com/images/S/abs-image-upload-na/2/AmazonStores/ATVPDKIKX0DER/7eebebcb7d51c07d3705267aec003883.w400.h400.jpg" alt=""></img>
                        <a id="home" href="#home">Home</a>
                        <a id="quienes-somos" href="#article">¿Quiénes Somos?</a>
                        <a id="sobre-nosotros" href="#sobre-nosotros">Información</a>
                        <a><BiCart/></a>
                    </li>
                </ul>
            </nav>

            <nav className="navSecundario">
                <ul>
                    <li>
                        <a className="aDos" id="envios" href="">Envíos</a>
                        <a className="aDos" id="devoluciones" href="">Devoluciones</a>
                        <a className="aDos" id="contacto" href="">Contacto</a>
                        <a className="aDos" id="redes-sociales" href="">Redes Sociales</a>
                        <a className="aDos" id="catalogo" href="">Catálogo</a>
                        <a className="aDos" id="info" href="">Información</a>
                    </li>
                </ul>
            </nav>   
        </>
    )
}

export default NavBar
