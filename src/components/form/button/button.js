/**
 * @author Jose Salvador lopez
 * @name Navbar tipo function
 * @date 07 Febrero del 2023
 * @descripcion Componente para el boton enviar
 * @editor Jose Salvador lopez 
 * @dateUpdate 
 * @descripcionUpdate 
 * @version 1.0.0
 * @params 
 */

import React from 'react';

export default function Button(props) {

    return (
        <>
            <button className={
                props.styleType
            }>
                {
                props.text
            }</button>
        </>

    )
}
