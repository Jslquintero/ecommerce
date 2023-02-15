/**
 * @author Jose Salvador lopez
 * @name Item tipo function
 * @date 03 Febrero del 2023
 * @descripcion Componente global para el estilo y manejo de la barra de navegacion
 * @editorJose 
 * @dateUpdate 
 * @descripcionUpdate 
 * @version 1.0.0
 * @params {links, id, styleClass, children, ref}
 */
import React from "react";

export default function Item(props) {
    const itemsLinks = props.items.map((item, index) => <a key={
            item.id || index
        }
        href={
            item.route
        }
        className={
            item.styleClass
    }>
        {
        item.children
    }
        {
        item.ref
    } </a>);
    return (
        <li className="nav-item grid grid-cols-1">
            {itemsLinks}
        </li>
    );
}
