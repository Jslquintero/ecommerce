/**
 * @author Jose Salvador lopez
 * @name Sidebar tipo function
 * @date 10 Febrero del 2023
 * @descripcion sidebar function
 * @editor Jose Salvador lopez
 * @dateUpdate  
 * @descripcionUpdate 
 * @version 1.0.0
 * @params 
 */


import React from "react";
import "./_style.scss";

export default function Sidebar(props) {

    return (
        <div className="sidebar">
            <div className="sidebar__nav">
                <ul className="sidebar__nav-list">
                    <li className="sidebar__nav-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="sidebar__nav-item">
                        <a href="#">About</a>
                    </li>
                    <li className="sidebar__nav-item">
                        <a href="#">Services</a>
                    </li>
                    <li className="sidebar__nav-item">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
