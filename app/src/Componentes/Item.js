import React from "react";

const Item = ({titulo, imagen, precio}) => {
    
    return(
        <div className="detalle.carta" >
                <img className="iphone13" src="https://buytek.net/wp-content/uploads/2021/10/Iphone-13-Pro.11.png"></img>
                <button className="verMas">Ver Más</button>
                <h2 className="titulosCartas"><AiOutlineApple/>{titulo}</h2>
                <h3 className="precio">{precio}</h3>
        </div>
    )
}
export default Item