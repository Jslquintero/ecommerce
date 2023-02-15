/**
 * @author Jose Salvador lopez
 * @name Bar tipo function
 * @date 03 Febrero del 2023
 * @descripcion Componente global para el estilo y manejo de la barra de navegacion
 * @editor
 * @dateUpdate 08 Febrero del 2023
 * @descripcionUpdate refactor de codigo
 * @version 1.0.2
 * @params {children}
 */

import React from 'react';
import './_style.scss';
import './../../assets/styles/styles.scss';

export default function Bar(props) {
    return (
        <nav className='navbar grid grid-cols-2' id='navbar'>
            <div></div>
            <ul className='items grid-gap-1 content-right'>
                {
                props.children
            }</ul>
        </nav>
    );
}