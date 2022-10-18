import React from "react";
import { ImCart } from "react-icons/im";
import { ImHome } from "react-icons/im";
import { ImBook } from "react-icons/im";
import { ImParagraphCenter } from "react-icons/im";
import { AiOutlineCompass } from "react-icons/ai";
import { AiFillInteraction } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
import { AiOutlineInsertRowRight } from "react-icons/ai"
import { AiOutlineTeam } from "react-icons/ai"

function NavBar() {
    
    return (
        <>
            <nav id="home">
                <ul>
                    <li>
                        <img class="logo" src="https://m.media-amazon.com/images/S/abs-image-upload-na/2/AmazonStores/ATVPDKIKX0DER/7eebebcb7d51c07d3705267aec003883.w400.h400.jpg" alt=""></img>
                        <a id="home" href="#home"><ImHome/> Home</a>
                        <a id="quienes-somos" href="#article"><ImBook/> Productos</a>
                        <a id="" href="#sobre-nosotros"><ImParagraphCenter/> Información</a>
                        <a className="carrito" href="#carrito"><ImCart/> Carrito</a>
                    </li>
                </ul>
            </nav>

            <nav className="navSecundario">
                <ul>
                    <li>
                        <a className="aDos" id="envios" href="https://www.lipsum.com/"><AiOutlineCompass/> Envíos</a>
                        <a className="aDos" id="devoluciones" href="https://www.lipsum.com/"><AiFillInteraction/> Devoluciones</a>
                        <a className="aDos" id="contacto" href="https://www.lipsum.com/"><AiOutlineUser/> Contacto</a>
                        <a className="aDos" id="redes-sociales" href="https://www.lipsum.com/"><AiOutlineHeart/> Redes Sociales</a>
                        <a className="aDos" id="" href="#catalogo"><AiOutlineInsertRowRight/> Catálogo</a>
                        <a className="aDos" id="info" href="https://www.lipsum.com/"><AiOutlineTeam/> Sobre Nosotros</a>
                    </li>
                </ul>
            </nav>   
        </>
    )
}

export default NavBar
