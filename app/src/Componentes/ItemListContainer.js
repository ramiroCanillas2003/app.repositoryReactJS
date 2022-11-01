import React from "react";
import { useEffect , useState } from "react"
import ItemList from "./ItemList"


let productosIniciales = [
    {id:1, nombre:"iphone13"}, 
    {id:2, nombre:"iphone12"},
    {id:3, nombre:"macBook"},
    {id:4, nombre:"appleWatch"},
    {id:5, nombre:"cargador"},
    {id:6, nombre:"auriculares"}]

const ItemListContainer = () => {

    const [items, setItems] = useState ([])

    useEffect(()=>{
        console.log("pido los productos mientras se carga")

        let simulacionPedido = new Promise((res) => {
            setTimeout(()=>{
                res(productosIniciales)
            },2000)
        })

        simulacionPedido
            .then((respuesta)=>{
                setItems(respuesta)
        })

        simulacionPedido
            .catch((error)=>{
                console.log(error)
        })
    })

    

    return(
        <div>{ items.length == 0 ? <h2>cargando...</h2> : <ItemList items={items}/> }</div>
    )

}

export default ItemListContainer








