import React from "react";
import '../estilos/catalogo.css';
function Buscar(){
    return(
        <>
        <input type="text" 
            className="form-control" 
            onChange={(e) => Filter(e)} placeholder='Busca por título, autor o ISBN'
            // value={searchValue}
            >
            </input>
        </>
    )
}

export default Buscar;