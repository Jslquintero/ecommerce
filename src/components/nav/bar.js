/**
 * @author Jose Salvador lopez
 * @name Bar tipo function
 * @date 03 Febrero del 2023
 * @descripcion Componente global para el estilo y manejo de la barra de navegacion
 * @editor
 * @dateUpdate 21Febrero del 2023
 * @descripcionUpdate se agregan clases para evitar repetir codigo
 * @version 1.0.3
 * @params {children}
 */

import React from 'react';
import './_style.scss';
import './../../assets/styles/styles.scss';

export default function Bar(props) {
    return (
        <nav className='navbar grid w-100' id='navbar'>
            <ul className='items grid no-list-style content-right'>
                {
                props.children
            }</ul>
        </nav>
    );
}