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

export default function Navbar(props) {
    const [header, setHeader] = useState('links');
    return (

        <>
            <Bar options={
                {
                    navStyle: 'navbar-info',
                    navId: 'navbar-info'
                }
            }>


                <div className='horarios'>
                    <Item itemStyle='horario-item content-left'
                        items={
                            [{
                                    route: "/",
                                    styleClass: 'links-text',
                                    key: 'horario',
                                    ref: 'Horario Lunes a Viernes. 8am a 5pm,'
                                }]
                        }/>
                </div>

                <div className='contact'>
                    <Item itemStyle='contact-item content-center'
                        items={
                            [
                                {
                                    route: "/",
                                    styleClass: 'links-text',
                                    key: 'correo',
                                    children: <i class="fa-solid fa-envelope"></i>
                                }, {
                                    route: "/",
                                    styleClass: 'links-text',
                                    key: 'whatsapp',
                                    children: <i class="fa-brands fa-whatsapp"></i>
                                }
                            ]
                        }/>
                </div>

                <div className='redes'>
                    <Item itemStyle='red-item content-right'
                        items={
                            [
                                {
                                    route: "/",
                                    styleClass: 'links-text',
                                    key: 'facebook',
                                    children: <i class="fa-brands fa-facebook-f"></i>
                                }, {
                                    route: "/",
                                    styleClass: 'links-text',
                                    key: 'instagram',
                                    children: <i class="fa-brands fa-instagram"></i>
                                }
                            ]
                        }/>
                </div>

            </Bar>

            <Bar options={
                {
                    navStyle: 'navbar',
                    navId: 'navbar'
                }
            }>
                <div className="navbar-logo">

                    <Item itemStyle='nav-item'
                        items={
                            [{
                                    route: "/",
                                    styleClass: 'logo-bar',
                                    ref: '',
                                    key: 'logo',
                                    children: <span className='logo'>
                                        <img width={42}
                                            height={46}
                                            alt="logo"
                                            className="logo-bar"/>
                                    </span>
                                }]
                        }/>

                </div>
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

                <div className='menu-1'>
                    <Item itemStyle='menu-item'
                        items={
                            [
                                {
                                    route: "/",
                                    styleClass: 'links-text',
                                    key: 'productos',
                                    ref: 'Productos'
                                }, {
                                    route: "/",
                                    styleClass: 'links-text',
                                    key: 'quienes-somos',
                                    ref: '¿Quiénes somos?'
                                }
                            ]
                        }/>
                </div>


                <div className='menu-2'>
                    <Item itemStyle='menu2-item'
                        items={
                            [
                                {
                                    route: "/",
                                    styleClass: 'links-text',
                                    key: 'cuenta',
                                    children: <i class="fa-solid fa-user"></i>
                                }, {
                                    route: "/",
                                    styleClass: 'links-text',

                                    children: <i class="fa-solid fa-shopping-cart"></i>
                                }

                            ]
                        }/>
                </div>
            </Bar>
        </>

    );
}
