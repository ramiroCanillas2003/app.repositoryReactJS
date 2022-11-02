import React from "react"
import { randProduct } from '@ngneat/falso';
import Footer from "./Footer";
import ItemCount from "./ItemCount";

function ItemDetail() {

    const producto = randProduct ();

    return (
        <>
            <div className="divDetail">
                <h2>{producto.title} - ${producto.price}</h2>
                <img className="imageDetail" src="https://buytek.net/wp-content/uploads/2021/10/Iphone-13-Pro.11.png" alt={producto.title}></img>
                <p>{producto.description}</p>
                <p>{producto.description}</p>
                <ItemCount/>
            </div>
        
            <Footer/>
        </>
    )    
}

export default ItemDetail