/**
 * @author Jose Salvador lopez
 * @name Navbar tipo function
 * @date 07 Febrero del 2023
 * @descripcion Componente para el select
 * @editor  Jose Salvador lopez
 * @dateUpdate 09 Febrero del 2023
 * @descripcionUpdate cambio en la estructura del componente
 * @version 1.0.2
 * @params  {vale, label}
 */


import React, {useState} from "react";
import "./_style.scss";

export default function Select(props) {

    const [selectedOption, setSelectedOption] = useState(props.options[0]);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <select value={selectedOption}
            onChange={handleChange}>
            {
            props.options.map((option) => (
                <option value={
                    option.value
                }>
                    {
                    option.label
                } </option>
            ))
        } </select>
    );
};
