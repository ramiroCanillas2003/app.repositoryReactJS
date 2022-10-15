import React from "react";

function Article() {
    
    return (
        <>
            <article id="article" className="articlePrincipal">
            <div className="containerArticle">
                <div className="containerHijo">
                    <h3>Variedad en Productos</h3>
                    <img className="imagenesContainer" src="https://d500.epimg.net/cincodias/imagenes/2019/09/10/smartphones/1568121499_490816_1568143364_sumario_normal.jpg"></img>
                </div>

                <div className="containerHijo">
                    <h3>Accesorios Apple</h3>
                    <img className="imagenesContainer" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=532&hei=582&fmt=png-alpha&.v=1632861342000"></img>
                </div>   

                <div className="containerHijo">
                    <h3>¡Somos de Mendoza/Agentina!</h3>
                    <img className="imagenesContainer" src="https://img.freepik.com/vector-premium/mapa-isometrico-3d-mendoza-es-provincia-argentina_97886-7462.jpg?w=2000"></img>
                </div>

                <div className="containerHijo">
                    <h3>Garantías</h3>
                    <img className="imagenesContainer" src="https://www.soydemac.com/wp-content/uploads/2018/11/applecare.png"></img>
                </div>        
            </div>
            </article>
        </>
    )
}

export default Article