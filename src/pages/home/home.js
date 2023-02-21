/**
 * @author Jose Salvador lopez
 * @name home page
 * @date 03 Febrero del 2023
 * @descripcion Pagina principal
 * @editor Jose Salvador lopez
 * @dateUpdate 06 Febrero del 2023
 * @descripcionUpdate  agregar tarjetas
 * @version 1.0.1
 * @params 
 */

import React from "react";
import Navbar from "../../components/nav/navbar";
import Card from "../../components/card/card";
import Select from "../../components/form/select/select";
import Search from "../../components/form/search/search";
import './_style.scss';
import './../../assets/styles/styles.scss';

export default function Home() {

    const callApi = () => { // consume api
        const cards = [
            {
                img: "https://picsum.photos/200/300",
                title: "GPI",
                subtitle: "1000",
                text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
            },
            {
                img: "https://picsum.photos/200/300",
                title: "GPI",
                subtitle: "1000",
                text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
            },
            {
                img: "https://picsum.photos/200/300",
                title: "GPI",
                subtitle: "1000",
                text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
            },
            {
                img: "https://picsum.photos/200/300",
                title: "GPI",
                subtitle: "1000",
                text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
            }, {
                img: "https://picsum.photos/200/300",
                title: "GPI",
                subtitle: "1000",
                text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
            }, {
                img: "https://picsum.photos/200/300",
                title: "GPI",
                subtitle: "1000",
                text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
            }
        ]
        const data = cards.map((card) => {
            return (
                <Card className={
                        {styleType: "card"}
                    }
                    img={
                        card.img
                    }
                    title={
                        card.title
                    }
                    subtitle={
                        card.subtitle
                    }
                    text={
                        card.text
                    }/>
            )
        });

        return data;
    }

    const options = [
        {
            value: "1",
            label: "Los Más Vendidos"
        }, {
            value: "2",
            label: "Los Más Vendidos"
        }, {
            value: "3",
            label: "Los Más Vendidos"
        }, {
            value: "4",
            label: "Los Más Vendidos"
        }
    ]

    const marca = [
        {
            value: "1",
            label: "Los Más Vendidos"
        }, {
            value: "2",
            label: "Orden alfabético"
        }
    ]

    const precio = [
        {
            value: "1",
            label: "Mayor a menor"
        }, {
            value: "2",
            label: "Menor a mayor"
        }
    ]

    return (
        <>
            <Navbar/>


            <div className="container">
                <div className="container-wrapper">
                    <div className="filter-menu-wrapper">

                        <div className="select-wrapper content-left">
                            <div className="select-product grid">
                                <h3>Vendas y Vendajes</h3>
                                <Select options={options}/>
                            </div>
                            <div className="select-brand grid">
                                <h3>Marca</h3>
                                <Select options={marca}/>
                            </div>
                            <div className="select-price grid">
                                <h3>Precio</h3>
                                <Select options={precio}/>
                            </div>
                        </div>

                        <div className="search-wrapper">
                            <Search/>
                        </div>

                    </div>
                    <div className="card-wrapper">
                        {
                        callApi()
                    } </div>
                </div>

            </div>
        </>
    );
}
