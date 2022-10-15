import React from "react";

function Section() {

    return (
        <>
            <h2 className="tituloApple">Apple Store</h2>

            <div id="sobre-nosotros">
                <img className="imgEcommerce" src="https://www.iplacecorp.com.uy/wp-content/uploads/1-removebg.png"></img>
            </div>

            <div className="container">
                <div className="containerHijo">
                    <h3>Envíos</h3>
                    <img className="imagenesContainer" src="https://tuquejasuma.com/media/images/entity253_square_7PcGqJE.jpeg"></img>
                </div>

                <div className="containerHijo">
                    <h3>Medios de Pago</h3>
                    <img className="imagenesContainer" src="https://www.clarin.com/img/2019/08/12/UmaBT-YvG_360x240__1.jpg"></img>
                </div>   

                <div className="containerHijo">
                    <h3>Reembolsos</h3>
                    <img className="imagenesContainer" src="https://inversian.com/wp-content/uploads/2016/09/que-es-reembolso-2.jpg"></img>
                </div>     
            </div>
        </>
    )
}

export default Section
