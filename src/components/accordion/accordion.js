/**
 * @author Jose Salvador lopez
 * @name Navbar tipo function
 * @date 07 Febrero del 2023
 * @descripcion Componente para el acordeon
 * @editor Jose Salvador lopez 
 * @dateUpdate 
 * @descripcionUpdate 
 * @version 1.0.0
 * @params 
 */

import React from 'react';
import './_style.scss';

export default function Accordion(props) {


        return(< div className = "accordion"> <div className="accordion-item">
            <div className="accordion-header">Categorias</div>
            <div className="accordion-body">
                <ul>
                    <li>categoria 1</li>
                    <li>categoria 2</li>
                    <li>categoria 3</li>
                    <li>categoria 4</li>
                </ul>
            </div>
        </div>
        <div className="accordion-item">
            <div className="accordion-header">precio</div>
            <div className="accordion-body">
                <ul>
                    <li>precio 1</li>
                    <li>precio 2</li>
                    <li>precio 3</li>
                    <li>precio 4</li>
                </ul>
            </div>
        </div>
    </div>
    )

}
