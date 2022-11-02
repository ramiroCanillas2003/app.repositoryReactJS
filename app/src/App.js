import ReactDOM from 'react-dom/client';
import React from "react";
import Nabvar from "./Componentes/NavBar.js";
import Home from "./Componentes/Home.js";
import ItemListContainer from "./Componentes/ItemListContainer.js"
import Article from './Componentes/Article.js';
import Carrito from './Componentes/Carrito.js';
import Contacto from './Componentes/Contacto.js';
import "./estilos.css"
import { Routes , Route, Router } from "react-router-dom"
import ItemDetailContainer from './Componentes/ItemDetailContainer.js';


function App() {

    return (
        <>
            <Routes>

                <Route path='/' element={<Nabvar/>}>
                    <Route path='/home' element={<Home/>}></Route>
                    <Route path='/catalogo' element={<ItemListContainer/>}></Route>
                    <Route path='/catalogo/:nombreProducto' element={<ItemListContainer/>}></Route>
                    <Route path='/contacto' element={<Contacto/>}></Route>
                    <Route path='/detalle/:idProducto' element={<ItemDetailContainer/>}></Route>
                    <Route path='/containerArticle' element={<Article/>}></Route>
                    <Route path='/carrito' element={<Carrito/>}></Route>
                </Route>

            </Routes>
        </>
    )        
}

export default App;