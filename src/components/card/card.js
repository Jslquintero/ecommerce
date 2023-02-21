/**
 * @author Jose Salvador lopez
 * @name Navbar tipo function
 * @date 06 Febrero del 2023
 * @descripcion Componente privado para tarjetas de productos
 * @editor Jose Salvador lopez
 * @dateUpdate 07 Febrero del 2023
 * @descripcionUpdate refactor de componentes
 * @params {styleType, img, title, subtitle, text}
 */

import React from "react";
import Button from "../form/button/button";
import './_style.scss';
import './../../assets/styles/styles.scss';

export default function Card(props) {
    return (
        <>
            <div className='card grid'>
                <div className="card-img">
                    <img src={
                            props.img
                        }
                        alt="imagen"/>
                </div>
                <div className="card-body grid content-center">
                    <h3 className="card-title">
                        {
                        props.title
                    }</h3>
                    <p className="card-subtitle">
                        {
                        props.subtitle
                    }</p>
                    <p className="card-text">
                        {
                        props.text
                    }</p>
                    <Button styleType="btn-card grid visible" text="Comprar"/>
                </div>
            </div>
        </>
    );
}
