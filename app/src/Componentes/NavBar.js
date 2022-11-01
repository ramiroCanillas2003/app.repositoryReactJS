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
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"


function NavBar() {
    
    return (
        <>
            <nav id="home">
                <ul>
                    <li>
                        <img class="logo" src="https://m.media-amazon.com/images/S/abs-image-upload-na/2/AmazonStores/ATVPDKIKX0DER/7eebebcb7d51c07d3705267aec003883.w400.h400.jpg" alt=""></img>
                        <Link to="/home" id="home"><ImHome/> Home</Link>
                        <Link to="/catalogo" id="article"><ImBook/> Productos</Link>
                        <Link to="/containerArticle" id=""><ImParagraphCenter/> Información</Link>
                        <Link to="/carrito" className="carrito"><ImCart/> Carrito</Link>
                    </li>
                </ul>
            </nav>

            <nav className="navSecundario">
                <ul>
                    <li>
                        <Link to="/catalogo/Iphone13" className="aDos" id="envios"><AiOutlineCompass/> Iphone 13 </Link>
                        <Link to="/catalogo/Iphone12" className="aDos" id="devoluciones"><AiFillInteraction/> Iphone 12</Link>
                        <Link to="/contacto" className="aDos" id="contacto"><AiOutlineUser/> Contacto</Link>
                        <Link to="/catalogo/MacBook" className="aDos" id="redes-sociales"><AiOutlineHeart/> Mac Book</Link>
                        <Link to="/catalogo/AppleWatch" className="aDos" id=""><AiOutlineInsertRowRight/> Apple Watch</Link>
                        <Link to="/catalogo/Cargador" className="aDos" id="info"><AiOutlineTeam/> Cargador</Link>
                    </li>
                </ul>
            </nav>   

            <Outlet/>
        </>
    )
}

export default NavBar
