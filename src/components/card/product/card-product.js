/**
 * @author Jose Salvador lopez
 * @name Navbar tipo function
 * @date 06 Febrero del 2023
 * @descripcion Componente privado para tarjetas de productos
 * @editor Jose Salvador lopez
 * @dateUpdate 
 * @descripcionUpdate 
 * @version 1.0.0
 * @params 
 */

import './_style.scss';

import React from "react";

export default function Card(props) {
    return (
        <>
            <div className='card-product'>
                <div className="image-container">
                    <img src={
                            props.src
                        }
                        alt="imagen"/>
                </div>
                <div className="card-container ">
                    <div className="card-title">
                        <h3>{
                            props.title
                        }</h3>
                    </div>
                    <div className="card-price">
                        <p>$ {
                            props.price
                        }</p>
                    </div>
                    <div className="card-description">
                        <p>{
                            props.description
                        }</p>
                    </div>
                    <div className="card-button">
                        <button>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </>
    );
}
