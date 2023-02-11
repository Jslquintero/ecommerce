/**
 * @author Jose Salvador lopez
 * @name search tipo function
 * @date 10 Febrero del 2023
 * @descripcion componente barra de busqueda
 * @editor Jose Salvador lopez
 * @dateUpdate 
 * @descripcionUpdate  
 * @version 1.0.0
 * @params 
 */

import React from "react";
import "./_style.scss";


export default function Search(props) {
    return (
        <div className="search">
            <input className="input-text" type="text" placeholder="Buscar"/>
            <span class="fa fa-search"/>
        </div>
    );
}
