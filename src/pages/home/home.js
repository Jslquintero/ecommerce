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
import Card from "../../components/card/card";
import Accordion from "../../components/accordion/accordion";
import Select from "../../components/form/select/select";
import './_style.scss';
import './../../assets/styles/styles.scss';

export default function Home() {

    const callApi = () => { // consume api
        const cards = [{
                img: "https://picsum.photos/200/300",
                title: "GPI",
                subtitle: "1000",
                text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
            }]
        const data = cards.map((card) => {
            return (
                <Card img={
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


    return (
        <>
            <Navbar/>


            {/* <div className="container">

                <Accordion/>
                <div className="select-container">
                    <Select/>
                </div>
                <div className="cards grid-col-span-2">
                    {
                    callApi()
                } </div>

            </div> */}
        </>
    );
}
