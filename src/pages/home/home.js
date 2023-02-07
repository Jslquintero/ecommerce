/**
 * @author Jose Salvador lopez
 * @name Navbar tipo function
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
import ProductCard from "../../components/card/product/card-product";
import Accordion from "../../components/accordion/accordion";
import './_style.scss';
import './../../assets/styles/styles.scss';

export default function Home() {

    const callApi = () => { // consume api
        const tarjetas = [
            {
                src: "https://picsum.photos/200/300",
                title: "GPI",
                price: "1000",
                description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
            }, {
                src: "https://picsum.photos/200/300",
                title: "GPI",
                price: "1000",
                description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
            }, {
                src: "https://picsum.photos/200/300",
                title: "GPI",
                price: "1000",
                description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
            }, {
                src: "https://picsum.photos/200/300",
                title: "GPI",
                price: "1000",
                description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
            },
        ]
        const data = tarjetas.map((tarjeta) => {
            return (
                <ProductCard src={
                        tarjeta.src
                    }
                    title={
                        tarjeta.title
                    }


                    price={
                        tarjeta.price
                    }

                    description={
                        tarjeta.description
                    }/>
            )
        });

        return data;
    }


    return (
        <>
            <Navbar/>


            <div className="container">

                <Accordion/>

                <div className="cards grid-col-span-2">
                    {
                    callApi()
                } </div>

            </div>
        </>
    );
}



