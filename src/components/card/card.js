/**
 * @author Jose Salvador lopez
 * @name Navbar tipo function
 * @date 06 Febrero del 2023
 * @descripcion Componente privado para tarjetas de productos
 * @editor Jose Salvador lopez
 * @dateUpdate 07 Febrero del 2023
 * @descripcionUpdate refactor de componentes
 * @params 
 */

import React from "react";
import Button from "../form/button/button";

import './_style.scss';

export default function Card(props) {
    return (
        <>
            <div className="card">
                <div className="card__img">
                    <img src={
                            props.img
                        }
                        alt="imagen"/>
                </div>
                <div className="card__body">
                    <h3 className="card__title">
                        {
                        props.title
                    }</h3>
                    <p className="card__subtitle">
                        {
                        props.subtitle
                    }</p>
                    <p className="card__text">
                        {
                        props.text
                    }</p>
                    <Button styleType="btn btn--primary" text="Comprar"/>
                </div>
            </div>
        </>
    );
}
