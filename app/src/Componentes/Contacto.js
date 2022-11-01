import React from "react";

function Contacto() {
    

    return (
        <>
            <div class="contact_form">

            <div class="formulario">      
                <h1>Formulario de contacto</h1>
                <h3 className="escribenos">Escríbenos y en breve los pondremos en contacto contigo</h3>

                    <form action="submeter-formulario.php" method="post">       
                    
                        <p className="parrafoContacto">
                            <label for="nombre" class="colocar_nombre">Nombre
                            <span class="obligatorio">*</span>
                            </label>
                            <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Escribe tu nombre"></input>
                        </p>
                        
                        <p className="parrafoContacto">
                            <label for="email" class="colocar_email">Email
                            <span class="obligatorio">*</span>
                            </label>
                            <input type="email" name="introducir_email" id="email" required="obligatorio" placeholder="Escribe tu Email"></input>
                        </p>
                    
                        <p className="parrafoContacto">
                            <label for="telefone" class="colocar_telefono">Teléfono
                            </label>
                            <input type="tel" name="introducir_telefono" id="telefono" placeholder="Escribe tu teléfono"></input>
                        </p>    
                        
                        <p className="parrafoContacto">
                            <label for="website" class="colocar_website">Sitio web
                            </label>
                            <input type="url" name="introducir_website" id="website" placeholder="Escribe la URL de tu web"></input>
                        </p>    
                        
                        <p className="parrafoContacto">
                            <label for="asunto" class="colocar_asunto">Asunto
                            <span class="obligatorio">*</span>
                            </label>
                            <input type="text" name="introducir_asunto" id="assunto" required="obligatorio" placeholder="Escribe un asunto"></input>
                        </p>    
                        
                        <p className="parrafoContacto">
                            <label for="mensaje" class="colocar_mensaje">Mensaje
                            <span class="obligatorio">*</span>
                            </label>                     
                                            <textarea name="introducir_mensaje" class="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Deja aquí tu comentario..."></textarea> 
                                        </p>                    
                        
                        <button type="submit" name="enviar_formulario" id="enviar"><p>Enviar</p></button>

                        <p class="aviso">
                            <span class="obligatorio"> * </span>Todos los campos son obligatorios. *
                        </p>          
                    
                    </form>
            </div>  
            </div>
        </>
    )
}

export default Contacto