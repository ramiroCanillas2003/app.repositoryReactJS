import React from "react";
import { AiOutlineApple } from "react-icons/ai"
import { ImCart } from "react-icons/im";
import { VscDebugLineByLine } from "react-icons/vsc";
import { Form, useParams } from "react-router-dom"
import Item from "./Item";

const ItemList = () =>{
    return (
        <>
                <div id="catalogo" className="divCatalogo">
                    <div className="carta" >
                        <img className="iphone13" src="https://buytek.net/wp-content/uploads/2021/10/Iphone-13-Pro.11.png"></img>
                        <button className="verMas"> Ver Más</button>
                        <h3 className="titulosCartas"><AiOutlineApple/> Iphone 13 Pro Max 128GB</h3>
                        <h3 className="titulosPrecios">ARS $320.000</h3>
                    </div>

                    <div className="carta" >
                        <img className="iphone13" src="https://shop.litecorp.com.ar/wp-content/uploads/2021/11/iphone12-black.png"></img>
                        <button className="verMas"> Ver Más</button>
                        <h3 className="titulosCartas"><AiOutlineApple/> Iphone 12 64GB</h3>
                        <h3 className="titulosPrecios12">ARS $220.000</h3>
                    </div>

                    <div className="carta" >
                        <img className="iphone13" src="https://buytek.net/wp-content/uploads/2021/10/Iphone-13-Pro.11.png"></img>
                        <button className="verMas">Ver Más</button>
                        <h3 className="titulosCartas"><AiOutlineApple/> Iphone 12 64GB</h3>
                        <h3 className="titulosPrecios12">ARS $220.000</h3>
                    </div>

                    <div className="carta" >
                        <img className="iphone13" src="https://shop.litecorp.com.ar/wp-content/uploads/2021/11/iphone12-black.png"></img>
                        <button className="verMas"> Ver Más</button>
                        <h3 className="titulosCartas"><AiOutlineApple/> Iphone 12 64GB</h3>
                        <h3 className="titulosPrecios12">ARS $220.000</h3>
                    </div>

                    <div className="carta" >
                        <img className="iphone13" src="https://buytek.net/wp-content/uploads/2021/10/Iphone-13-Pro.11.png"></img>
                        <button className="verMas"> Ver Más</button>
                        <h3 className="titulosCartas"><AiOutlineApple/> Iphone 13 Pro Max 128GB</h3>
                        <h3 className="titulosPrecios">ARS $320.000</h3>
                    </div>

                    <div className="carta" >
                        <img className="iphone13" src="https://shop.litecorp.com.ar/wp-content/uploads/2021/11/iphone12-black.png"></img>
                        <button className="verMas"> Ver Más</button>
                        <h3 className="titulosCartas"><AiOutlineApple/> Iphone 12 64GB</h3>
                        <h3 className="titulosPrecios12">ARS $220.000</h3>
                    </div>

                    <div className="carta" >
                        <img className="iphone13" src="https://buytek.net/wp-content/uploads/2021/10/Iphone-13-Pro.11.png"></img>
                        <button className="verMas"> Ver Más</button>
                        <h3 className="titulosCartas"><AiOutlineApple/> Iphone 13 Pro Max 128GB</h3>
                        <h3 className="titulosPrecios">ARS $320.000</h3>
                    </div>
                    
                    <div className="carta" >
                        <img className="iphone13" src="https://shop.litecorp.com.ar/wp-content/uploads/2021/11/iphone12-black.png"></img>
                        <button className="verMas"> Ver Más</button>
                        <h3 className="titulosCartas"><AiOutlineApple/> Iphone 12 64GB</h3>
                        <h3 className="titulosPrecios12">ARS $220.000</h3>
                    </div>
                    
                    <div className="carta" >
                        <img className="iphone13" src="https://buytek.net/wp-content/uploads/2021/10/Iphone-13-Pro.11.png"></img>
                        <button className="verMas"> Ver Más</button>
                        <h3 className="titulosCartas"><AiOutlineApple/> Iphone 13 Pro Max 128GB</h3>
                        <h3 className="titulosPrecios">ARS $320.000</h3>
                    </div>
                    
                    <div className="carta" >
                        <img className="iphone13" src="https://shop.litecorp.com.ar/wp-content/uploads/2021/11/iphone12-black.png"></img>
                        <button className="verMas"> Ver Más</button>
                        <h3 className="titulosCartas"><AiOutlineApple/> Iphone 12 64GB</h3>
                        <h3 className="titulosPrecios12">ARS $220.000</h3>
                    </div>
                    
                    <div className="carta" >
                        <img className="iphone13" src="https://buytek.net/wp-content/uploads/2021/10/Iphone-13-Pro.11.png"></img>
                        <button className="verMas"> Ver Más</button>
                        <h3 className="titulosCartas"><AiOutlineApple/> Iphone 13 Pro Max 128GB</h3>
                        <h3 className="titulosPrecios">ARS $320.000</h3>
                    </div>
                    
                    <div className="carta" >
                        <img className="iphone13" src="https://shop.litecorp.com.ar/wp-content/uploads/2021/11/iphone12-black.png"></img>
                        <button className="verMas"> Ver Más</button>
                        <h3 className="titulosCartas"><AiOutlineApple/> Iphone 12 64GB</h3>
                        <h3 className="titulosPrecios12">ARS $220.000</h3>
                    </div>    
            </div>
        </>

    )
}

export default ItemList


