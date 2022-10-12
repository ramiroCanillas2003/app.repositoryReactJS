import React from "react";

function Header() {
    
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <img class="logo" src="https://i.pinimg.com/736x/18/c4/e7/18c4e708b44a50cc53dc28e96e3b0c3d.jpg" alt=""></img>
                        <a id="home" href="">Home</a>
                        <a id="productos" href="">Productos</a>
                        <a id="sobre-nosotros" href="#sobre-nosotros">Sobre Nosotros</a>
                    </li>
                </ul>
            </nav>

            <nav className="navSecundario">
                <ul>
                    <li>
                        <a className="aDos" id="" href="">Talles</a>
                        <a className="aDos" id="" href="">Envíos</a>
                        <a className="aDos" id="" href="">Devoluciones</a>
                        <a className="aDos" id="" href="">Contacto</a>
                        <a className="aDos" id="" href="">Redes Sociales</a>
                        <a className="aDos" id="" href="">Sucursales</a>
                        <a className="aDos" id="" href="">Información</a>
                    </li>
                </ul>
            </nav>   
        </>
    )}

export default Header