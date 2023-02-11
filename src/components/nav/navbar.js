/**
 * @author Jose Salvador lopez
 * @name Navbar tipo function
 * @date 03 Febrero del 2023
 * @descripcion Componente global para el estilo y manejo de la barra de navegacion
 * @editorJose 
 * @dateUpdate 
 * @descripcionUpdate 
 * @version 1.0.0
 * @params {links, id, styleClass, children, ref}
 */

import React, {useState} from 'react';
import Item from './item';
import Bar from './bar';
import './_style.scss';
import './../../assets/styles/styles.scss';

export default function Navbar(props) {
    const [header, setHeader] = useState('links');
    return (

        <>
            <div className='site-header-main grid'>
                <div className='site-header-main-wrapper grid'>
                    <div className='site-header-main-logo'>
                        <img alt="logo" src="https://picsum.photos/136/40" className="logo-bar"/>
                    </div>
                    <div className='site-header-main-item content-right'>
                        <Item items={
                            [
                                {
                                    route: "/",
                                    styleClass: 'links-text',
                                    ref: 'Horario Lunes a Viernes. 8am a 5pm,'
                                }, {
                                    route: "/",
                                    styleClass: 'links-text',
                                    ref:" graciasporinvitar@email.com",
                                    children: <i className="fas fa-envelope"></i>
                                }, {
                                    route: "/",
                                    styleClass: 'links-text',
                                    ref: ' 1234567891',
                                    children: <i className="fab fa-whatsapp"></i>
                                }
                            ]
                        }/>
                    </div>
                </div>
            </div> 
            <div className='site-navigation-wrapper'>

                <Bar>
                    <div className="hb-bar"
                        onClick={
                            () => (header !== 'links') ? setHeader('links') : setHeader('links-show')
                    }>
                        <svg viewBox="0 0 100 80" width="40" height="40" className="hamburger-bar">
                            <rect width="100" height="20"></rect>
                            <rect y="30" width="100" height="20"></rect>
                            <rect y="60" width="100" height="20"></rect>
                        </svg>
                    </div>

                    <div className={header}>
                        <Item items={
                            [
                                {
                                    route: "/",
                                    styleClass: 'links-text',
                                    ref: 'Productos'
                                }, {
                                    route: "/",
                                    styleClass: 'links-text',
                                    ref: '¿Quienes Somos?'
                                }, {
                                    route: "/",
                                    styleClass: 'links-text',
                                    children: <i className="fas fa-user"></i>
                                }, {
                                    route: "/",
                                    styleClass: 'links-text',
                                    children: <i className="fas fa-shopping-cart"></i>
                                }

                            ]
                        }/>
                    </div>
                </Bar>
            </div>
        </>

    );
}
