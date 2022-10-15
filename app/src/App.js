import React from "react";
import ReactDOM from 'react-dom/client';
import Nabvar from "./Componentes/NavBar.js";
import Section from './Componentes/Section.js';
import Article from "./Componentes/Article.js";
import Footer from "./Componentes/Footer.js";
import "./estilos.css"

function App() {

    return (
        <>  
            <Nabvar/>
            <Section/>
            <Article/>
            <Footer/>
        </>
    )
}

export default App;