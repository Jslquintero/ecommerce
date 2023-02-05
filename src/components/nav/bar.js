/**
 * @author Jose Salvador lopez
 * @name Bar tipo function
 * @date 03 Febrero del 2023
 * @descripcion Componente global para el estilo y manejo de la barra de navegacion
 * @editor
 * @dateUpdate 
 * @descripcionUpdate 
 * @version 1.0.0
 * @params {nav, navId, children}
 */

import React from 'react';

export default function Bar(props) {
    return (
        <nav className={props.options.navStyle} id={props.options.navId}>
            <ul className='items'>
                {
                props.children
            }</ul>
        </nav>
    );
}