import React from "react";
import NavBar from "./NavBar";
import { SiGmail } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { AiOutlineArrowDown } from "react-icons/ai";

function Footer() {
    

    return (
        <>
            <div className="footer">
                <NavBar/>

                <div className="redesFooter">
                    <h3 className="tituloRedes"><AiOutlineArrowDown/> ¡Síguenos en nuestras redes sociales! <AiOutlineArrowDown/></h3>
                    <div className="redesSociales">
                        <a href="https://www.instagram.com/ramirocanillas_/"><SiInstagram/> Instagram</a>

                        <a href="https://github.com/ramiroCanillas2003"><SiGithub/> GitHub</a>

                        <a href="https://www.linkedin.com/in/ramiro-canillas-176570223/"><SiLinkedin/> Linkedin</a>

                        <a href="mailto:ramirocanillas31@gmail.com"><SiGmail/> Gmail</a>
                    </div>
                </div>

                <div>
                    <h2 className="copyright">Copyright © Apple Store, Mendoza. 2022 • Todos los derechos reservados •</h2>
                </div>
            </div>
        </>
    )
}

export default Footer 
