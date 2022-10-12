import React from "react";

function Section() {

    return (
        <>
            <div id="sobre-nosotros">
                <img className="imgEcommerce" src="https://cdn.lifehackerguy.com/wp-content/uploads/2019/02/ecommerce-website-header.jpg"></img>
            </div>

            <div className="container">
                <div className="containerHijo">
                    <h3>Envíos</h3>
                    <img className="imagenesContainer" src="https://tuquejasuma.com/media/images/entity253_square_7PcGqJE.jpeg"></img>
                </div>

                <div className="containerHijo">
                    <h3>Medios de Pago</h3>
                    <img className="imagenesContainer" src="https://www.mycreditunion.gov/sites/default/files/toolkit-graphics/paying-off-ccs_toolbox.jpg"></img>
                </div>   

                <div className="containerHijo">
                    <h3>Reembolsos</h3>
                    <img className="imagenesContainer" src="https://uploadgerencie.com/imagenes/devolver-dinero-compra.png"></img>
                </div>     
            </div>
        </>
    )
}

export default Section
